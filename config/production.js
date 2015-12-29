var url = require('url');

redisURL = url.parse(process.env.REDIS_URL);
redisAuth = redisURL.auth.split(":");

module.exports = {
  production: "production",
  port: process.env.PORT || 80,
  hostname: process.env.HOSTNAME,
  session: {
    host: redisURL.host,
    port: redisURL.port,
    user: redisAuth[0],
    pass: redisAuth[1],
    secret: "wootbang!",
    secure: true
  }
}