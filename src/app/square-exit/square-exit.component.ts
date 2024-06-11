import {Component} from '@angular/core';
import {SquareSafeComponent} from "../square-safe/square-safe.component";

@Component({
  selector: 'app-square-exit',
  templateUrl: '../square/square.component.html',
  styleUrls: ['../square/square.component.css']
})
export class SquareExitComponent extends SquareSafeComponent {

  constructor() {
    super();
  }
  override handleClick() {
    console.log("casilla de salida");
  }
}
