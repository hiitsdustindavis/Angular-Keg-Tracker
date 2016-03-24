import { Component, EventEmitter } from 'angular2/core';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegDisplayComponent, NewKegComponent],
  template: `
    <keg-display *ngFor="#keg of kegList" [keg]="keg">
    </keg-display>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  createKeg(newKeg: string): void {
    var kegPrice: number = parseFloat(newKeg[2]);
    var kegAbv: number = parseFloat(newKeg[3]);
    this.kegList.push(
      new Keg(newKeg[0], newKeg[1], kegPrice, kegAbv, this.kegList.length)
    )
  }
}
