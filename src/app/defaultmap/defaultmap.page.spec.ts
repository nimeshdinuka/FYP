import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultmapPage } from './defaultmap.page';

describe('DefaultmapPage', () => {
  let component: DefaultmapPage;
  let fixture: ComponentFixture<DefaultmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
