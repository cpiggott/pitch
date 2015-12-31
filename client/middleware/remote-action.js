import _ from 'lodash';
import { getThisUser } from '../user';

export default (socket, user) => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', _.assign({}, action, { user: getThisUser() }));
  }
  return next(action);
}