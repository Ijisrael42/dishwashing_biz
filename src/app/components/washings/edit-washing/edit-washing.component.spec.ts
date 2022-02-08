import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWashingComponent } from './edit-washing.component';

describe('EditWashingComponent', () => {
  let component: EditWashingComponent;
  let fixture: ComponentFixture<EditWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
