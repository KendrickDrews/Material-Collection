import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent {

  @Input()
  minerals: Mineral[];

  @Output()
  remove: EventEmitter<Mineral> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Mineral> = new EventEmitter();

  constructor() {
  }

  onToggleMineralComplete(mineral: Mineral) {
    this.toggleComplete.emit(mineral);
  }

  onRemoveMineral(mineral: Mineral) {
    this.remove.emit(mineral);
  }

}