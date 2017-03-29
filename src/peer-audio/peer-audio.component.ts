import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'peer-audio',
  templateUrl: './peer-audio.component.html',
  styleUrls: ['./peer-audio.component.css']
})
export class PeerAudio {


  @ViewChild('peerAudio') peerAudio: ElementRef;

  peer;
  private voiceServerUrl = 'http://localhost:8117';
  myAudioLevel;
  private myAudioLevelObs: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  foreignAudioLevel;
  private foreignAudioLevelObs: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  foreignIdInput;
  foreignId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  mypeerid: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public connected: boolean = false;

  constructor(private ref: ChangeDetectorRef, private http: Http) {
  }

  ngOnInit() {

    this.http.post(this.voiceServerUrl, { derp: 'derpString' }).subscribe(response => {
      console.log(response);
    })


    this.myAudioLevelObs.subscribe(num => {
      this.myAudioLevel = num;
      this.ref.detectChanges();
    })

    this.foreignAudioLevelObs.subscribe(num => {
      this.foreignAudioLevel = num;
      this.ref.detectChanges();
    })


    this.peer = new Peer({ key: 's9hp9bp6p9cnmi' });
    const self = this;
    this.peer.on('open', function (id) {
      self.mypeerid.next(id);
    })

    this.peer.on('connection', function (conn) {
      conn.on('data', function (data) {
        console.log(data);
      });
    });

    const n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    this.peer.on('call', function (call) {
      self.foreignId.next(call.peer);
      n.getUserMedia({ video: false, audio: true }, function (stream) {
        self.visualizeStream(stream, self.myAudioLevelObs);
        call.answer(stream);
        call.on('stream', function (remotestream) {
          self.visualizeStream(remotestream, self.foreignAudioLevelObs);
          self.connected = true;
          self.peerAudio.nativeElement.src = (URL).createObjectURL(remotestream);
        })
      }, function (err) {
        console.log('Failed to get stream', err);
      })
    })
  }

  connect() {
    this.foreignId.next(this.foreignIdInput);
    const conn = this.peer.connect(this.foreignIdInput);
    const self = this;
    conn.on('open', function () {
      self.audioConnect();
    });
  }

  private audioConnect() {
    const self = this;
    const n = <any>navigator;
    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    n.getUserMedia({ video: false, audio: true }, function (stream) {
      self.visualizeStream(stream, self.myAudioLevelObs);
      const call = self.peer.call(self.foreignIdInput, stream);
      call.on('stream', function (remotestream) {
        self.visualizeStream(remotestream, self.foreignAudioLevelObs);
        self.connected = true;
        self.peerAudio.nativeElement.src = (URL).createObjectURL(remotestream);
      })
    }, function (err) {
      console.log('Failed to get stream', err);
    })
  }

  private visualizeStream(stream, obs) {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);

    javascriptNode.onaudioprocess = function () {
      var array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      var values = 0;

      var length = array.length;
      for (var i = 0; i < length; i++) {
        values += array[i];
      }

      var average = values / length;
      obs.next(average);
    }

  }
}


