import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  @Input() color: string = '';
  @Output() pieceClick = new EventEmitter<void>();

  constructor() {
  }

  setColor(color: string){
    this.color = color
}
handleClick(){
    this.pieceClick.emit();
}
}
