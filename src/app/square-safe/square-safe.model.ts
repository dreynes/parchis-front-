import {Square} from "../square/square.model";

export class SquareSafe extends Square {
  constructor(value: number, color: string) {
    super(value, color);
  }
}
