import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionutilisateurComponent } from './gestionutilisateur.component';

describe('GestionutilisateurComponent', () => {
  let component: GestionutilisateurComponent;
  let fixture: ComponentFixture<GestionutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionutilisateurComponent]
    });
    fixture = TestBed.createComponent(GestionutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
