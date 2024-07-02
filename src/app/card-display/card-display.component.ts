import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent {
  @Input() cards: { value: string, image: string }[] = [];
  @Output() cardRemoved = new EventEmitter<number>();



  Drop(event: CdkDragDrop<string[]>) {
    console.log('Carta descartada:', event);
    const cardIndex = event.previousIndex;
    const card = this.cards[cardIndex];
    this.cards.splice(cardIndex, 1);
    this.cardRemoved.emit(cardIndex);
  }


}
