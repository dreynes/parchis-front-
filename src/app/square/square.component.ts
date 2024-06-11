import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {Square} from "./square.model";
import {PieceComponent} from "../piece/piece.component";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() cellColor?: string;
  @Input() cellValue?: number;
  @Output() cellClick = new EventEmitter<void>();

  constructor() {
  }

  handleClick() {
    this.cellClick.emit();
    console.log("clic square :" + this.cellColor + "   valor de la casilla:  " );

  }


}
