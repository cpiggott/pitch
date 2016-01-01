import _ from 'lodash';
import { createGame } from '../game/game';
import * as dealer from '../game/dealer';
import uniqId from 'uniq-id';

export default function gameReducer(games = {}, action) {
  console.log("GAME REDUCER");
  if (action.type === "NEW_GAME") {
    let game = createGame();
    let gameWrapper = {}
    gameWrapper[game.id] = game;
    games = _.assign({}, games, gameWrapper);
    games.currentGame = game.id;
  }
  
  let { gameId } = action;
  
  if (!gameId) return games;
  if (!games[gameId]) throw new Error("No game!");
  
  let game = _.assign({}, games[gameId]);
  
  if (action.type === "JOIN_GAME") {
    if (!action.playerId) return games;
    game.players.push(action.playerId);
    games[gameId] = game;
  }
  else if (action.type === "CHANGE_DEALER") {
    game = dealer.changeDealer(game);
  }
  else if (action.type === "DEAL_ROUND") {
    game = dealer.deal(game);
  }
  else if (action.type === "BEGIN_BETTING") {
    game.isBetting = true;
  }
  else if (action.type === "END_BETTING") {
    game.isBetting = false;
  }
  else if (action.type === "PLAYER_BET_OPEN") {
    _.each(game.players, function(player) {
      player.isBetting = false;
      if (player.id === action.playerId) player.isBetting = true
    });
  }
  else if (action.type === "PLAYER_BET_CLOSED") {
    _.each(game.players, function(player) {
      player.isBetting = false;
    });
  }
  else if (action.type === "PLAYER_BET") {
    player = _.find(game.players, (player) =>
      player.id === action.playerId
    );
    player.bet = action.bet;
  }
  games[gameId] = game;
  return games;
}