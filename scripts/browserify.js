import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import fs from 'fs'
import createDebug from 'debug'

const debug = createDebug('pitch:browserify');

export function run(opts) {
  let browserifyOpts = {
    entries: [__dirname + '/../client/index.js'],
    cache: {},
    packageCache: {},
    plugin: [],
    debug: true
  };
  
  if (opts.watch) browserifyOpts.plugin.push(watchify);
  if (!opts.writeLocation) opts.writeLocation = 'server/public/javascripts/app.js';
  
  var b = browserify(browserifyOpts);

  b.transform(babelify, {presets: ["es2015", "react"]});

  b.on('log', log);
  b.on('update', bundle);
  b.on('error', log);

  bundle();

  function log(msg) {
    console.log("WTF", msg)
    debug(msg);
  }

  function bundle() {
    debug("bundle started");
    console.log("BUNDLE");
    let bundle = b.bundle()
    bundle.pipe(fs.createWriteStream(opts.writeLocation));
    bundle.on('error', log);
  }
}

export default run;