'use strict';
/**
 * Node Entry Point
 *
 * @author Ben Rabidou
 * @date_created 4/21/2016
 */

var express         = require('express');
var api             = require('./api/api.js');
var routes          = express();

routes.use('/'      , express.static(__dirname + '/html'));
routes.use('/api'   , api);

module.exports = routes;