import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {Square} from "./square.model";
import {PieceComponent} from "../piece/piece.component";
import {Piece} from "../piece/piece.model";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() cellColor?: string;
  @Input() cellValue?: number;
  @Input() pieces!: Piece[];

  constructor() {
  }

}
