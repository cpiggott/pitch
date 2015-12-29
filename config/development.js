var port = process.env.PORT || 3011;
var hostname = "localhost";

module.exports = {
  development: "development",
  port: port,
  hostname: hostname,
  url: "http://" + hostname + ":" + port + "",
  session: {
    host: "localhost",
    port: 6379,
    secret: "wootbang!",
    secure: false
  }
};