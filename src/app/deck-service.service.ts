import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private deckId: string = '';

  constructor(private http: HttpClient) {}

  createDeck(): Observable<any> {
    return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  }

  drawCard(deckId: string): Observable<any> {
    return this.http.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  }

  setDeckId(deckId: string) {
    this.deckId = deckId;
  }

  getDeckId(): string {
    return this.deckId;
  }
}
