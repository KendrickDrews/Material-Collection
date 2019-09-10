import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralListFooterComponent } from './mineral-list-footer.component';

describe('MineralListFooterComponent', () => {
  let component: MineralListFooterComponent;
  let fixture: ComponentFixture<MineralListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
