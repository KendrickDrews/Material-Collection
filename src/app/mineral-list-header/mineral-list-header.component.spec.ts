import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralListHeaderComponent } from './mineral-list-header.component';

describe('MineralListHeaderComponent', () => {
  let component: MineralListHeaderComponent;
  let fixture: ComponentFixture<MineralListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
