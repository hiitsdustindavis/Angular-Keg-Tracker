import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg Tracker</h1>
      <keg-list [kegList]="kegs">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("High Life", "Miller", 3, 4.9, 0),
      new Keg("Lager", "Anchor Steam", 4.50, 4.0, 1),
    ]
  }
}
