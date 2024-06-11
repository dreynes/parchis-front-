import {Piece} from "../piece/piece.mode";

export class Square {
  value: number;
  color: string;
  pieces: Piece[];

  constructor(value: number, color: string) {
    this.value = value;
    this.color = color;
    this.pieces = [];
  }

  addPiece(piece: Piece) {
    this.pieces.push(piece);
  }

  removePiece(piece: Piece) {
    const index = this.pieces.indexOf(piece);
    if (index !== -1) {
      this.pieces.splice(index, 1);
    }
  }

  getPieces(): Piece[] {
    return this.pieces;
  }
}
