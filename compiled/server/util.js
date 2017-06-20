'use strict';

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTION',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'content-type': 'application/json'
};

exports.sendResponse = function (response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.collectData = function (request, callback) {
  var data = '';
  request.on('data', function (chunk) {
    data += chuck;
  });
  request.on('end', function () {
    callback(JSON.parse(data));
  });
};

// exports.redirectTo = function(request, response) {
//   console.log(response.redirect)
//   return response.redirect('/api/posts');
// }

exports.makeActionHandler = function (actionMap) {
  return function (request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci91dGlsLmpzIl0sIm5hbWVzIjpbImhlYWRlcnMiLCJleHBvcnRzIiwic2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzQ29kZSIsIndyaXRlSGVhZCIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0RGF0YSIsInJlcXVlc3QiLCJjYWxsYmFjayIsIm9uIiwiY2h1bmsiLCJjaHVjayIsInBhcnNlIiwibWFrZUFjdGlvbkhhbmRsZXIiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVTtBQUNaLGlDQUErQixHQURuQjtBQUVaLGtDQUFnQyxnQ0FGcEI7QUFHWixrQ0FBZ0Msc0JBSHBCO0FBSVosNEJBQTBCLEVBSmQ7QUFLWixrQkFBZ0I7QUFMSixDQUFkOztBQVFBQyxRQUFRQyxZQUFSLEdBQXVCLFVBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCQyxVQUF6QixFQUFxQztBQUMxREEsZUFBYUEsY0FBYyxHQUEzQjtBQUNBRixXQUFTRyxTQUFULENBQW1CRCxVQUFuQixFQUErQkwsT0FBL0I7QUFDQUcsV0FBU0ksR0FBVCxDQUFhQyxLQUFLQyxTQUFMLENBQWVMLElBQWYsQ0FBYjtBQUNELENBSkQ7O0FBTUFILFFBQVFTLFdBQVIsR0FBc0IsVUFBU0MsT0FBVCxFQUFrQkMsUUFBbEIsRUFBNEI7QUFDaEQsTUFBSVIsT0FBTyxFQUFYO0FBQ0FPLFVBQVFFLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFVBQVNDLEtBQVQsRUFBZTtBQUNoQ1YsWUFBUVcsS0FBUjtBQUNELEdBRkQ7QUFHQUosVUFBUUUsRUFBUixDQUFXLEtBQVgsRUFBa0IsWUFBVTtBQUMxQkQsYUFBU0osS0FBS1EsS0FBTCxDQUFXWixJQUFYLENBQVQ7QUFDRCxHQUZEO0FBR0QsQ0FSRDs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUgsUUFBUWdCLGlCQUFSLEdBQTRCLFVBQVNDLFNBQVQsRUFBb0I7QUFDOUMsU0FBTyxVQUFVUCxPQUFWLEVBQW1CUixRQUFuQixFQUE2QjtBQUNsQyxRQUFJZ0IsU0FBU0QsVUFBVVAsUUFBUVMsTUFBbEIsQ0FBYjtBQUNBLFFBQUlELE1BQUosRUFBWTtBQUNWQSxhQUFPUixPQUFQLEVBQWdCUixRQUFoQjtBQUNELEtBRkQsTUFFTztBQUNMRixjQUFRQyxZQUFSLENBQXFCQyxRQUFyQixFQUErQixFQUEvQixFQUFtQyxHQUFuQztBQUNEO0FBQ0YsR0FQRDtBQVFELENBVEQiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBoZWFkZXJzID0ge1xyXG4gICdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nOiAnKicsXHJcbiAgJ2FjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHMnOiAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OJyxcclxuICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVycyc6ICdjb250ZW50LXR5cGUsIGFjY2VwdCcsXHJcbiAgJ2FjY2Vzcy1jb250cm9sLW1heC1hZ2UnOiAxMCxcclxuICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbn07XHJcblxyXG5leHBvcnRzLnNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlLCBkYXRhLCBzdGF0dXNDb2RlKSB7XHJcbiAgc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgMjAwO1xyXG4gIHJlc3BvbnNlLndyaXRlSGVhZChzdGF0dXNDb2RlLCBoZWFkZXJzKTtcclxuICByZXNwb25zZS5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG5leHBvcnRzLmNvbGxlY3REYXRhID0gZnVuY3Rpb24ocmVxdWVzdCwgY2FsbGJhY2spIHtcclxuICB2YXIgZGF0YSA9ICcnO1xyXG4gIHJlcXVlc3Qub24oJ2RhdGEnLCBmdW5jdGlvbihjaHVuayl7XHJcbiAgICBkYXRhICs9IGNodWNrO1xyXG4gIH0pO1xyXG4gIHJlcXVlc3Qub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0cy5yZWRpcmVjdFRvID0gZnVuY3Rpb24ocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZWRpcmVjdClcclxuLy8gICByZXR1cm4gcmVzcG9uc2UucmVkaXJlY3QoJy9hcGkvcG9zdHMnKTtcclxuLy8gfVxyXG5cclxuZXhwb3J0cy5tYWtlQWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKGFjdGlvbk1hcCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIHZhciBhY3Rpb24gPSBhY3Rpb25NYXBbcmVxdWVzdC5tZXRob2RdO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICBhY3Rpb24ocmVxdWVzdCwgcmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXhwb3J0cy5zZW5kUmVzcG9uc2UocmVzcG9uc2UsICcnLCA0MDQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07Il19