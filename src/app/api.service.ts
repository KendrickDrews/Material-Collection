import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mineral } from './mineral';
import { Observable } from 'rxjs/RX';
import { map} from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;
const _ROCK_COLLECTION = '/rock_collection/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '47c177d5-6123-47ca-b69b-62e8e8961e75'
  })
};

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  } 
   // API: GET /minerals
   public getAllMinerals(): Observable<Mineral[]> {
    return this.http
      .get(API_URL + _ROCK_COLLECTION, httpOptions)
      .map((response: Response[]) => {
        const minerals = response.map(mineral => new Mineral(mineral));     
        return minerals;
      })
      .catch(this.handleError);
  }

  // API: POST /minerals
  public createMineral(mineral: Mineral): Observable<Mineral> {
    return this.http
      .post(API_URL + _ROCK_COLLECTION + mineral + '/', httpOptions)
      .map(response => {
        return new Mineral(response);
      })
      .catch(this.handleError);
  }

  // API: GET /minerals/:id
  public getMineralById(mineral: Number): Observable<Mineral> {
    return this.http
      .get(API_URL + _ROCK_COLLECTION + mineral + '/', httpOptions)
      .map(response => {
        return new Mineral(response);
      })
      .catch(this.handleError);
  }

  // API: PUT /minerals/:id
  public updateMineral(mineral: Number): Observable<Mineral> {
    return this.http
      .put(API_URL + _ROCK_COLLECTION + mineral + '/', httpOptions)
      .map(response => {
        return new Mineral(response);
      })
      .catch(this.handleError);
  }

  // DELETE /minerals/:id
  public deleteMineralById(mineralID: Number): Observable<null> {
    return this.http
      .delete(API_URL + _ROCK_COLLECTION + mineralID + '/', httpOptions)
      .map(response => null)
      .catch(this.handleError);
  }
  // RESET Collection to initial /minerals/:id
  public resetToCollectionDefinition(): Observable<any> {
    return this.http
      .post(API_URL + _ROCK_COLLECTION + '/reset/', httpOptions)
      .map(response => {
        return response })
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}