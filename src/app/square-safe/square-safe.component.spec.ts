import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareSafeComponent } from './square-safe.component';

describe('SquareSafeComponent', () => {
  let component: SquareSafeComponent;
  let fixture: ComponentFixture<SquareSafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareSafeComponent]
    });
    fixture = TestBed.createComponent(SquareSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
