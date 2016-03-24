import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
  <div>
    <h3>Edit Mode</h3>
    <label>Edit Keg Brand:</label>
    <input [(ngModel)]="keg.brand"/>
    <label>Edit Keg Name:</label>
    <input [(ngModel)]="keg.name"/>
    <label>Edit Pint Price:</label>
    <input [(ngModel)]="keg.price"/>
    <label>Edit ABV:</label>
    <input [(ngModel)]="keg.abv"/>
    <label>Edit Pints Left:</label>
    <input [(ngModel)]="keg.pintsLeft"/>
  </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
