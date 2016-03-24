import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { PourPintComponent } from './pour-pint.component';
import { EditKegComponent } from './edit-keg.component';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PourPintComponent, EditKegComponent],
  template: `
    <div>
      <div *ngIf="!selected">
        <h3>{{keg.brand}}</h3>
        <h3>{{keg.name}}</h3>
        <h4>Pint: $ {{keg.price}}</h4>
        <h4>ABV: {{keg.abv}}%</h4>
        <h4>Pints Left: {{keg.pintsLeft}}</h4>
        <pour-pint [keg]="keg"></pour-pint>
      </div>
      <button (click)="kegClicked()">Edit Keg</button>
      <edit-keg *ngIf="selected" [keg]="keg"></edit-keg>
    </div>
  `
})

export class KegDisplayComponent {
  public keg: Keg;
  public selected: boolean = false;
  kegClicked(): void {
    this.selected = !this.selected;
  }
}
