import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck-service.service';

interface Card {
  value: string;
  image: string;
  displayValue?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  score: number = 0;
  userCards: Card[] = [];
  usedTrash: boolean = false;
  showBottomButton: boolean = true;
  aceValue: number = 1;

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    let aceInput: string | null = null;
    let aceValue: number = 1;
    let validInput: boolean = false;

    while (!validInput) {
      aceInput = prompt('Escolha o valor do Ás (1 a 10):');
      if (aceInput !== null) {
        aceValue = parseInt(aceInput, 10);
        if (aceValue >= 1 && aceValue <= 10) {
          validInput = true;
        } else {
          alert('Valor inválido! Insira um número entre 1 e 11.');
        }
      } else {
        alert('Valor inválido! O Ás será considerado como 1.');
        aceValue = 1;
        validInput = true;
      }
    }

    this.aceValue = aceValue;

    this.deckService.createDeck().subscribe(data => {
      this.deckService.setDeckId(data.deck_id);
      this.score = 0;
      this.userCards = [];
      this.usedTrash = false;
      this.showBottomButton = true;
    });

  }

  onDrawCard() {
    const deckId = this.deckService.getDeckId();
    this.deckService.drawCard(deckId).subscribe(data => {
      const newCard = data.cards[0];
      const displayValue = newCard.value === 'ACE' ? this.aceValue : this.getCardValue(newCard.value);
      this.userCards.push({ value: newCard.value, image: newCard.image, displayValue});
      this.score += this.getCardValue(newCard.value);
      this.checkGameStatus();
    });
  }

  onRestartGame() {
    this.startNewGame();
  }

  onStopGame() {
    const dealerScore = Math.floor(Math.random() * 6) + 16;
    if (dealerScore > this.score) {
      alert('Você perdeu!');
    } else {
      alert('Você ganhou!');
    }
    this.startNewGame();
    this.showBottomButton = true;
  }

  onCardRemoved(cardIndex: number) {
    console.log('Carta removida:', cardIndex);
    if (this.usedTrash) {
      return;
    }
    const card = this.userCards[cardIndex];
    this.userCards.splice(cardIndex, 1);
    this.score -= this.getCardValue(card.value);
    this.usedTrash = true;
  }

  getCardValue(card: string): number {
    if (card === 'JACK') {
      return 11;
    }
    if (card === 'QUEEN') {
      return 12;
    }
    if (card === 'KING') {
      return 13;
    }
    if (card === 'ACE') {
      return this.aceValue;
    }
    return parseInt(card, 10);
  }

  checkGameStatus() {
    if (this.score > 21) {
      alert('Você perdeu!');
    } else if (this.score === 21) {
      alert('Você ganhou!');
    }
  }
}
