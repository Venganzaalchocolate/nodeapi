const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const utils =require('./lib/utils')

const app = express();

// conectamos a la base de datos
require('./lib/connectMongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// rutas de mi API
app.use('/api/articulos',   require('./routes/api/articulos'));

// variables globales de las vistas
app.locals.title = 'NodeAPI';

// rutas de mi webside
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  if (utils.esAPI(req)) {
    res.status(err.status || 500),
    res.json({error:err.message})
    return
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
