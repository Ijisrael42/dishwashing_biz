import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtensilComponent } from './add-utensil.component';

describe('AddUtensilComponent', () => {
  let component: AddUtensilComponent;
  let fixture: ComponentFixture<AddUtensilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUtensilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtensilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
