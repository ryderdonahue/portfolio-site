import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from '@angular/core';

@Injectable()
export class Core {
      public scene: BehaviorSubject<string> = new BehaviorSubject<string>('intro');
      public subScene: BehaviorSubject<string> = new BehaviorSubject<string>('xbox');
}