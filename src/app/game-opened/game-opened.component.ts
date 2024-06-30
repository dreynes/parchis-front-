import { Component, OnInit } from '@angular/core';
import { SquareConverterService } from '../shared-services/square-converter-service';
import { delay, of, switchMap } from 'rxjs';
import { PlayService } from '../shared-services/play.service';
import { Piece } from '../piece/piece.model';
import {SaveService} from "../shared-services/save.service";

@Component({
  selector: 'app-game-opened',
  templateUrl: './game-opened.component.html',
  styleUrls: ['./game-opened.component.css']
})
export class GameOpenedComponent implements OnInit {
  turn: string = "";
  info: string = 'Tira el dado';
  diceRolled: boolean = false;
  canMove: boolean = false;
  board: any;
  circuit: any;
  homes: any;
  finalTracks: any;
  lastDiceValue: number = 0;
  specialMovePending: boolean = false;

  constructor(
    private squareConverterService: SquareConverterService,
    private playService: PlayService,
    private saveService: SaveService
  ) { }

  ngOnInit(): void {
    this.updateBoard();
    this.getTurn();
  }

  getTurn(){
    this.playService.getTurn().subscribe(turn => {
      this.turn = turn;
      this.info = 'Tira el dado';
      this.diceRolled = false;
      this.canMove = false;
    });
  }

  exitGame() {
    this.playService.exit();
  }

  onPieceClicked(event: { piece: Piece }) {
    if (this.diceRolled && this.canMove) {
      this.handlePieceMove(event.piece);
    }
    console.log('Clic en el tablero en la casilla color: ' + event.piece.color);
  }

  onDiceRolled(diceValue: number): void {
    this.lastDiceValue = diceValue;
    this.diceRolled = true;
    this.canMoveAnyPiece(diceValue);
  }

  canMoveAnyPiece(diceValue: number): void {
    this.playService.mustExitPiece().subscribe(mustExit => {
      if (mustExit) {
        this.handleExitPiece(diceValue);
      } else {
        this.checkIfCanMove(diceValue);
      }
    });
  }

  checkSpecialConditionsOrEndTurn(): void {
    this.playService.isCapturePiece().subscribe(isCapture => {
      if (isCapture) {
        this.handleCapturePiece();
      } else {
        this.checkArriveGoalOrEndTurn();
      }
    });
  }

  updateBoard(): void {
    this.playService.updateBoard().subscribe(
      (data: any) => {
        if (data && data.board && data.circuit && data.homes && data.finalTracks) {
          this.board = this.squareConverterService.convertBoard(data.board);
          this.circuit = this.squareConverterService.convertSquareArray(data.circuit);
          this.homes = data.homes.map((home: any) => this.squareConverterService.convertSquareArray(home));
          this.finalTracks = data.finalTracks.map((finalTrack: any) => this.squareConverterService.convertSquareArray(finalTrack));
          console.log('Datos del juego configurados en el estado.');
        } else {
          console.error('La estructura de los datos no es la esperada', data);
        }
      },
      (error: any) => {
        console.error('Error al actualizar el tablero:', error);
      }
    );
  }

  private handlePieceMove(piece: Piece): void {
    this.playService.move(piece).subscribe(
      moved => {
        if (moved) {
          this.updateBoard();
          this.checkSpecialConditionsOrEndTurn();
        } else {
          this.info = 'Ficha no válida, selecciona otra.';
        }
      }
    );
  }

  private handleExitPiece(diceValue: number): void {
    this.playService.exitPiece().subscribe(
      () => {
        this.updateBoard();
        this.info = 'Pieza movida.';
        if (diceValue === 6) {
          this.info += ' Has sacado un 6, vuelve a tirar.';
          this.diceRolled = false;
          this.canMove = false;
        } else {
          this.info += ' Esperando turno...';
          this.changeTurn();
        }
      }
    );
  }

  private checkIfCanMove(diceValue: number): void {
    of(null).pipe(
      switchMap(() => this.playService.canMove())
    ).subscribe(canMove => {
      if (!canMove) {
        this.handleCannotMove(diceValue);
      } else {
        this.prepareForMove(diceValue);
      }
    });
  }

  private handleCapturePiece(): void {
    this.info = 'Has capturado una pieza. Selecciona una ficha para mover 20 posiciones.';
    this.specialMovePending = true;
    this.canMove = true;
  }

  private checkArriveGoalOrEndTurn(): void {
    this.playService.isArriveGoal().subscribe(isGoal => {
      if (isGoal) {
        this.handleArriveGoal();
      } else {
        this.finalizeMoveOrTurn();
      }
    });
  }

  private handleArriveGoal(): void {
    this.info = 'Has llegado a la meta. Selecciona una ficha para mover 10 posiciones.';
    this.specialMovePending = true;
    this.canMove = true;
  }

  private handleCannotMove(diceValue: number): void {
    this.info = 'No se puede mover ninguna pieza, esperando turno...';
    if (diceValue === 6) {
      this.info += ' Has sacado un 6, vuelve a tirar.';
      this.diceRolled = false;
    } else {
      this.changeTurn();
    }
  }

  private prepareForMove(diceValue: number): void {
    this.canMove = true;
    this.info = 'Selecciona ficha';
    if (diceValue === 6) {
      this.info += ' Has sacado un 6, puedes volver a tirar después de mover.';
    }
  }

  private finalizeMoveOrTurn(): void {
    if (this.specialMovePending || this.lastDiceValue === 6) {
      if (this.lastDiceValue === 6) {
        this.info = 'Has sacado un 6, vuelve a tirar.';
        this.diceRolled = false;
      } else {
        this.specialMovePending = false;
        this.info = 'Movimiento especial completado. Cambiando turno...';
        this.changeTurn();
      }
    } else {
      this.info = 'Esperando turno...';
      this.changeTurn();
    }
  }

  private changeTurn(): void {
    of(null).pipe(
      delay(2000),
      switchMap(() => this.playService.changeTurn())
    ).subscribe(() => {
      this.getTurn();
    });
  }

  onSaveGame() {
    this.saveService.canSave().subscribe(canSave => {
      if (!canSave) {
        alert('Debes terminar el turno antes de guardar la partida.');
      } else {
        const saveName = prompt('Escribe un nombre para guardar la partida:');
        if (saveName) {
          this.saveService.saveGame(saveName).subscribe(
            () => {
              alert(`Partida guardada como '${saveName}' correctamente.`);
            },
            error => {
              console.error('Error al guardar la partida:', error);
              alert('Error al guardar la partida. Inténtalo de nuevo.');
            }
          );
        }
      }
    });
  }
}
