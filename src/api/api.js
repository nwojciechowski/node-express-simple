'use strict';
/**
 * Node Entry Point
 *
 * @author Ben Rabidou
 * @date_created 4/21/2016
 */

var express       = require('express');
var bodyParser    = require('body-parser');
var cors          = require('cors');
var api           = express();

api.use(bodyParser.json());
api.use(cors());

//Force return of json
api.use(function(req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

api.get('/', function (req, res) {  
  var response = {
    hello : 'world'
  };
  
  res.json(response);  
});

api.post('/', function (req, res) {  
  console.log(req.body);  
  res.json(req.body);  
});


module.exports = api;