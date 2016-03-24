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
      new Keg("New Beer1", "New Brand 1", 3, 4.9, 0),
      new Keg("New Beer2", "New Brand 2", 4.50, 4.0, 1),
      new Keg("New Beer3", "New Brand 3", 3, 4.9, 0),
      new Keg("New Beer4", "New Brand 4", 4.50, 4.0, 1),
      new Keg("New Beer5", "New Brand 5", 3, 4.9, 0),
      new Keg("New Beer6", "New Brand 6", 4.50, 4.0, 1),
    ]
  }
}
