import { AfterViewInit, ElementRef,  OnInit, Component, Input, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'ryd-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButton implements AfterViewInit {
  @Input() delay: number = 500;
  @Input() text: string = 'button';
  @Input() highlight: boolean = false;

  public show: boolean = false;
  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.show = true;
    }, this.delay);
  }
}