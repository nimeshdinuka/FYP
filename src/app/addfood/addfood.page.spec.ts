import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodPage } from './addfood.page';

describe('AddfoodPage', () => {
  let component: AddfoodPage;
  let fixture: ComponentFixture<AddfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
