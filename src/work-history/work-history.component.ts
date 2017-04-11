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

  xboxSelected: boolean = true;
  flashSelected: boolean = false;
  imagineSelected: boolean = false;

  globalOffest = 201;

  xboxProducts = [
    { name: 'Xbox One Shell/Dashboard' },
    { name: 'Xbox App on Windows' },
    { name: 'Prototyping & Research' },
    { name: 'Beam Streaming clients' }
  ];

  flashProducts = [
    { name: 'Project NOVA',
      url: 'http://armorgames.com/play/14228/project-nova' },
    { name: 'Operation BlackKnife',
      url: 'http://armorgames.com/play/6507/operation-blackknife' },
    { name: 'Soviet Silo Defense',
      url: 'http://armorgames.com/play/1906/soviet-silo-defense' },
    { name: 'Point Resistence',
      url: 'http://armorgames.com/play/453/pointresistance-imminent-position' }
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