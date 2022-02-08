import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWashingComponent } from './add-washing.component';

describe('AddWashingComponent', () => {
  let component: AddWashingComponent;
  let fixture: ComponentFixture<AddWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
