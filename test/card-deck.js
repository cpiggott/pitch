import * as cardDeck from '../server/game/card-deck';
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
  
  describe("#isTrump", function() {
    describe("a four of trump", function() {
      let card = { suit: "HEART", value: "4", points: 4 };
      let trumpSuit = "HEART";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should be trump", function() {
        assert(isTrump);
      });
    });
    
    describe("a four of not trump", function() {
      let card = { suit: "HEART", value: "4", points: 4 };
      let trumpSuit = "DIAMOND";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should not be trump", function() {
        assert(!isTrump);
      });
    });
    
    describe("a jack off suit", function() {
      let card = { suit: "HEART", value: "JACK", points: 14 };
      let trumpSuit = "DIAMOND";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should be trump", function() {
        assert(isTrump);
      });
    });
    
    describe("a low joker", function() {
      let card = { suit: "JOKER", value: "LOW", points: 11 };
      let trumpSuit = "DIAMOND";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should be trump", function() {
        assert(isTrump);
      });
    });
    
    describe("a high joker", function() {
      let card = { suit: "JOKER", cardValue: "HIGHER", points: 12 };
      let trumpSuit = "DIAMOND";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should be trump", function() {
        assert(isTrump);
      });
    });
    
    describe("a non-trump jack", function() {
      let card = { suit: "SPADE", cardValue: "JACK", points: 14 };
      let trumpSuit = "DIAMOND";
      let isTrump = cardDeck.isTrump(trumpSuit, card);
      
      it("should be trump", function() {
        assert(!isTrump);
      });
    });
  });
  
  describe("#updatePointValue", function() {
    describe("off suit jack", function() {
      let card = { suit: "HEART", value: "JACK", points: 14 };
      let trumpSuit = "DIAMOND";
      let updatedCard = cardDeck.updatePointValue(trumpSuit, card);
      
      it("should update points", function() {
        assert(updatedCard.points === 13);
      });
    });
    describe("on suit jack", function() {
      let card = { suit: "DIAMOND", value: "JACK", points: 14 };
      let trumpSuit = "DIAMOND";
      let updatedCard = cardDeck.updatePointValue(trumpSuit, card);
      
      it("should not update points", function() {
        assert(updatedCard.points === 14);
      });
    });
    describe("ace trump", function() {
      let card = { suit: "DIAMOND", value: "JACK", points: 17 };
      let trumpSuit = "DIAMOND";
      let updatedCard = cardDeck.updatePointValue(trumpSuit, card);
      
      it("should not update points", function() {
        assert(updatedCard.points === 17);
      });
    });
  })
});
