var session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    config = require('getconfig');

module.exports = new RedisStore({
  host: config.session.host || process.env.REDISHOST,
  port: config.session.port || process.env.REDISPORT,
  pass: config.session.pass || process.env.REDISPASS,
});
