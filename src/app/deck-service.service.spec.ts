import { TestBed } from '@angular/core/testing';

import { DeckServiceService } from './deck-service.service';

describe('DeckServiceService', () => {
  let service: DeckServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
