import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingsListComponent } from './washings-list.component';

describe('WashingsListComponent', () => {
  let component: WashingsListComponent;
  let fixture: ComponentFixture<WashingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
