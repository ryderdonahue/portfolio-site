import { AfterViewInit, OnInit, Component, Input, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'ryd-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class Icon implements AfterViewInit {
  @Input() delay: number = 500;
  @Input() source: string = '';
  @Input() size: string = '42';
  @Input() altText: string = 'missing icon alt-text';
  public show: boolean = false;
  constructor() {

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.show = true;
    }, this.delay);
  }

}