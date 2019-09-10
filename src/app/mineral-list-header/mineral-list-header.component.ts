import { Component, Output, EventEmitter } from '@angular/core';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-list-header',
  templateUrl: './mineral-list-header.component.html',
  styleUrls: ['./mineral-list-header.component.css']
})
export class MineralListHeaderComponent {

  newMineral: Mineral = new Mineral();

  @Output()
  add: EventEmitter<Mineral> = new EventEmitter();

  constructor() {
  }

  addMineral() {
    this.add.emit(this.newMineral);
    this.newMineral = new Mineral();
  }

}
