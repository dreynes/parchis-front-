import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import {Piece} from "../piece/piece.model";

@Component({
  selector: 'app-square-safe',
  templateUrl: '../square/square.component.html',
  styleUrls: ['../square/square.component.css']
})
export class SquareSafeComponent extends SquareComponent {


  constructor() {
    super();
  }

}
