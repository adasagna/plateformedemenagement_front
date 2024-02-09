import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilclientComponent } from './accueilclient.component';

describe('AccueilclientComponent', () => {
  let component: AccueilclientComponent;
  let fixture: ComponentFixture<AccueilclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilclientComponent]
    });
    fixture = TestBed.createComponent(AccueilclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
