import { TestBed, inject } from '@angular/core/testing';
import { MineralDataService } from './mineral-data.service';
import { ApiService } from './api.service';

describe('MineralDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MineralDataService,
        ApiService
      ]
    });
  });

  it('should ...', inject([MineralDataService], (service: MineralDataService) => {
    expect(service).toBeTruthy();
  }));

});