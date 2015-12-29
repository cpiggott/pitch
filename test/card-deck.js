import * as cardDeck from '../server/services/card-deck';
import assert from 'assert';

describe("Card deck", function() {
  describe("#createDeck", function() {
    let deck = cardDeck.createDeck();
    it("should have a deck with a length of 54", function() {
       assert.equal(deck.length, 54);
    });
  });

  describe("#isSameSuit", function() {
    describe("Has same suit", function() {
      let isSameSuit = cardDeck.isSameSuit({ suit: "CLUB" }, { suit: "CLUB" });
      it("should have same suit", function() {
        return assert(isSameSuit);
      });
    });
    describe("Has different suit", function() {
      let isSameSuit = cardDeck.isSameSuit({ suit: "CLUB" }, { suit: "SPADE" });
      it("should not have same suit", function() {
        return assert(!isSameSuit);
      });
    });
    describe("Has different suit (joker)", function() {
      let isSameSuit = cardDeck.isSameSuit({ suit: "CLUB" }, { suit: "JOKER" });
      it("should not have same suit", function() {
        return assert(!isSameSuit);
      });
    });
  });

  describe("#isOffSuit", function(suit, card) {
    describe("Is an offsuit", function() {
      let isOffSuit = cardDeck.isOffSuit({ suit: "CLUB" }, { suit: "SPADE" });
      it("should be an offsuit", function() {
        assert(isOffSuit);
      });
    });
    describe("Is not an offsuit", function() {
      let isOffSuit = cardDeck.isOffSuit({ suit: "CLUB" }, { suit: "HEART" });
      it("should not be an offsuit", function() {
        assert(!isOffSuit);
      });
    });
    describe("Is not an offsuit (joker)", function() {
      let isOffSuit = cardDeck.isOffSuit({ suit: "CLUB" }, { suit: "JOKER" });
      it("should not be an offsuit", function() {
        assert(!isOffSuit);
      });
    });
  });

});
