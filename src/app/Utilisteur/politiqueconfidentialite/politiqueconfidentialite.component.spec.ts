import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueconfidentialiteComponent } from './politiqueconfidentialite.component';

describe('PolitiqueconfidentialiteComponent', () => {
  let component: PolitiqueconfidentialiteComponent;
  let fixture: ComponentFixture<PolitiqueconfidentialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueconfidentialiteComponent]
    });
    fixture = TestBed.createComponent(PolitiqueconfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
