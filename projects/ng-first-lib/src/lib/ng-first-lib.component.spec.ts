import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFirstLibComponent } from './ng-first-lib.component';

describe('NgFirstLibComponent', () => {
  let component: NgFirstLibComponent;
  let fixture: ComponentFixture<NgFirstLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgFirstLibComponent]
    });
    fixture = TestBed.createComponent(NgFirstLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
