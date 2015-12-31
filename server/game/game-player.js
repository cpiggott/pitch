import uniqId from 'uniq-id';

export function createPlayer() {
  return {
    id: uniqId(),
    hand: []
  };
}

export function nextPlayer(startingPosition, totalPositions) {
  let callCount = 0;
  
  return function next() {
    callCount = callCount + 1;
    if (callCount >= totalPositions) callCount = 0;
    return startingPosition + callCount;
  }
  
}