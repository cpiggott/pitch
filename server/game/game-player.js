import uniqId from 'uniq-id';

export function createPlayer() {
  return {
    id: uniqId(),
    hand: []
  };
}

export function nextPlayer(dealerPosition = 0, turn = 0) {
  return ((dealerPosition + 1 + turn) % 4);
}