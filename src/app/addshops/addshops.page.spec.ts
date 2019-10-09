import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshopsPage } from './addshops.page';

describe('AddshopsPage', () => {
  let component: AddshopsPage;
  let fixture: ComponentFixture<AddshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
