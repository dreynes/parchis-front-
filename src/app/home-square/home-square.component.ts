import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-home-square',
  templateUrl: './home-square.component.html',
  styleUrls: ['./home-square.component.css']
})
export class HomeSquareComponent {
  @Input() cellColor?: string;
  @Input() cellValue?: number;
  @Output() cellClick = new EventEmitter<void>();

  constructor() {
  }




}
