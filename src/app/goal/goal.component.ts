import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Square } from '../square/square.model';
import {Piece} from "../piece/piece.mode";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  @Input() cellValue?: number;
  @Input() cellColor?: string;
  @Input() pieces?: Piece[];
  @Output() cellClick = new EventEmitter<unknown>();


  getPieceSize(): string {
    // @ts-ignore
    const pieceCount = this.pieces.length;
    if (pieceCount <= 4) {
      return '40%'; // up to 4 pieces
    } else if (pieceCount <= 9) {
      return '30%'; // up to 9 pieces
    } else {
      return '22%'; // more than 9 pieces
    }
  }
  getPieceStyle(index: number): any {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return {
      'grid-row': row + 1,
      'grid-column': col + 1
    };
  }
}
