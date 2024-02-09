import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueildemenageurComponent } from './accueildemenageur.component';

describe('AccueildemenageurComponent', () => {
  let component: AccueildemenageurComponent;
  let fixture: ComponentFixture<AccueildemenageurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueildemenageurComponent]
    });
    fixture = TestBed.createComponent(AccueildemenageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
