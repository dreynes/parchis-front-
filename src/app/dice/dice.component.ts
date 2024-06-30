import { Component, Input, Output, EventEmitter, ChangeDetectorRef, NgZone } from '@angular/core';
import { PlayService } from "../shared-services/play.service";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() currentValue: number = 1;
  @Output() diceRolled = new EventEmitter<number>();

  constructor(private playService: PlayService, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  rollDice() {
    this.playService.rollDice().subscribe(value => {
      this.ngZone.run(() => {
        this.currentValue = value;
        this.cdr.detectChanges();
        console.log("el dado vale: " + value);
        this.diceRolled.emit(value);
      });
    });
  }
}
