import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncompteComponent } from './gestioncompte.component';

describe('GestioncompteComponent', () => {
  let component: GestioncompteComponent;
  let fixture: ComponentFixture<GestioncompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestioncompteComponent]
    });
    fixture = TestBed.createComponent(GestioncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
