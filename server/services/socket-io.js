import socketioServer from 'socket.io';

export default function startSocketio({ store, server }) {
  var io = socketioServer(server);

  store.subscribe(
    () => io.emit('state', store.getState())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));
  });
}