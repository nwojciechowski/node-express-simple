'use strict';
/**
 * Node Entry Point
 *
 * @author Ben Rabidou
 * @date_created 4/21/2016
 */

var express         = require('express');
var api             = require('./api/api.js');
var jade            = require('jade');
var routes          = express();

routes.set('views', './src/views');
routes.use('/assets'      , express.static(__dirname + '/assets'));
routes.use('/api'   , api);

routes.get('/', function (req, res) {
  res.render('index', {});
});

module.exports = routes;
