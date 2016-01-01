import { nextPlayer } from '../server/game/game-player';
import assert from 'assert';

describe("Card deck", function() {
  describe("#nextPlayer", function() {
    describe("turn 0", function() {
      let result = nextPlayer(0, 0);
      it("should be player 1 (2)", function() {
        assert(result === 1);
      });
    });
    describe("turn 1", function() {
      let result = nextPlayer(0, 1);
      it("should be player 1 (2)", function() {
        assert(result === 2);
      });
    });
    describe("turn 2", function() {
      let result = nextPlayer(0, 2);
      it("should be player 3", function() {
        assert(result === 3);
      });
    });
    describe("turn 3", function() {
      let result = nextPlayer(0, 3);
      it("should be player 0", function() {
        assert(result === 0);
      });
    });
    describe("turn 4", function() {
      let result = nextPlayer(0, 4);
      it("should be player 1", function() {
        assert(result === 1);
      });
    });
    describe("turn 5", function() {
      let result = nextPlayer(0, 5);
      it("should be player 2", function() {
        assert(result === 2);
      });
    });
    describe("return 6", function() {
      let result = nextPlayer(0, 6);
      it("should be player 3", function() {
        assert(result === 3);
      });
    });
  });
});