import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {
  @Output() drawCardEvent = new EventEmitter<void>();
  @Output() restartGameEvent = new EventEmitter<void>();
  @Output() stopGameEvent = new EventEmitter<void>();

  drawCard() {
    this.drawCardEvent.emit();
  }

  restartGame() {
    this.restartGameEvent.emit();
  }

  stopGame() {
    this.stopGameEvent.emit();
  }
}
