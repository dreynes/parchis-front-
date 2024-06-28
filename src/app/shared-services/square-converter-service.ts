import { Injectable } from '@angular/core';
import { Square } from '../square/square.model';
import { SquareSafe } from '../square-safe/square-safe.model';
import { SquareExit } from '../square-exit/square-exit.model';
import { Border } from '../border/border.model';
import { HomeSquare } from '../home-square/home-square.model';
import { Goal } from '../goal/goal.model';
import { Piece } from '../piece/piece.model';

@Injectable({
  providedIn: 'root'
})
export class SquareConverterService {

  convertToSquare(data: any): Square {
    let square: Square;

    switch (data.type) {
      case 'SquareSafe':
        square = new SquareSafe(data.value, data.color);
        break;
      case 'SquareExit':
        square = new SquareExit(data.value, data.color);
        break;
      case 'Border':
        // @ts-ignore
        square = new Border(data.value, data.color);
        break;
      case 'HomeSquare':
        // @ts-ignore
        square = new HomeSquare(data.value, data.color);
        break;
      case 'Goal':
        // @ts-ignore
        square = new Goal(data.value, data.color);
        break;
      default:
        square = new Square(data.value, data.color);
    }

    if (data.pieces && Array.isArray(data.pieces)) {
      data.pieces.forEach((pieceData: any) => {
        const piece = new Piece(pieceData.color, pieceData.position);
        square.addPiece(piece);
      });
    }

    return square;
  }

  convertBoard(data: any[][]): Square[][] {
    if (!Array.isArray(data)) {
      console.error('Data no es un arreglo:', data);
      return [];
    }
    return data.map(row => row.map(cell => this.convertToSquare(cell)));
  }

  convertSquareArray(data: any[]): Square[] {
    if (!Array.isArray(data)) {
      console.error('Data no es un arreglo:', data);
      return [];
    }
    return data.map(cell => this.convertToSquare(cell));
  }
}
