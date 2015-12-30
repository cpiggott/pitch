import * as cardDeck from '../services/card-deck'
import _ from 'lodash'
import uniqId from 'uniq-id'

export default function reducer(state, action) {
  if (action.type === "NEW_GAME") {
    state = _.assign({}, state);
    state.games[uniqId()] = {
      deck: cardDeck.createDeck()
    }
  }
  return state;
}