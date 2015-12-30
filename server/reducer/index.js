import games from './games'
import players from './players'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  games,
  players
});

export default rootReducer