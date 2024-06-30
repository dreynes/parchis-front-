import { Component } from '@angular/core';
import { AuthService } from "../shared-services/auth.service";
import { StartService } from "../shared-services/start.service";
import { Router } from "@angular/router";
import { OpenService } from "../shared-services/open.service";

@Component({
  selector: 'app-game-start-view',
  templateUrl: './game-start-view.component.html',
  styleUrls: ['./game-start-view.component.css']
})
export class GameStartViewComponent {
  gameNames: string[] = [];
  showModal: boolean = false;
  showNoGamesModal: boolean = false;
  showPlayerSelectionModal: boolean = false;
  selectedGameName: string = '';
  selectedPlayerCount: number | null = null;

  constructor(
    private authService: AuthService,
    private startService: StartService,
    private openService: OpenService,
    private router: Router
  ) {}

  logOut() {
    this.authService.logOut();
  }

  newGame() {
    this.showPlayerSelectionModal = true;
  }

  selectPlayerCount(playerCount: number) {
    this.selectedPlayerCount = playerCount;
    this.createGame();
  }

  createGame() {
    if (this.selectedPlayerCount) {
      this.startService.createGame(this.selectedPlayerCount).subscribe(
        () => {
          this.router.navigate(['/game-opened']);
          this.showPlayerSelectionModal = false;
        },
        error => {
          console.error('Error creating game:', error);
        }
      );
    }
  }

  loadGame() {
    this.openService.getSavedGames().subscribe(
      gameNames => {
        if (gameNames.length > 0) {
          this.gameNames = gameNames;
          this.showModal = true;
        } else {
          this.showNoGamesModal = true;
        }
      },
      error => {
        console.error('Error fetching saved games:', error);
      }
    );
  }

  onGameSelect(gameName: string) {
    this.selectedGameName = gameName;
  }

  loadSelectedGame() {
    if (this.selectedGameName) {
      this.openService.loadGameByName(this.selectedGameName).subscribe(
        gameState => {
          // Aquí debes manejar la lógica para cargar el estado del juego
          this.router.navigate(['/game-opened']); // Redirige a la vista del juego
          this.showModal = false;
        },
        error => {
          console.error('Error loading game:', error);
        }
      );
    }
  }

  closeModal() {
    this.showModal = false;
    this.showNoGamesModal = false;
    this.showPlayerSelectionModal = false;
  }
}
