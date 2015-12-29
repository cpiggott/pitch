import _ from 'lodash';
import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import edoHandlebarsHelpers from 'edo-handlebars-helpers';
import session from 'express-session';
import sessionStore from './session-store';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import * as logger from './logger';
import config from 'getconfig';
import controllers from '../controllers';

//This module basically just offloads all the app configuration so it
//doesn't need to be included in the app root.

export default function appConfig (app) {
  let hbs = handlebars.create({
    extname: 'hbs',
    defaultLayout: 'layout.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    compilerOptions: {
      preventIndent: true
    },
    helpers: {
      ifEQ: edoHandlebarsHelpers.ifEQ
    },
  });
  
  app.locals.config = JSON.stringify(config.client);
  
  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  //TODO: add favicon
  //app.use(favicon(__dirname + '/public/favicon.ico'));

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(cookieParser(config.session.secret));
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(session({
    secret: config.session.secret,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    store: sessionStore,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, secure: config.session.secure }
  }));
  
  controllers(app);
  
  /// catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    return next(err);
  });

  /// error handlers

  // development error handler
  // will print stacktrace
  if (process.env.NODE_ENV === 'dev') {
    app.use(function(err, req, res, next) {
      console.log("ERROR", err, err.stack);
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    logger.error(err)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
  
  return app;
}
