/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EspecialistSelectComponent } from './EspecialistSelect.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"
describe('EspecialistSelectComponent', () => {
  let component: EspecialistSelectComponent;
  let fixture: ComponentFixture<EspecialistSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ EspecialistSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
