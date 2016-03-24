import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3 class="editKegTitle">Edit Mode</h3>
    <div class="inputs-keg">
      <h3><input class="input-brand" [(ngModel)]="keg.brand"/></h3>
      <h3><input class="input-name" [(ngModel)]="keg.name"/></h3>
      <h4><input class="input-price" [(ngModel)]="keg.price"/></h4>
      <h4><input class="input-keg" [(ngModel)]="keg.abv"/></h4>
      <h4><input class="input-pintsLeft" [(ngModel)]="keg.pintsLeft"/></h4>
    </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
