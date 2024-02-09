import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondevisComponent } from './gestiondevis.component';

describe('GestiondevisComponent', () => {
  let component: GestiondevisComponent;
  let fixture: ComponentFixture<GestiondevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondevisComponent]
    });
    fixture = TestBed.createComponent(GestiondevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
