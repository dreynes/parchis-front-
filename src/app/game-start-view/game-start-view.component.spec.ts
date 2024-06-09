import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartViewComponent } from './game-start-view.component';

describe('GameStartViewComponent', () => {
  let component: GameStartViewComponent;
  let fixture: ComponentFixture<GameStartViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameStartViewComponent]
    });
    fixture = TestBed.createComponent(GameStartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
