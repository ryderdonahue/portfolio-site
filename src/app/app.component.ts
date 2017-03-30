import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Core } from './../Core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subContent') subContent: ElementRef;
  @ViewChild('xboxContent') xboxContent: ElementRef;
  @ViewChild('imagineContent') imagineContent: ElementRef;
  @ViewChild('flashContent') flashContent: ElementRef;

  bioIntro = 'Software Engineer working for Microsoft\'s Team Xbox on new and exciting experiences.';
  xboxText = 'Since the Summer of 2014 I have been been a full time Software Engineer at Microsoft working under the Xbox orginization. During my time in Redmond I have worked on a handful of products with a menagerie of technologies. Working at Microsoft has given me the access to work with a bountiful collection of bright and talented people, many of whome I consider good friends.';
  xboxProducts = [
    { name: 'Xbox One Shell/Dashboard' },
    { name: 'Xbox App on Windows' },
    { name: 'Prototyping & Research Div.' },
    { name: 'Beam Streaming clients' }
  ];

  flashProducts = [
    { name: 'Project NOVA' },
    { name: 'Operation BlackKnife' },
    { name: 'Soviet Silo Defense' },
    { name: 'Point Resistence' }
  ];
  showSeeWork = false;
  showMenuBar = false;
  scrollInterval: NodeJS.Timer = null;

  constructor(public core: Core) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSeeWork = true;
    }, 1000);
  }

  showWork() {
    this.core.scene.next('intro-transition');
    this.showMenuBar = true;
    this.showSeeWork = false;

    setTimeout(() => {
      this.core.scene.next('main');
    }, 1000)
  }


  // jquery-less smooth scroll!
  scrollTo(location: number) {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    const currentLocation = this.subContent.nativeElement.scrollTop;
    this.scrollInterval = setInterval(() => {
      const delta = (location - this.subContent.nativeElement.scrollTop) / 20;
      this.subContent.nativeElement.scrollTop += delta < 0 ? Math.floor(delta) : Math.ceil(delta);
      if (this.subContent.nativeElement.scrollTop + 1 > location && this.subContent.nativeElement.scrollTop - 1 < location) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    }, 5);
  }

  openMenu(item: string) {
    const globalOffest = 201;
    switch (item) {
      case 'xbox':
        this.scrollTo(this.xboxContent.nativeElement.offsetTop - globalOffest);
        break;
      case 'imagine':
        this.scrollTo(this.imagineContent.nativeElement.offsetTop - globalOffest);
        break;
      case 'flash':
        this.scrollTo(this.flashContent.nativeElement.offsetTop - globalOffest);
        break;
    }
  }
}
