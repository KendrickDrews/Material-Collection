import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralListComponent } from './mineral-list.component';

describe('MineralListComponent', () => {
  let component: MineralListComponent;
  let fixture: ComponentFixture<MineralListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
