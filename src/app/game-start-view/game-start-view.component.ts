import { Component } from '@angular/core';
import {AuthService} from "../shared-services/auth.service";
import {StartService} from "../shared-services/start.service";


@Component({
  selector: 'app-game-start-view',
  templateUrl: './game-start-view.component.html',
  styleUrls: ['./game-start-view.component.css']
})
export class GameStartViewComponent {
  constructor(private authService: AuthService, private startService: StartService) {}

  logOut() {
    this.authService.logOut();
  }

  newGame() {
    this.startService.createGame();
  }

  loadGame() {
  }
}
