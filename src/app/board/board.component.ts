import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Square } from '../square/square.model';
import {SquareSafe} from "../square-safe/square-safe.model";
import {SquareExit} from "../square-exit/square-exit.model";
import {Border} from "../border/border.model";
import {HomeSquare} from "../home-square/home-square.model";
import {Goal} from "../goal/goal.model";
import {Piece} from "../piece/piece.model";
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  @Input() board: Square[][] = [];
  @Input() circuit: Square[] = [];
  @Input() homes: Square[][] = [];
  @Input() finalTracks: Square[][] = [];
  @Output() boardClick = new EventEmitter<{cell: Square}>();

  @Output() pieceClick = new EventEmitter<{piece: Piece}>();
  readonly rows = 17;
  readonly cols = 17;


  constructor(){ }

  isSquareSafe(cell: Square): boolean {
    return cell instanceof SquareSafe;
  }


  isGoal(cell: Square): boolean{
     return cell instanceof Goal;
  }
  isSquareExit(cell: Square): boolean {
    return cell instanceof SquareExit;
  }

  isBorder(cell: Square): boolean {
    return cell instanceof Border;
  }

  isHome(cell: Square): boolean {
    return cell instanceof HomeSquare;
  }
  handlePieceClick(piece: Piece) {
    this.pieceClick.emit({piece});
  }
}
