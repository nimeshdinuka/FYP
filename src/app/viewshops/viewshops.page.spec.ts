import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshopsPage } from './viewshops.page';

describe('ViewshopsPage', () => {
  let component: ViewshopsPage;
  let fixture: ComponentFixture<ViewshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
