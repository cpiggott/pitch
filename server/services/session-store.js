import session from 'express-session';
import redis from 'connect-redis';
import config from 'getconfig';
    
let RedisStore = redis(session);
let store = new RedisStore({
  host: config.session.host || process.env.REDISHOST,
  port: config.session.port || process.env.REDISPORT,
  pass: config.session.pass || process.env.REDISPASS,
});

exports default store;
