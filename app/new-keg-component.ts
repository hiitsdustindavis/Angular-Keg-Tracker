import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div>
      <h3>Add Keg:</h3>
      <label>Enter Keg Name:</label>
      <input placeholder="name" #newName>
      <label>Enter Beer Brand:</label>
      <input placeholder="brand" #newBrand>
      <label>Enter Pint Price:</label>
      <input placeholder="price per pint" #newPrice>
      <label>Enter Alcohol Volume:</label>
      <input placeholder="alcohol by volume" #newAbv>
      <button (click)="addKeg(newName, newBrand, newPrice, newAbv)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(name: HTMLInputElement, brand: HTMLInputElement, price: HTMLInputElement, abv: HTMLInputElement) {
    this.onSubmitNewKeg.emit([name.value, brand.value, price.value, abv.value]);
    name.value = "";
    brand.value = "";
    price.value = "";
    abv.value = "";
  }
}
