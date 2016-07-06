'use strict';
/**
 * Node Entry Point
 *
 * @author Ben Rabidou
 * @date_created 4/21/2016
 */

var express       = require('express');
var morgan        = require('morgan');
var routes        = require('./src/routes');
var server        = express();



server.set('port', process.env.PORT || 5000);
server.set('view engine', 'jade');
server.use(morgan('tiny')); //:method :url :status :res[content-length] - :response-time ms
server.use(routes);


server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});
