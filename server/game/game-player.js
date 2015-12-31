import uniqId from 'uniq-id';

export function createPlayer() {
  return {
    playerId: uniqId(),
    hand: []
  };
}