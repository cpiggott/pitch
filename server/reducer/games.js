import _ from 'lodash';
import { createGame } from '../game/game';
import * as dealer from '../game/dealer';
import uniqId from 'uniq-id';

export default function gameReducer(games = {}, action) {
  if (action.type === "NEW_GAME") {
    games = _.assign({}, games, createGame());
  }
  else if (action.type === "JOIN_GAME" && games[action.gameId]) {
    if (!action.playerId) return games;
    games = _.assign({}, games);
    games[uniqId].players.push(action.playerId);
  }
  else if (action.type === "CHANGE_DEALER" && games[action.gameId]) {
    let game = _.assign({}, games[action.gameId]);
    games[action.gameId] = dealer.changeDealer(game);
  }
  else if (action.type === "DEAL_ROUND" && games[action.gameId]) {
    let game = _.assign({}, games[action.gameId]);
    games[action.gameId] = dealer.deal(game);
  }
  return games;
}