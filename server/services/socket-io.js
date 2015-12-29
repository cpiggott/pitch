import socketioServer from 'socket.io';
import config from 'getconfig';

export default function startSocketio({ store, server }) {
  const io = socketioServer(server);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
  });
}