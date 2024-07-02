import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {
  @Input() cards: { value: string, image: string }[] = [];
  @Output() cardRemoved = new EventEmitter<number>();



  onDrop(event: CdkDragDrop<{ value: string, image: string }[]>) {
    const cardIndex = event.previousIndex;
    const card = this.cards[cardIndex];
    console.log('Carta descartada:', card);
    this.cards.splice(cardIndex, 1);
    this.cardRemoved.emit(cardIndex);
  }


}
