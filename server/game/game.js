import uniqId from 'uniq-id';
import { createDeck } from './card-deck'
import { createPlayer } from './game-player';

export function createGame() {
  let games = {}
  games[uniqId()] = {
    deck: createDeck(),
    players: [1, 2, 3, 4].map(() => createPlayer())
  };
  return games;
}