import {Piece} from "../piece/piece.mode";

export class Square {
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

}