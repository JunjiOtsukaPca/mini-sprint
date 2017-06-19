var http = require('http');

var messages = require('./request-handler');
var utils = require('./util')
var url = require('url');

var port = 8080;

var ip = '127.0.0.1';

var router = {
  '/': messages.requestHandler,
  // GET - /api/posts (Retrieve all posts)
  // POST - /api/posts (Create a new post)
  '/api/posts': messages.requestHandler,
  // GET - /api/posts/:id (Retrieve a single post by its id)
  // PUT - /api/posts/:id (Update a single post by its id)
  // DELETE - /api/posts/:id (Delete a single post by its id)
  '/api/posts/:id': messages.requestHandler,
}


var server = http.createServer(function(req, res) {
  var route = router[url.parse(req.url).pathname];
  if (route) {
    route(req, res);
  } else {
    utils.sendResponse(res, '', 404);
  }
})

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);