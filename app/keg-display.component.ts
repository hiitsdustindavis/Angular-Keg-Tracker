import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h3>{{keg.brand}}</h3>
      <h3>{{keg.name}}</h3>
      <h4>Pint: $ {{keg.price}}</h4>
      <h4>ABV: {{keg.abv}}%</h4>
      <h4>Pints Left: {{keg.pintsLeft}}</h4>
    </div>
  `
})

export class KegDisplayComponent {
  public keg: Keg;

}
