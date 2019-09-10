import { Component, OnInit } from '@angular/core';
import { MineralDataService } from './mineral-data.service';
import { Mineral } from './mineral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MineralDataService]
})
export class AppComponent implements OnInit {

  minerals: Mineral[] = [];

  constructor(
    private mineralDataService: MineralDataService
  ) {
  }

  public ngOnInit() {
    this.mineralDataService
      .getAllMinerals()
      .subscribe(
        (minerals) => {
          this.minerals = minerals;
        }
      );
  }

  onAddMineral(mineral) {
    this.mineralDataService
      .addMineral(mineral)
      .subscribe(
        (newMineral) => {
          this.minerals = this.minerals.concat(newMineral);
        }
      );
  }
  onRemoveMineral(mineral) {
    this.mineralDataService
      .deleteMineralById(mineral.id)
      .subscribe(
        (_) => {
          this.minerals = this.minerals.filter((t) => t.id !== mineral.id);
        }
      );
  }
}