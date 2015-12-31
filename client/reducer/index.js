import _ from 'lodash';

export default function clientRootReducer(state = {}, action) {
  if (action.type == "SET_STATE") {
    return _.assign({}, action.state, _.pick(state, ["user"]));
  }
  return state;
}