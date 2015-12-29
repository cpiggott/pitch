function renderClient(req, res) {
  res.render('app', {
    layout: false
  });
}

function renderHome(req, res) {
  res.render('index', { title: "Pitch" })
}

module.exports = function(app) {
  app.get("/", renderHome);
  app.use("/app/*", renderClient);
  app.use("/app", renderClient);
}