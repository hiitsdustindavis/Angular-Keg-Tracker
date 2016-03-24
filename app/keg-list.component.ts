import { Component, EventEmitter } from 'angular2/core';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';
import { EditKegComponent } from './edit-keg.component';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegDisplayComponent, NewKegComponent, EditKegComponent],
  template: `

    <keg-display *ngFor="#keg of kegList"
    (click)="kegClicked(keg)"
    [class.selected]="keg === selectedKeg"
    [keg]="keg">
    </keg-display>
    <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  createKeg(newKeg: string): void {
    var kegPrice: number = parseFloat(newKeg[2]);
    var kegAbv: number = parseFloat(newKeg[3]);
    this.kegList.push(
      new Keg(newKeg[0], newKeg[1], kegPrice, kegAbv, this.kegList.length)
    )
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }

}
