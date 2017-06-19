var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTION',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'content-type': 'application/json'
};

exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
}

exports.collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk){
    data += chuck;
  });
  request.on('end', function(){
    callback(JSON.parse(data));
  });
}

// exports.redirectTo = function(request, response) {
//   console.log(response.redirect)
//   return response.redirect('/api/posts');
// }

exports.makeActionHandler = function(actionMap) {
  return function (request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  };
};