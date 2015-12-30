import _ from 'lodash';
import uniqId from 'uniq-id';

export default function playerReducer(players = {}, action) {
  if (action.type === "NEW_PLAYER") {
    players = _.assign({}, games);
    players[uniqId()] = {
      name: "Test test"
    }
  }
  return games;
}