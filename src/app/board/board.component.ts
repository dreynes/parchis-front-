import {Component, Input} from '@angular/core';
import { Square } from '../square/square.model';
import { SquareSafe } from '../square-safe/square-safe.model';
import { SquareExit } from '../square-exit/square-exit.model';
import { Border } from '../border/border.model';
import { Piece } from "../piece/piece.mode";
import {HomeSquare} from "../home-square/home-square.model";
import {HomeSquareComponent} from "../home-square/home-square.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() board: Square[][] = [];
  readonly rows = 17;
  readonly cols = 17;

  protected readonly squareSafeValues = [9, 76, 132, 137, 153, 214, 281];
  protected readonly squareExitGreen = [78];
  protected readonly squareExitRed = [124];
  protected readonly squareExitBlue = [212];
  protected readonly squareExitYellow = [166];
  protected readonly squareFinalTrackValuesYellow = [146, 147, 148, 149, 150, 151, 152];
  protected readonly squareFinalTrackValuesRed = [138, 139, 140, 141, 142, 143, 144];
  protected readonly squareFinalTrackValuesBlue = [162, 179, 196, 213, 230, 230, 247, 264];
  protected readonly squareFinalTrackValuesGreen = [26, 43, 60, 77, 94, 111, 128];
  protected readonly squareHomeValuesRed = [19, 20, 21, 22, 23, 36, 37, 38, 39, 40, 53, 54, 55, 56, 57, 70, 71, 72, 73, 74, 87, 88, 89, 90, 91];
  protected readonly squareHomeValuesGreen = [29, 30, 31, 32, 33, 46, 47, 48, 49, 50, 63,64, 65, 66, 67, 80, 81, 82, 83, 84, 97, 98, 99, 100, 101];
  protected readonly squareHomeValuesBlue = [189,190, 191, 192, 193, 206, 207, 208, 209, 210, 223,224,225, 226, 227, 240, 241, 242, 243, 244, 257, 258, 259, 260,261];
  protected readonly squareHomeValuesYellow = [199, 200, 201, 202, 203, 216, 217, 218, 219, 220, 233, 234, 235, 236, 237, 250, 251, 252, 253, 254, 267, 268, 269, 270, 271];
  protected readonly squareBlackBorder = [1, 2, 3, 4, 5, 6, 7, 18, 24, 35, 41, 52, 58, 69, 75, 86, 92, 103, 104, 105, 106, 107, 108, 109,
    11, 12, 13, 14, 15, 16, 17, 28, 34, 45, 51, 62, 68, 79, 85, 96, 102, 113, 114, 115, 116, 117, 118, 119,
    181, 182, 183, 184, 185, 186, 187, 198, 204, 215, 221, 232, 238, 249, 255, 266, 272, 283, 284, 285, 286, 287, 288, 289,
    171, 172, 173, 174, 175, 176, 177, 188, 194, 205, 211, 222, 228, 239, 245, 256, 262, 273, 274, 275, 275, 276, 277, 278, 279];

  constructor() {
    this.initializeBoard();
    this.initializePieces();
  }

  initializeBoard() {
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    this.assignSquares(this.squareSafeValues, SquareSafe, 'light-grey');
    this.assignSquares(this.squareExitRed, SquareExit, 'red');
    this.assignSquares(this.squareExitBlue, SquareExit, 'blue');
    this.assignSquares(this.squareExitGreen, SquareExit, 'green');
    this.assignSquares(this.squareExitYellow, SquareExit, 'yellow');
    this.assignSquares(this.squareFinalTrackValuesRed, SquareSafe, 'red');
    this.assignSquares(this.squareFinalTrackValuesBlue, SquareSafe, 'blue');
    this.assignSquares(this.squareFinalTrackValuesGreen, SquareSafe, 'green');
    this.assignSquares(this.squareFinalTrackValuesYellow, SquareSafe, 'yellow');
    this.assignSquares(this.squareHomeValuesRed, HomeSquare, 'red');
    this.assignSquares(this.squareHomeValuesGreen, HomeSquare, 'green');
    this.assignSquares(this.squareHomeValuesBlue, HomeSquare, 'blue');
    this.assignSquares(this.squareHomeValuesYellow, HomeSquare, 'yellow');
    // @ts-ignore
    this.assignSquares(this.squareBlackBorder, Border, 'black');
    this.fillRemainingSquares();
  }

  private assignSquares(values: number[], SquareType: typeof Square | Border | HomeSquare, color: string) {
    for (const value of values) {
      const position = this.getPositionFromValue(value);
      if (position) {
        const [i, j] = position;
        if (!this.board[i][j]) {
          // @ts-ignore
          this.board[i][j] = new SquareType(value, color);
        } else {
          console.warn(`Duplicate position for value ${value} at position (${i}, ${j})`);
        }
      }
    }
  }

  private fillRemainingSquares() {
    let count = 1;
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        if (!this.board[i][j]) {
          this.board[i][j] = new Square(count++, 'white');
        } else {
          count++;
        }
      }
    }
  }

  private getPositionFromValue(value: number): [number, number] | null {
    const index = value - 1;
    const col = Math.floor(index / this.rows);
    const row = index % this.rows;
    if (row < this.rows && col < this.cols) {
      return [row, col];
    }
    return null;
  }

  isSquareSafe(cell: Square): boolean {
    return cell instanceof SquareSafe;
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

  handleCellClick(rowIndex: number, colIndex: number) {
    console.log('Clic en la casilla:', rowIndex, colIndex, this.board[rowIndex][colIndex].value);
  }

  initializePieces() {
    this.board[2][2].pieces.push(new Piece(37,'red'));
    this.board[4][2].pieces.push(new Piece(71,'red'));
    this.board[4][4].pieces.push(new Piece(73,'red'));
    this.board[2][4].pieces.push(new Piece(39,'red'));
    this.board[2][12].pieces.push(new Piece(207,'blue'));
    this.board[2][14].pieces.push(new Piece(209,'blue'));
    this.board[4][12].pieces.push(new Piece(241,'blue'));
    this.board[4][14].pieces.push(new Piece(243,'blue'));
    this.board[12][12].pieces.push(new Piece(217,'yellow'));
    this.board[14][12].pieces.push(new Piece(219,'yellow'));
    this.board[14][14].pieces.push(new Piece(253,'yellow'));
    this.board[12][14].pieces.push(new Piece(251,'yellow'));
    this.board[12][2].pieces.push(new Piece(47,'green'));
    this.board[14][2].pieces.push(new Piece(49,'green'));
    this.board[14][4].pieces.push(new Piece(83,'green'));
    this.board[12][4].pieces.push(new Piece(81,'green'));

  }

}
