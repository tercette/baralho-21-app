import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Card {
  value: string;
  image: string;
  displayValue?: number;
}

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent {
  @Input() cards: Card[] = [];
  @Output() cardRemoved = new EventEmitter<number>();



  onDrop(event: CdkDragDrop<{ value: string, image: string }[]>) {
    console.log('Evento de drop:', event);
    if (event.previousContainer === event.container) {
      // Lógica para reordenar dentro do mesmo container
    } else {
      const cardIndex = this.cards.findIndex(card => card.value === event.item.data.value);
      if (cardIndex > -1) {
        console.log('Carta descartada:', this.cards[cardIndex]);
        this.cards.splice(cardIndex, 1);
        this.cardRemoved.emit(cardIndex);
      }
    }
  }
}



