import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { StartService } from '../shared-services/start.service';
import {SquareConverterService} from "../shared-services/square-converter-service";
import {DiceComponent} from "../dice/dice.component";
@Component({
  selector: 'app-game-opened',
  templateUrl: './game-opened.component.html',
  styleUrls: ['./game-opened.component.css']
})
export class GameOpenedComponent implements OnInit {
  boardComponent: BoardComponent = new BoardComponent();
  diceComponent: DiceComponent = new DiceComponent();

  constructor(
    private startGameService: StartService,
    private squareConverterService: SquareConverterService
  ) {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.startGameService.createGame().subscribe(
      (data: any) => {
        console.log('Datos recibidos del backend:', data);
        if (data && data.board && data.circuit && data.homes && data.finalTracks) {
          this.boardComponent.board = this.squareConverterService.convertBoard(data.board);
          this.boardComponent.circuit = this.squareConverterService.convertSquareArray(data.circuit.squares);
          this.boardComponent.homes = data.homes.map((home: any) => this.squareConverterService.convertSquareArray(home.squares));
          this.boardComponent.finalTracks = data.finalTracks.map((finalTrack: any) => this.squareConverterService.convertSquareArray(finalTrack.squares));
        } else {
          console.error('La estructura de los datos no es la esperada', data);
        }
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
