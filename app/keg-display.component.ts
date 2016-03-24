import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { PourPintComponent } from './pour-pint.component';
import { EditKegComponent } from './edit-keg.component';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PourPintComponent, EditKegComponent],
  template: `

      <div class="keg-info" *ngIf="!selected" [class.red]="keg.pintsLeft <= 10">
      <pour-pint *ngIf="keg.pintsLeft > 0" [keg]="keg"></pour-pint>
        <h3>{{keg.brand}}</h3>
        <h3>{{keg.name}}</h3>
        <h4>Pint: $ {{keg.price}}</h4>
        <h4>ABV: {{keg.abv}}%</h4>
        <h4>Pints Left: {{keg.pintsLeft}}</h4>
      </div>
      <edit-keg class="edit-mode" *ngIf="selected" [keg]="keg"></edit-keg>
      <button class="button-edit"(click)="kegClicked()">Edit Keg</button>
    
  `
})

export class KegDisplayComponent {
  public keg: Keg;
  public selected: boolean = false;
  kegClicked(): void {
    this.selected = !this.selected;
  }
}
