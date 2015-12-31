import uniqId from 'uniq-id';
import { createDeck, shuffleDeck } from './card-deck'
import { createPlayer } from './game-player';

export function createGame() {
  let gameId = uniqId();
  
  return {
    id: gameId,
    deck: shuffleDeck(createDeck()),
    players: [1, 2, 3, 4].map(() => createPlayer()),
    rounds: []
  };
}