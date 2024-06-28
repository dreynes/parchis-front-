import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayService } from "../shared-services/play.service";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() currentValue: number = 1;
  @Output() diceRolled = new EventEmitter<number>();

  constructor(private playService: PlayService) { }

  rollDice() {
    this.playService.rollDice().subscribe(value => {
      this.currentValue = value;
      this.diceRolled.emit(value);  // Emit the dice value
    });
  }
}
