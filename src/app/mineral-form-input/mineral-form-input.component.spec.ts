import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralFormInputComponent } from './mineral-form-input.component';

describe('MineralFormInputComponent', () => {
  let component: MineralFormInputComponent;
  let fixture: ComponentFixture<MineralFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
