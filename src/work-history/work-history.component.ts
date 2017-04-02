import { AfterViewInit, ElementRef, OnInit, Component, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Core } from './../Core';

@Component({
  selector: 'work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})

export class WorkHistory implements AfterViewInit {
  @ViewChild('subContent') subContent: ElementRef;
  @ViewChild('xboxContent') xboxContent: ElementRef;
  @ViewChild('imagineContent') imagineContent: ElementRef;
  @ViewChild('flashContent') flashContent: ElementRef;

  xboxOffset: number = 0;
  flashOffset: number = 0;
  imagineOffset: number = 0;

  xboxSelected: boolean = false;
  flashSelected: boolean = false;
  imagineSelected: boolean = false;

  globalOffest = 201;

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

  scrollInterval: NodeJS.Timer = null;

  constructor(public core: Core) {

  }

  ngAfterViewInit() {
    this.xboxOffset = this.xboxContent.nativeElement.offsetTop - this.globalOffest;
    this.flashOffset = this.flashContent.nativeElement.offsetTop - this.globalOffest;
    this.imagineOffset = this.imagineContent.nativeElement.offsetTop - this.globalOffest;

    this.subContent.nativeElement.onscroll = () => {
      const scroll = this.subContent.nativeElement.scrollTop + this.globalOffest;
      if (this.xboxOffset + 300 >= scroll && this.xboxOffset - 300 <= scroll) {
        this.xboxSelected = true;
      } else {
        this.xboxSelected = false;
      }

      if (this.imagineOffset + 300 >= scroll && this.imagineOffset - 300 <= scroll) {
        this.imagineSelected = true;
      } else {
        this.imagineSelected = false;
      }

      if (this.flashOffset + 300 >= scroll && this.flashOffset - 300 <= scroll) {
        this.flashSelected = true;
      } else {
        this.flashSelected = false;
      }
    }

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
    switch (item) {
      case 'xbox':
        this.scrollTo(this.xboxContent.nativeElement.offsetTop - this.globalOffest);
        break;
      case 'imagine':
        this.scrollTo(this.imagineContent.nativeElement.offsetTop - this.globalOffest);
        break;
      case 'flash':
        this.scrollTo(this.flashContent.nativeElement.offsetTop - this.globalOffest);
        break;
    }
  }
}