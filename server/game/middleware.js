import _ from 'lodash';

export default store => next => action => {
  let previousState = store.getState();
  
  let returnedValue = next(action);
  
  let currentState = store.getState();
  
  if (action.type === "NEW_GAME") {
    let previousGames = _.keys(previousState.games);
    let currentGames = _.filter(_.keys(currentState.games), (key) => key !== "currentGame");
    
    let gameId = _.difference(currentGames, previousGames)[0];
    store.dispatch({ type: "CHANGE_DEALER", gameId });
  }
  
  return returnedValue;
}