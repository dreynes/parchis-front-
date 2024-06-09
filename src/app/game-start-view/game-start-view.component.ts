import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-game-start-view',
  templateUrl: './game-start-view.component.html',
  styleUrls: ['./game-start-view.component.css']
})
export class GameStartViewComponent {
  constructor(private authService: AuthService) {}

  logOut() {
    this.authService.logOut();
  }

  newGame() {
  }

  loadGame() {
  }
}
