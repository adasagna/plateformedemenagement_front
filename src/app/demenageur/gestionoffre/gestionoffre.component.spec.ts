import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionoffreComponent } from './gestionoffre.component';

describe('GestionoffreComponent', () => {
  let component: GestionoffreComponent;
  let fixture: ComponentFixture<GestionoffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionoffreComponent]
    });
    fixture = TestBed.createComponent(GestionoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
