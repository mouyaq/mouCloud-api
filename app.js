const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const corsConfig = require('./configs/cors.config');

const cluster = require('./routes/cluster.routes');
const datacenter = require('./routes/datacenter.routes');
const datastore = require('./routes/datastore.routes');
const folder = require('./routes/folder.routes');
const host = require('./routes/host.routes');
const network = require('./routes/network.routes');
const resourcePool = require('./routes/resource-pool.routes'); 
const session = require('./routes/session.routes');
const vm = require('./routes/vm.routes');

var app = express();

//app.use(cors(corsConfig))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/cluster', cluster);
app.use('/api/datacenter', datacenter);
app.use('/api/datastore', datastore);
app.use('/api/folder', folder);
app.use('/api/host', host);
app.use('/api/network', network);
app.use('/api/resource-pool', resourcePool);
app.use('/api/session', session);
app.use('/api/vm', vm);

module.exports = app;
