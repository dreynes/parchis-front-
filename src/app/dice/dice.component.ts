import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() currentValue: number = 1;

  rollDice() {
    this.currentValue = Math.floor(Math.random() * 6) + 1;
  }

}
