import _ from 'lodash';
import uniqId from 'uniq-id';

export default function playerReducer(players = {}, action) {
  if (action.type === "NEW_PLAYER") {
    players = _.assign({}, players);
    playerId = uniqId();
    players[playerId] = {
      name: "Test test",
      id: playerId
    }
  }
  return players;
}