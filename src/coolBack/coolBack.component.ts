import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'cool-back',
  templateUrl: './coolBack.component.html',
  styleUrls: ['./coolBack.component.css']
})
export class CoolBack {

  public dashes: dash[] = [];
  private dashNum = 10;

  constructor(private ref: ChangeDetectorRef) {
    for (let i = 0; i < this.dashNum; i++) {
      this.dashes.push(new dash(i, i * 2, 0.5));
    }

    setInterval(() => {
      for (let i = 0; i < this.dashNum; i++) {
        this.dashes[i].x += 10;
      }
    }, 16);
  }
}

class dash {
  x: number;
  y: number;
  a: number;

  constructor(x, y, a) {
    this.x = x;
    this.y = y;
    this.a = a;
  }
}