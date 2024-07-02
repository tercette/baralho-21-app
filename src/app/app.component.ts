import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NameInputDialogComponent } from './name-input-dialog/name-input-dialog.component';
import { AceValueDialogComponent } from './ace-value-dialog/ace-value-dialog.component';

interface Card {
  value: string;
  image: string;
  displayValue?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  score: number = 0;
  userCards: Card[] = [];
  usedTrash: boolean = false;
  showBottomButton: boolean = true;
  aceValue: number = 1;
  userName: string = '';

  constructor(
    private deckService: DeckService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.openNameInputDialog();
  }

  openNameInputDialog() {
    const dialogRef = this.dialog.open(NameInputDialogComponent, {
      width: '250px',
      disableClose: true,
      data: { userName: this.userName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userName = result;
        this.startNewGame();
      }
    });
  }

  startNewGame() {
    this.openAceValueDialog();
    this.deckService.createDeck().subscribe((data) => {
      this.deckService.setDeckId(data.deck_id);
      this.score = 0;
      this.userCards = [];
      this.usedTrash = false;
      this.showBottomButton = true;
    });
  }

  openAceValueDialog(): void {
    const dialogRef = this.dialog.open(AceValueDialogComponent, {
      width: '250px',
      data: { aceValue: this.aceValue },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.aceValue = result;
      }
    });
  }

  onDrawCard() {
    const deckId = this.deckService.getDeckId();
    this.deckService.drawCard(deckId).subscribe((data) => {
      const newCard = data.cards[0];
      const displayValue =
        newCard.value === 'ACE'
          ? this.aceValue
          : this.getCardValue(newCard.value);
      this.userCards.push({
        value: newCard.value,
        image: newCard.image,
        displayValue,
      });
      this.score += this.getCardValue(newCard.value);
      this.checkGameStatus();
    });
  }

  onRestartGame() {
    this.startNewGame();
  }

  onStopGame() {
    this.startNewGame();
    this.showBottomButton = true;
  }

  onCardRemoved(cardIndex: number) {
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
      let snackBarRef = this.snackBar.open(`Você perdeu, ${this.userName}!`, 'Fechar', {
        duration: 5000,
      });

      snackBarRef.afterDismissed().subscribe(() => {
        this.startNewGame();
      });
    } else if (this.score === 21) {
      let snackBarRef = this.snackBar.open(`Você ganhou, ${this.userName}!`, 'Fechar', {
        duration: 5000,
      });

      snackBarRef.afterDismissed().subscribe(() => {
        this.startNewGame();
      });
    }
  }
}
