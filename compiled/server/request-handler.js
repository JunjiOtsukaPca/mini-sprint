'use strict';

var utils = require('./util');
var express = require('express');
var app = express();

var objectIdCounter = 1;
var messages = [];

var actions = {
  'GET': function GET(request, response) {
    utils.sendResponse(response, { results: messages });
  },
  'POST': function POST(request, response) {
    utils.collectData(request, function (message) {
      message.objectId = objectIdCounter++;
      messages.push(message);
      utils.sendResponse(response, { objectId: message.objectId }, 201);
    });
  },
  'DELETE': function DELETE() {}
};

exports.requestHandler = utils.makeActionHandler(actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9yZXF1ZXN0LWhhbmRsZXIuanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm9iamVjdElkQ291bnRlciIsIm1lc3NhZ2VzIiwiYWN0aW9ucyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInNlbmRSZXNwb25zZSIsInJlc3VsdHMiLCJjb2xsZWN0RGF0YSIsIm1lc3NhZ2UiLCJvYmplY3RJZCIsInB1c2giLCJleHBvcnRzIiwicmVxdWVzdEhhbmRsZXIiLCJtYWtlQWN0aW9uSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLFFBQVIsQ0FBWjtBQUNBLElBQUlDLFVBQVVELFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUUsTUFBTUQsU0FBVjs7QUFFQSxJQUFJRSxrQkFBa0IsQ0FBdEI7QUFDQSxJQUFJQyxXQUFXLEVBQWY7O0FBRUEsSUFBSUMsVUFBVTtBQUNaLFNBQU8sYUFBVUMsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDbENSLFVBQU1TLFlBQU4sQ0FBbUJELFFBQW5CLEVBQTZCLEVBQUNFLFNBQVNMLFFBQVYsRUFBN0I7QUFDRCxHQUhXO0FBSVosVUFBUSxjQUFVRSxPQUFWLEVBQW1CQyxRQUFuQixFQUE2QjtBQUNuQ1IsVUFBTVcsV0FBTixDQUFrQkosT0FBbEIsRUFBMkIsVUFBVUssT0FBVixFQUFtQjtBQUM1Q0EsY0FBUUMsUUFBUixHQUFtQlQsaUJBQW5CO0FBQ0FDLGVBQVNTLElBQVQsQ0FBY0YsT0FBZDtBQUNBWixZQUFNUyxZQUFOLENBQW1CRCxRQUFuQixFQUE2QixFQUFDSyxVQUFVRCxRQUFRQyxRQUFuQixFQUE3QixFQUEyRCxHQUEzRDtBQUNELEtBSkQ7QUFLRCxHQVZXO0FBV1osWUFBVSxrQkFBVyxDQUVwQjtBQWJXLENBQWQ7O0FBZ0JBRSxRQUFRQyxjQUFSLEdBQXlCaEIsTUFBTWlCLGlCQUFOLENBQXdCWCxPQUF4QixDQUF6QiIsImZpbGUiOiJyZXF1ZXN0LWhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbnZhciBhcHAgPSBleHByZXNzKCk7XHJcblxyXG52YXIgb2JqZWN0SWRDb3VudGVyID0gMTtcclxudmFyIG1lc3NhZ2VzID0gW107XHJcblxyXG52YXIgYWN0aW9ucyA9IHtcclxuICAnR0VUJzogZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICB1dGlscy5zZW5kUmVzcG9uc2UocmVzcG9uc2UsIHtyZXN1bHRzOiBtZXNzYWdlc30pXHJcbiAgfSxcclxuICAnUE9TVCc6IGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgdXRpbHMuY29sbGVjdERhdGEocmVxdWVzdCwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgbWVzc2FnZS5vYmplY3RJZCA9IG9iamVjdElkQ291bnRlcisrO1xyXG4gICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICB1dGlscy5zZW5kUmVzcG9uc2UocmVzcG9uc2UsIHtvYmplY3RJZDogbWVzc2FnZS5vYmplY3RJZH0sIDIwMSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gICdERUxFVEUnOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnRzLnJlcXVlc3RIYW5kbGVyID0gdXRpbHMubWFrZUFjdGlvbkhhbmRsZXIoYWN0aW9ucyk7Il19