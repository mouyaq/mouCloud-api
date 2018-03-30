var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//const cors = require('cors');
//const corsConfig = require('./configs/cors.config');

var session = require('./routes/session.routes');
var host = require('./routes/host.routes');
var vm = require('./routes/vm/vm.routes');
var vmPower = require('./routes/vm/vm.power.routes');

var app = express();

//app.use(cors(corsConfig))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/session', session);
app.use('/api/host', host);
app.use('/api/vm', vm);
app.use('/api/vm/power', vmPower);

module.exports = app;
