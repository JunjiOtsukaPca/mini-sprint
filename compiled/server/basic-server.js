'use strict';

var http = require('http');

var messages = require('./request-handler');
var utils = require('./util');
var url = require('url');

var express = require('express');
var app = express();

var List = require('./db/database');

app.get('/api/posts', function (req, res) {
  //call to the database
  //res.send(database)
  List.find({}).exec(function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send(list);
    }
  });
});
app.post('/api/posts', function (req, res) {
  var list = new List({ toDo: req.body });
  //list.save
  //pass in a callback function
  list.save(function (err, list) {
    if (err) {
      //if error, res.send(201)
      console.log(req.body);
      res.status(201).send(err);
    } else {
      //if no send back a new list.
      //good practice is to send back posted database;
      //res.send ()
      res.status(200).send(list);
    }
  }
  //req.body ... req.data
  //export database to database
  //after
  );
});

app.route('/api/posts/:id' // :id will be replaced
).get(function (req, res) {
  //req.params for :id number
  List.find({ id: req.params.id }, function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send(list);
    }
  });
}).put(function (req, res) {
  List.find({ id: req.params.id }, function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      list.id = req.body.toDo;
      res.status(200).send(list);
    }
  });
}).delete(function (req, res) {
  List.find({ id: req.params.id }).remove(function (err, toDo) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send(toDo);
    }
  });
}

//listening to port 8080
);app.listen(8080, function () {
  console.log('Listening to port 8080!');
}

//grab all posts, or post a message
// app.route('/api/posts')
//   .get(function(req, res) {
//     //call to the database
//     //res.send(database)
//     List.find({}).exec(function(err, list){
//       if (err) {
//         res.status(201).send(err);
//       } else {
//         res.status(200).send(list)
//       }
//     })
//   })
//   .post(function(req, res){
//     var list = new List({toDo: req.body.toDo});
//     //list.save
//     //pass in a callback function
//     list.save(function (err, list) {
//       if (err) { //if error, res.send(201)
//         console.log(req.body)
//         res.status(201).send(err);
//       } else { //if no send back a new list.
//       //good practice is to send back posted database;
//       //res.send ()
//         res.status(200).send(list);
//       }
//     })
//     //req.body ... req.data
//     //export database to database
//     //after
//   })

//grab by id, post by id, delete by id

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iYXNpYy1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJtZXNzYWdlcyIsInV0aWxzIiwidXJsIiwiZXhwcmVzcyIsImFwcCIsIkxpc3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJmaW5kIiwiZXhlYyIsImVyciIsImxpc3QiLCJzdGF0dXMiLCJzZW5kIiwicG9zdCIsInRvRG8iLCJib2R5Iiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsImlkIiwicGFyYW1zIiwicHV0IiwiZGVsZXRlIiwicmVtb3ZlIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU9DLFFBQVEsTUFBUixDQUFYOztBQUVBLElBQUlDLFdBQVdELFFBQVEsbUJBQVIsQ0FBZjtBQUNBLElBQUlFLFFBQVFGLFFBQVEsUUFBUixDQUFaO0FBQ0EsSUFBSUcsTUFBTUgsUUFBUSxLQUFSLENBQVY7O0FBRUEsSUFBSUksVUFBVUosUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJSyxNQUFNRCxTQUFWOztBQUVBLElBQUlFLE9BQU9OLFFBQVEsZUFBUixDQUFYOztBQUVBSyxJQUFJRSxHQUFKLENBQVEsWUFBUixFQUFzQixVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDckM7QUFDQTtBQUNBSCxPQUFLSSxJQUFMLENBQVUsRUFBVixFQUFjQyxJQUFkLENBQW1CLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFtQjtBQUNwQyxRQUFJRCxHQUFKLEVBQVM7QUFDUEgsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMSCxVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FWSDtBQVdBUixJQUFJVyxJQUFKLENBQVMsWUFBVCxFQUF1QixVQUFTUixHQUFULEVBQWNDLEdBQWQsRUFBa0I7QUFD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cmNlc0NvbnRlbnQiOlsidmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XHJcblxyXG52YXIgbWVzc2FnZXMgPSByZXF1aXJlKCcuL3JlcXVlc3QtaGFuZGxlcicpO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWwnKVxyXG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XHJcblxyXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxudmFyIGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbnZhciBMaXN0ID0gcmVxdWlyZSgnLi9kYi9kYXRhYmFzZScpO1xyXG5cclxuYXBwLmdldCgnL2FwaS9wb3N0cycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbiAgICAvL2NhbGwgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICAvL3Jlcy5zZW5kKGRhdGFiYXNlKVxyXG4gICAgTGlzdC5maW5kKHt9KS5leGVjKGZ1bmN0aW9uKGVyciwgbGlzdCl7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuYXBwLnBvc3QoJy9hcGkvcG9zdHMnLCBmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgdmFyIGxpc3QgPSBuZXcgTGlzdCh7dG9EbzogcmVxLmJvZHl9KTtcclxuICAvL2xpc3Quc2F2ZVxyXG4gIC8vcGFzcyBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgbGlzdC5zYXZlKGZ1bmN0aW9uIChlcnIsIGxpc3QpIHtcclxuICAgIGlmIChlcnIpIHsgLy9pZiBlcnJvciwgcmVzLnNlbmQoMjAxKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgIH0gZWxzZSB7IC8vaWYgbm8gc2VuZCBiYWNrIGEgbmV3IGxpc3QuXHJcbiAgICAvL2dvb2QgcHJhY3RpY2UgaXMgdG8gc2VuZCBiYWNrIHBvc3RlZCBkYXRhYmFzZTtcclxuICAgIC8vcmVzLnNlbmQgKClcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAvL3JlcS5ib2R5IC4uLiByZXEuZGF0YVxyXG4gIC8vZXhwb3J0IGRhdGFiYXNlIHRvIGRhdGFiYXNlXHJcbiAgLy9hZnRlclxyXG59KVxyXG5cclxuYXBwLnJvdXRlKCcvYXBpL3Bvc3RzLzppZCcpIC8vIDppZCB3aWxsIGJlIHJlcGxhY2VkXHJcbiAgLmdldChmdW5jdGlvbihyZXEsIHJlcykge1xyXG4gIC8vcmVxLnBhcmFtcyBmb3IgOmlkIG51bWJlclxyXG4gICAgTGlzdC5maW5kKHtpZDogcmVxLnBhcmFtcy5pZH0sIGZ1bmN0aW9uKGVyciwgbGlzdCkge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChsaXN0KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC5wdXQoZnVuY3Rpb24ocmVxLCByZXMpe1xyXG4gICAgTGlzdC5maW5kKHtpZDogcmVxLnBhcmFtcy5pZH0sIGZ1bmN0aW9uKGVyciwgbGlzdCkge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LmlkID0gcmVxLmJvZHkudG9EbztcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChsaXN0KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC5kZWxldGUoZnVuY3Rpb24ocmVxLCByZXMpe1xyXG4gICAgTGlzdC5maW5kKHtpZDogcmVxLnBhcmFtcy5pZH0pLnJlbW92ZShmdW5jdGlvbihlcnIsIHRvRG8pe1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh0b0RvKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuLy9saXN0ZW5pbmcgdG8gcG9ydCA4MDgwXHJcbmFwcC5saXN0ZW4oODA4MCwgZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coJ0xpc3RlbmluZyB0byBwb3J0IDgwODAhJylcclxufSlcclxuXHJcbi8vZ3JhYiBhbGwgcG9zdHMsIG9yIHBvc3QgYSBtZXNzYWdlXHJcbi8vIGFwcC5yb3V0ZSgnL2FwaS9wb3N0cycpXHJcbi8vICAgLmdldChmdW5jdGlvbihyZXEsIHJlcykge1xyXG4vLyAgICAgLy9jYWxsIHRvIHRoZSBkYXRhYmFzZVxyXG4vLyAgICAgLy9yZXMuc2VuZChkYXRhYmFzZSlcclxuLy8gICAgIExpc3QuZmluZCh7fSkuZXhlYyhmdW5jdGlvbihlcnIsIGxpc3Qpe1xyXG4vLyAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChsaXN0KVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcbi8vICAgLnBvc3QoZnVuY3Rpb24ocmVxLCByZXMpe1xyXG4vLyAgICAgdmFyIGxpc3QgPSBuZXcgTGlzdCh7dG9EbzogcmVxLmJvZHkudG9Eb30pO1xyXG4vLyAgICAgLy9saXN0LnNhdmVcclxuLy8gICAgIC8vcGFzcyBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbi8vICAgICBsaXN0LnNhdmUoZnVuY3Rpb24gKGVyciwgbGlzdCkge1xyXG4vLyAgICAgICBpZiAoZXJyKSB7IC8vaWYgZXJyb3IsIHJlcy5zZW5kKDIwMSlcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4vLyAgICAgICB9IGVsc2UgeyAvL2lmIG5vIHNlbmQgYmFjayBhIG5ldyBsaXN0LlxyXG4vLyAgICAgICAvL2dvb2QgcHJhY3RpY2UgaXMgdG8gc2VuZCBiYWNrIHBvc3RlZCBkYXRhYmFzZTtcclxuLy8gICAgICAgLy9yZXMuc2VuZCAoKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy9yZXEuYm9keSAuLi4gcmVxLmRhdGFcclxuLy8gICAgIC8vZXhwb3J0IGRhdGFiYXNlIHRvIGRhdGFiYXNlXHJcbi8vICAgICAvL2FmdGVyXHJcbi8vICAgfSlcclxuXHJcbi8vZ3JhYiBieSBpZCwgcG9zdCBieSBpZCwgZGVsZXRlIGJ5IGlkXHJcblxyXG4vLyB2YXIgcG9ydCA9IDgwODA7XHJcblxyXG4vLyB2YXIgaXAgPSAnMTI3LjAuMC4xJztcclxuXHJcbi8vIHZhciByb3V0ZXIgPSB7XHJcbi8vICAgJy8nOiBtZXNzYWdlcy5yZXF1ZXN0SGFuZGxlcixcclxuLy8gICAvLyBHRVQgLSAvYXBpL3Bvc3RzIChSZXRyaWV2ZSBhbGwgcG9zdHMpXHJcbi8vICAgLy8gUE9TVCAtIC9hcGkvcG9zdHMgKENyZWF0ZSBhIG5ldyBwb3N0KVxyXG4vLyAgICcvYXBpL3Bvc3RzJzogbWVzc2FnZXMucmVxdWVzdEhhbmRsZXIsXHJcbi8vICAgLy8gR0VUIC0gL2FwaS9wb3N0cy86aWQgKFJldHJpZXZlIGEgc2luZ2xlIHBvc3QgYnkgaXRzIGlkKVxyXG4vLyAgIC8vIFBVVCAtIC9hcGkvcG9zdHMvOmlkIChVcGRhdGUgYSBzaW5nbGUgcG9zdCBieSBpdHMgaWQpXHJcbi8vICAgLy8gREVMRVRFIC0gL2FwaS9wb3N0cy86aWQgKERlbGV0ZSBhIHNpbmdsZSBwb3N0IGJ5IGl0cyBpZClcclxuLy8gICAnL2FwaS9wb3N0cy86aWQnOiBtZXNzYWdlcy5yZXF1ZXN0SGFuZGxlcixcclxuLy8gfVxyXG5cclxuXHJcbi8vIHZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbihyZXEsIHJlcykge1xyXG4vLyAgIHZhciByb3V0ZSA9IHJvdXRlclt1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWVdO1xyXG4vLyAgIGlmIChyb3V0ZSkge1xyXG4vLyAgICAgcm91dGUocmVxLCByZXMpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICB1dGlscy5zZW5kUmVzcG9uc2UocmVzLCAnJywgNDA0KTtcclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG4vLyBjb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uIGh0dHA6Ly8nICsgaXAgKyAnOicgKyBwb3J0KTtcclxuLy8gc2VydmVyLmxpc3Rlbihwb3J0LCBpcCk7Il19