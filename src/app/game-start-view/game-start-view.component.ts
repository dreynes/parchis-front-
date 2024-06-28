import { Component } from '@angular/core';
import {AuthService} from "../shared-services/auth.service";
import {StartService} from "../shared-services/start.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-game-start-view',
  templateUrl: './game-start-view.component.html',
  styleUrls: ['./game-start-view.component.css']
})
export class GameStartViewComponent {
  constructor(private authService: AuthService, private startService: StartService, private router: Router) {}

  logOut() {
    this.authService.logOut();
  }

  newGame() {
    this.startService.createGame().subscribe(
      () => {
        this.router.navigate(['/game-opened']);
      },
      error => {
        console.error('Error creating game:', error);
      }
    );
  }
  loadGame() {
  }
}
