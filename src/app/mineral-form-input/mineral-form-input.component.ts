import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MineralDataService } from '../mineral-data.service';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-form-input',
  templateUrl: './mineral-form-input.component.html',
  styleUrls: ['./mineral-form-input.component.css'],
  providers: [MineralDataService]
})
export class MineralFormInputComponent implements OnInit {


  newMineral: Mineral = new Mineral();
  
  @Output()
  add: EventEmitter<Mineral> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addMineral() {
    this.add.emit(this.newMineral);
    this.newMineral = new Mineral();
  }

}
