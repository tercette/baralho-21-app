import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  score: number = 0;
  userCards: string[] = [];
  usedTrash: boolean = false;

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.deckService.createDeck().subscribe(data => {
      this.deckService.setDeckId(data.deck_id);
      this.score = 0;
      this.userCards = [];
      this.usedTrash = false;
    });
  }

  onDrawCard() {
    const deckId = this.deckService.getDeckId();
    this.deckService.drawCard(deckId).subscribe(data => {
      const newCard = data.cards[0];
      this.userCards.push(newCard.value);
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
  }

  getCardValue(card: string): number {
    if (['JACK', 'QUEEN', 'KING'].includes(card)) {
      return 10;
    }
    if (card === 'ACE') {
      return 1; // ou 11, dependendo da regra que você escolher
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
