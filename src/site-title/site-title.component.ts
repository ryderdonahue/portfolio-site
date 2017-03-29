import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Core } from '../Core';

@Component({
  selector: 'site-title',
  templateUrl: './site-title.component.html',
  styleUrls: ['./site-title.component.css']
})
export class SiteTitle {
  public scene;
  public size = '42';

  constructor(private ref: ChangeDetectorRef, private core: Core) {
    this.core.scene.subscribe(scene => {
      this.processSceneChange(scene);
    })
  }

  ngOnInit() {
  }

  private processSceneChange(scene: string) {
    if (this.scene !== scene) {
      this.scene = scene;
     // alert(scene) 
      switch (scene) {
        case 'intro-transition':
          this.size = '25';
          break;
      }
    }
  }

  public openExternal(url: string) {
    window.open(url);
  }
}


