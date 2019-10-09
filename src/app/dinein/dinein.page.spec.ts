import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineinPage } from './dinein.page';

describe('DineinPage', () => {
  let component: DineinPage;
  let fixture: ComponentFixture<DineinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
