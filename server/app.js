import config from 'getconfig';
import debugTool from 'debug';
import express from 'express';
import logger from './services/logger';

const debug = debugTool('pitch:server');

process.on('uncaughtException', function(err) {
  console.log("Uncaught Exception!");
  logger.error(err, function() {
    process.exit(0);
  });
});

module.exports = function startServer(cb) {
  let app = require('./services/app-config')(express());
  
  app.set('port', config.port);
  
  let server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
    cb();
  });
}