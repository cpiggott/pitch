import * as cardDeck from '../server/services/card-deck';
import assert from 'assert';

describe("Card deck", function() {
  describe("#createDeck", function() {
    let deck = cardDeck.createDeck();
    it("should have a deck with a length of 54", function() {
      return assert.equal(deck.length, 54);
    });
  });
})