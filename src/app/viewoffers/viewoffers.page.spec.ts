import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoffersPage } from './viewoffers.page';

describe('ViewoffersPage', () => {
  let component: ViewoffersPage;
  let fixture: ComponentFixture<ViewoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
