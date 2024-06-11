import {Component, OnInit} from '@angular/core';
import {DiceComponent} from "../dice/dice.component";
import {BoardComponent} from "../board/board.component";
import {StartService} from "../shared-services/start.service";
@Component({
  selector: 'app-game-opened',
  templateUrl: './game-opened.component.html',
  styleUrls: ['./game-opened.component.css']
})
export class GameOpenedComponent implements OnInit{
  boardComponent: BoardComponent = new BoardComponent();
  diceComponent: DiceComponent = new DiceComponent();
  constructor(private startGameService: StartService) { }

  ngOnInit(): void {
    this.startNewGame();
  }
  startNewGame(): void {
    this.startGameService.createGame().subscribe(
      (data: any) => {

        console.log('Datos iniciales del juego:', data);
      },
      (error: any) => {
        console.error('Error al iniciar un nuevo juego:', error);
      }
    );
  }

  exitGame() {
    this.startGameService.exit();
  }

}
