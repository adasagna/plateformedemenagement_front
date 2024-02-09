import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprofilComponent } from './gestionprofil.component';

describe('GestionprofilComponent', () => {
  let component: GestionprofilComponent;
  let fixture: ComponentFixture<GestionprofilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionprofilComponent]
    });
    fixture = TestBed.createComponent(GestionprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
