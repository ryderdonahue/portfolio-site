import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Core } from './../Core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSeeWork = false;
  showWorkHistory = false;
  bioIntro = 'Software Engineer working for Microsoft\'s Team Xbox on new and exciting experiences.';

  constructor(public core: Core) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSeeWork = true;
    }, 1000);
  }

  showWork() {
    this.core.scene.next('intro-transition');
    this.showWorkHistory = true;
    this.showSeeWork = false;

    setTimeout(() => {
      this.core.scene.next('main');
    }, 1000);
  }
}
