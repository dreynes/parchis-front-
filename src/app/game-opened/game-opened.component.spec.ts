import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOpenedComponent } from './game-opened.component';

describe('GameOpenedComponent', () => {
  let component: GameOpenedComponent;
  let fixture: ComponentFixture<GameOpenedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameOpenedComponent]
    });
    fixture = TestBed.createComponent(GameOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
