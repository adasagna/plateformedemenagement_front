import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestationComponent } from './pestation.component';

describe('PestationComponent', () => {
  let component: PestationComponent;
  let fixture: ComponentFixture<PestationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestationComponent]
    });
    fixture = TestBed.createComponent(PestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
