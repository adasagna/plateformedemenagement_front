import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondemandeComponent } from './gestiondemande.component';

describe('GestiondemandeComponent', () => {
  let component: GestiondemandeComponent;
  let fixture: ComponentFixture<GestiondemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondemandeComponent]
    });
    fixture = TestBed.createComponent(GestiondemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
