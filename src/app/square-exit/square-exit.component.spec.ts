import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareExitComponent } from './square-exit.component';

describe('SquareExitComponent', () => {
  let component: SquareExitComponent;
  let fixture: ComponentFixture<SquareExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareExitComponent]
    });
    fixture = TestBed.createComponent(SquareExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
