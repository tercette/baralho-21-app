import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface Card {
  value: string;
  image: string;
}

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent {
  @Input() cards: Card[] = [];
  @Output() cardRemoved = new EventEmitter<number>();

  onTrashDrop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer !== event.container) {
      const cardIndex = event.previousIndex;
      this.cards.splice(cardIndex, 1);
      this.cardRemoved.emit(cardIndex);
    }
  }
}
