const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const corsConfig = require('./configs/cors.config');

const session = require('./routes/session.routes');
const host = require('./routes/host.routes');
const vm = require('./routes/vm.routes');
const rp = require('./routes/resource-pool.routes'); 
const datastore = require('./routes/datastore.routes');

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
app.use('/api/resource-pool', rp);
app.use('/api/datastore', datastore);

module.exports = app;
