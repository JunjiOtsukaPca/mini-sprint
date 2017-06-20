'use strict';

var http = require('http');

var messages = require('./request-handler');
var utils = require('./util');
var url = require('url');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Listening to port 8080!');
}

// var port = 8080;

// var ip = '127.0.0.1';

// var router = {
//   '/': messages.requestHandler,
//   // GET - /api/posts (Retrieve all posts)
//   // POST - /api/posts (Create a new post)
//   '/api/posts': messages.requestHandler,
//   // GET - /api/posts/:id (Retrieve a single post by its id)
//   // PUT - /api/posts/:id (Update a single post by its id)
//   // DELETE - /api/posts/:id (Delete a single post by its id)
//   '/api/posts/:id': messages.requestHandler,
// }


// var server = http.createServer(function(req, res) {
//   var route = router[url.parse(req.url).pathname];
//   if (route) {
//     route(req, res);
//   } else {
//     utils.sendResponse(res, '', 404);
//   }
// })

// console.log('Listening on http://' + ip + ':' + port);
// server.listen(port, ip);
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iYXNpYy1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJtZXNzYWdlcyIsInV0aWxzIiwidXJsIiwiZXhwcmVzcyIsImFwcCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU9DLFFBQVEsTUFBUixDQUFYOztBQUVBLElBQUlDLFdBQVdELFFBQVEsbUJBQVIsQ0FBZjtBQUNBLElBQUlFLFFBQVFGLFFBQVEsUUFBUixDQUFaO0FBQ0EsSUFBSUcsTUFBTUgsUUFBUSxLQUFSLENBQVY7O0FBRUEsSUFBSUksVUFBVUosUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJSyxNQUFNRCxTQUFWOztBQUVBQyxJQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUM5QkEsTUFBSUMsSUFBSixDQUFTLGNBQVQ7QUFDRCxDQUZEOztBQUlBSixJQUFJSyxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFXO0FBQzFCQyxVQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDRDs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBOUJBIiwiZmlsZSI6ImJhc2ljLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xyXG5cclxudmFyIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWhhbmRsZXInKTtcclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlsJylcclxudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xyXG5cclxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbnZhciBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICByZXMuc2VuZCgnSGVsbG8gV29ybGQhJylcclxufSlcclxuXHJcbmFwcC5saXN0ZW4oODA4MCwgZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coJ0xpc3RlbmluZyB0byBwb3J0IDgwODAhJylcclxufSlcclxuXHJcbi8vIHZhciBwb3J0ID0gODA4MDtcclxuXHJcbi8vIHZhciBpcCA9ICcxMjcuMC4wLjEnO1xyXG5cclxuLy8gdmFyIHJvdXRlciA9IHtcclxuLy8gICAnLyc6IG1lc3NhZ2VzLnJlcXVlc3RIYW5kbGVyLFxyXG4vLyAgIC8vIEdFVCAtIC9hcGkvcG9zdHMgKFJldHJpZXZlIGFsbCBwb3N0cylcclxuLy8gICAvLyBQT1NUIC0gL2FwaS9wb3N0cyAoQ3JlYXRlIGEgbmV3IHBvc3QpXHJcbi8vICAgJy9hcGkvcG9zdHMnOiBtZXNzYWdlcy5yZXF1ZXN0SGFuZGxlcixcclxuLy8gICAvLyBHRVQgLSAvYXBpL3Bvc3RzLzppZCAoUmV0cmlldmUgYSBzaW5nbGUgcG9zdCBieSBpdHMgaWQpXHJcbi8vICAgLy8gUFVUIC0gL2FwaS9wb3N0cy86aWQgKFVwZGF0ZSBhIHNpbmdsZSBwb3N0IGJ5IGl0cyBpZClcclxuLy8gICAvLyBERUxFVEUgLSAvYXBpL3Bvc3RzLzppZCAoRGVsZXRlIGEgc2luZ2xlIHBvc3QgYnkgaXRzIGlkKVxyXG4vLyAgICcvYXBpL3Bvc3RzLzppZCc6IG1lc3NhZ2VzLnJlcXVlc3RIYW5kbGVyLFxyXG4vLyB9XHJcblxyXG5cclxuLy8gdmFyIHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbi8vICAgdmFyIHJvdXRlID0gcm91dGVyW3VybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZV07XHJcbi8vICAgaWYgKHJvdXRlKSB7XHJcbi8vICAgICByb3V0ZShyZXEsIHJlcyk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIHV0aWxzLnNlbmRSZXNwb25zZShyZXMsICcnLCA0MDQpO1xyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gaHR0cDovLycgKyBpcCArICc6JyArIHBvcnQpO1xyXG4vLyBzZXJ2ZXIubGlzdGVuKHBvcnQsIGlwKTsiXX0=