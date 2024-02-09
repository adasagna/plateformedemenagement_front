import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionutilisationComponent } from './conditionutilisation.component';

describe('ConditionutilisationComponent', () => {
  let component: ConditionutilisationComponent;
  let fixture: ComponentFixture<ConditionutilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionutilisationComponent]
    });
    fixture = TestBed.createComponent(ConditionutilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
