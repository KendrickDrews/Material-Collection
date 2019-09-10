import { Component, Input } from '@angular/core';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-list-footer',
  templateUrl: './mineral-list-footer.component.html',
  styleUrls: ['./mineral-list-footer.component.css']
})
export class MineralListFooterComponent {

  @Input()
   minerals: Mineral[];

  constructor() {
  }

}