import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtensilComponent } from './edit-utensil.component';

describe('EditUtensilComponent', () => {
  let component: EditUtensilComponent;
  let fixture: ComponentFixture<EditUtensilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUtensilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUtensilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
