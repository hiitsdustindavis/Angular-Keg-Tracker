import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'pour-pint',
  inputs: ['keg'],
  template: `
    <div>
      <button class="button-sell" (click)="pintPoured()">Sell Pint!</button>
    </div>
  `
})

export class PourPintComponent {
  public keg: Keg;
  pintPoured(){
    this.keg.pintsLeft -=1;
  }
}
