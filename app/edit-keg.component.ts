import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3>Edit Mode</h3>
    <div class="inputs-keg">
      <input [(ngModel)]="keg.brand"/>
      <input [(ngModel)]="keg.name"/>
      <input [(ngModel)]="keg.price"/>
      <input [(ngModel)]="keg.abv"/>
      <input [(ngModel)]="keg.pintsLeft"/>
    </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
