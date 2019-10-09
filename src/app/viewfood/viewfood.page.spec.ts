import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfoodPage } from './viewfood.page';

describe('ViewfoodPage', () => {
  let component: ViewfoodPage;
  let fixture: ComponentFixture<ViewfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
