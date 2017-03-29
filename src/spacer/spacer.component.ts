import { OnInit, Component, Input, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.css']
})
export class Spacer {
    @Input() width: string = '900';
}