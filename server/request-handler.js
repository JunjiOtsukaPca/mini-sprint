var utils = require('./util');
var express = require('express');
var app = express();

var objectIdCounter = 1;
var messages = [];

var actions = {
  'GET': function (request, response) {
    utils.sendResponse(response, {results: messages})
  },
  'POST': function (request, response) {
    utils.collectData(request, function (message) {
      message.objectId = objectIdCounter++;
      messages.push(message);
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  'DELETE': function() {

  }
}

exports.requestHandler = utils.makeActionHandler(actions);