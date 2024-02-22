import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedevisComponent } from './listedevis.component';

describe('ListedevisComponent', () => {
  let component: ListedevisComponent;
  let fixture: ComponentFixture<ListedevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedevisComponent]
    });
    fixture = TestBed.createComponent(ListedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
