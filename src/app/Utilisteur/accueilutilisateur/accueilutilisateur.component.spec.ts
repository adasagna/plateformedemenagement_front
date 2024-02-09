import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilutilisateurComponent } from './accueilutilisateur.component';

describe('AccueilutilisateurComponent', () => {
  let component: AccueilutilisateurComponent;
  let fixture: ComponentFixture<AccueilutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilutilisateurComponent]
    });
    fixture = TestBed.createComponent(AccueilutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
