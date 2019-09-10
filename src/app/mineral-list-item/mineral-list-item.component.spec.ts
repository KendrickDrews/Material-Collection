import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralListItemComponent } from './mineral-list-item.component';
import { Mineral } from '../mineral';

describe('MineralListItemComponent', () => {
  let component: MineralListItemComponent;
  let fixture: ComponentFixture<MineralListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralListItemComponent);
    component = fixture.componentInstance;
    // component.mineral = new Mineral({ id: 1, title: 'Test', complete: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
