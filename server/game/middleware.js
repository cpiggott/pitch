import _ from 'lodash';
import { nextPlayer } from './game-player';

export default store => next => action => {
  let previousState = store.getState();
  
  let returnedValue = next(action);
  
  let currentState = store.getState();
  
  if (action.type === "NEW_GAME") {
    let previousGames = _.keys(previousState.games);
    let currentGames = _.filter(_.keys(currentState.games), (key) => key !== "currentGame");
    
    let gameId = _.difference(currentGames, previousGames)[0];
    store.dispatch({ type: "CHANGE_DEALER", gameId });
    store.dispatch({ type: "DEAL_ROUND", gameId });
    store.dispatch({ type: "BEGIN_BETTING", gameId });
  }
  else if (action.type === "BEGIN_BETTING") {
    let { gameId } = action;
    let game = currentState.games[gameId];
    if (!game) throw new Error("No game!");
    
    let playerTurn = nextPlayer(game.currentDealer);
    let playerId = game.players[playerTurn].id;
    
    store.dispatch({ type: "PLAYER_BET_OPEN", gameId, playerId });
  }
  
  return returnedValue;
}