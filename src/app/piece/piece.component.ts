import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  @Input() color: string = '';

  constructor() {
  }

  setColor(color: string){
    this.color = color
}
}
