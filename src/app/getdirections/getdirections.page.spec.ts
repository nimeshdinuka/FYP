import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdirectionsPage } from './getdirections.page';

describe('GetdirectionsPage', () => {
  let component: GetdirectionsPage;
  let fixture: ComponentFixture<GetdirectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdirectionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdirectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
