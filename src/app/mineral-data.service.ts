import { Injectable } from '@angular/core';
import { Mineral } from './mineral';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineralDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for minerals
  minerals: Mineral[] = [];

  constructor(
    private api: ApiService
  ) {
  }

  addMineral(mineral: Mineral): Observable<Mineral> {
    return this.api.createMineral(mineral);
  }

  // DELETE /minerals/:id
  deleteMineralById(mineralId: number): Observable<Mineral> {
    return this.api.deleteMineralById(mineralId);
  }

  // PUT /minerals/:id
  updateMineral(mineral: Mineral): Observable<Mineral> {
    return this.api.updateMineral(mineral);
  }

  // GET /minerals
  getAllMinerals(): Observable<Mineral[]> {
    return this.api.getAllMinerals();
  }

  // GET /minerals/:id
  getMineralById(mineralId: number): Observable<Mineral> {
    return this.api.getMineralById(mineralId);
  }

}
