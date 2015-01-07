var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var batches = require('./routes/batches');
var classes = require('./routes/classes');

var app = express();

var connection  = require('express-myconnection');
var mysql = require('mysql');

dbOptions = {
    host: '160.153.71.36',
    user: 'user1',
    password: 'Welcome123',
    port: 3306,
    database: 'qalearnjsonline'
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(connection(mysql,dbOptions,'request'));

app.use('/', routes);
app.use('/batches', batches);
app.use('/classes', classes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
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
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });


});


var debug = require('debug')('WebLearnJSOnline');


app.set('port', process.env.PORT || 4100);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

