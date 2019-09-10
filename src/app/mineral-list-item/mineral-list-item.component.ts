import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-list-item',
  templateUrl: './mineral-list-item.component.html',
  styleUrls: ['./mineral-list-item.component.css']
})
export class MineralListItemComponent {

  
  @Input() 
  mineral: Mineral;
  

  @Output()
  remove: EventEmitter<Mineral> = new EventEmitter();

  constructor() {
    
  }

  removeMineral(mineral: Mineral) {
    this.remove.emit(mineral);
  }

}