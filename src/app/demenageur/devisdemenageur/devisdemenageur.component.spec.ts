import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisdemenageurComponent } from './devisdemenageur.component';

describe('DevisdemenageurComponent', () => {
  let component: DevisdemenageurComponent;
  let fixture: ComponentFixture<DevisdemenageurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevisdemenageurComponent]
    });
    fixture = TestBed.createComponent(DevisdemenageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
