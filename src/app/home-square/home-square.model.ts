import {Piece} from "../piece/piece.model";

export class HomeSquare {
  value: number;
  color: string;
  pieces: Piece[] = [];
  constructor(value: number, color: string) {
    this.value = value;
    this.color = color;
  }

  getPieces(){
    return this.pieces;
  }

  addPiece(piece: Piece) {
    this.pieces.push(piece);
  }

}
