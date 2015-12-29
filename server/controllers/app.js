function renderClient(req, res) {
  res.render('app', {
    layout: false
  });
}

function renderHome(req, res) {
  res.render('index', { title: "Pitch" })
}

export default function appController(app) {
  app.get("/", renderHome);
  app.use("/app/*", renderClient);
  app.use("/app", renderClient);
}