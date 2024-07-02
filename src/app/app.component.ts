import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck-service.service';

interface Card {
  value: string;
  image: string;
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
      this.showBottomButton = true;
    });
  }

  onDrawCard() {
    const deckId = this.deckService.getDeckId();
    this.deckService.drawCard(deckId).subscribe(data => {
      const newCard = data.cards[0];
      this.userCards.push({ value: newCard.value, image: newCard.image });
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
    this.startNewGame(); // Reiniciar o jogo após parar
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
      this.startNewGame(); // Reiniciar o jogo após perder
    } else if (this.score === 21) {
      alert('Você ganhou!');
      this.startNewGame(); // Reiniciar o jogo após ganhar
    }
  }
}
