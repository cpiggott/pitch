import _ from 'lodash';
import uniqId from 'uniq-id';
import * as cardDeck from '../services/card-deck';

export default function gameReducer(games = {}, action) {
  if (action.type === "NEW_GAME") {
    games = _.assign({}, games);
    games[uniqId()] = {
      deck: cardDeck.createDeck()
    }
  }
  return games;
}