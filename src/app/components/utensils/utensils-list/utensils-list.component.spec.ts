import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtensilsListComponent } from './utensils-list.component';

describe('UtensilsListComponent', () => {
  let component: UtensilsListComponent;
  let fixture: ComponentFixture<UtensilsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtensilsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtensilsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
