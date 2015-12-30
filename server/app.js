import config from 'getconfig';
import debugTool from 'debug';
import express from 'express';
import * as logger from './services/logger';
import makeStore from './services/store';
import startSocketio from './services/socket-io';
import appConfig from './services/app-config';
import http from 'http';

const debug = debugTool('pitch:server');

process.on('uncaughtException', function(err) {
  console.log("Uncaught Exception!");
  logger.error(err, function() {
    process.exit(0);
  });
});

module.exports = function startServer(cb) {
  let store = makeStore();
  let app = express();
  
  let httpServer = http.createServer();
  app = appConfig(app);
  
  app.set('port', config.port);
  
  httpServer.on('request', app);
  
  startSocketio({ 
    server: httpServer, 
    store, 
  });
  
  httpServer.listen(app.get('port'), function() {
    debug('Express server listening on port ' + app.get('port'));
    cb();
  });
}