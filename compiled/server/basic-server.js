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
);app.route('/api/posts/:id' // :id will be replaced
).get(function (req, res) {
  //req.params for :id number
  List.find({ id: req.param('id') }, function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send(list);
    }
  });
}).put(function (req, res) {
  List.find({ id: req.param(id) }, function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      list.id = req.body.toDo;
      res.status(200).send(list);
    }
  });
}).delete(function (req, res) {
  List.find({ id: req.param(id) }).remove(function (err, toDo) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iYXNpYy1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJtZXNzYWdlcyIsInV0aWxzIiwidXJsIiwiZXhwcmVzcyIsImFwcCIsIkxpc3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJmaW5kIiwiZXhlYyIsImVyciIsImxpc3QiLCJzdGF0dXMiLCJzZW5kIiwicG9zdCIsInRvRG8iLCJib2R5Iiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsImlkIiwicGFyYW0iLCJwdXQiLCJkZWxldGUiLCJyZW1vdmUiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBT0MsUUFBUSxNQUFSLENBQVg7O0FBRUEsSUFBSUMsV0FBV0QsUUFBUSxtQkFBUixDQUFmO0FBQ0EsSUFBSUUsUUFBUUYsUUFBUSxRQUFSLENBQVo7QUFDQSxJQUFJRyxNQUFNSCxRQUFRLEtBQVIsQ0FBVjs7QUFFQSxJQUFJSSxVQUFVSixRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlLLE1BQU1ELFNBQVY7O0FBRUEsSUFBSUUsT0FBT04sUUFBUSxlQUFSLENBQVg7O0FBRUFLLElBQUlFLEdBQUosQ0FBUSxZQUFSLEVBQXNCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNyQztBQUNBO0FBQ0FILE9BQUtJLElBQUwsQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW1CO0FBQ3BDLFFBQUlELEdBQUosRUFBUztBQUNQSCxVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILEdBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILFVBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBckI7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQVZIO0FBV0FSLElBQUlXLElBQUosQ0FBUyxZQUFULEVBQXVCLFVBQVNSLEdBQVQsRUFBY0MsR0FBZCxFQUFrQjtBQUN2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LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XHJcblxyXG52YXIgbWVzc2FnZXMgPSByZXF1aXJlKCcuL3JlcXVlc3QtaGFuZGxlcicpO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWwnKVxyXG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XHJcblxyXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxudmFyIGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbnZhciBMaXN0ID0gcmVxdWlyZSgnLi9kYi9kYXRhYmFzZScpO1xyXG5cclxuYXBwLmdldCgnL2FwaS9wb3N0cycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbiAgICAvL2NhbGwgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICAvL3Jlcy5zZW5kKGRhdGFiYXNlKVxyXG4gICAgTGlzdC5maW5kKHt9KS5leGVjKGZ1bmN0aW9uKGVyciwgbGlzdCl7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuYXBwLnBvc3QoJy9hcGkvcG9zdHMnLCBmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgdmFyIGxpc3QgPSBuZXcgTGlzdCh7dG9EbzogcmVxLmJvZHl9KTtcclxuICAvL2xpc3Quc2F2ZVxyXG4gIC8vcGFzcyBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgbGlzdC5zYXZlKGZ1bmN0aW9uIChlcnIsIGxpc3QpIHtcclxuICAgIGlmIChlcnIpIHsgLy9pZiBlcnJvciwgcmVzLnNlbmQoMjAxKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgIH0gZWxzZSB7IC8vaWYgbm8gc2VuZCBiYWNrIGEgbmV3IGxpc3QuXHJcbiAgICAvL2dvb2QgcHJhY3RpY2UgaXMgdG8gc2VuZCBiYWNrIHBvc3RlZCBkYXRhYmFzZTtcclxuICAgIC8vcmVzLnNlbmQgKClcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAvL3JlcS5ib2R5IC4uLiByZXEuZGF0YVxyXG4gIC8vZXhwb3J0IGRhdGFiYXNlIHRvIGRhdGFiYXNlXHJcbiAgLy9hZnRlclxyXG59KVxyXG5cclxuLy9ncmFiIGFsbCBwb3N0cywgb3IgcG9zdCBhIG1lc3NhZ2VcclxuLy8gYXBwLnJvdXRlKCcvYXBpL3Bvc3RzJylcclxuLy8gICAuZ2V0KGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbi8vICAgICAvL2NhbGwgdG8gdGhlIGRhdGFiYXNlXHJcbi8vICAgICAvL3Jlcy5zZW5kKGRhdGFiYXNlKVxyXG4vLyAgICAgTGlzdC5maW5kKHt9KS5leGVjKGZ1bmN0aW9uKGVyciwgbGlzdCl7XHJcbi8vICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuLy8gICAucG9zdChmdW5jdGlvbihyZXEsIHJlcyl7XHJcbi8vICAgICB2YXIgbGlzdCA9IG5ldyBMaXN0KHt0b0RvOiByZXEuYm9keS50b0RvfSk7XHJcbi8vICAgICAvL2xpc3Quc2F2ZVxyXG4vLyAgICAgLy9wYXNzIGluIGEgY2FsbGJhY2sgZnVuY3Rpb25cclxuLy8gICAgIGxpc3Quc2F2ZShmdW5jdGlvbiAoZXJyLCBsaXN0KSB7XHJcbi8vICAgICAgIGlmIChlcnIpIHsgLy9pZiBlcnJvciwgcmVzLnNlbmQoMjAxKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGVycik7XHJcbi8vICAgICAgIH0gZWxzZSB7IC8vaWYgbm8gc2VuZCBiYWNrIGEgbmV3IGxpc3QuXHJcbi8vICAgICAgIC8vZ29vZCBwcmFjdGljZSBpcyB0byBzZW5kIGJhY2sgcG9zdGVkIGRhdGFiYXNlO1xyXG4vLyAgICAgICAvL3Jlcy5zZW5kICgpXHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vICAgICAvL3JlcS5ib2R5IC4uLiByZXEuZGF0YVxyXG4vLyAgICAgLy9leHBvcnQgZGF0YWJhc2UgdG8gZGF0YWJhc2VcclxuLy8gICAgIC8vYWZ0ZXJcclxuLy8gICB9KVxyXG5cclxuLy9ncmFiIGJ5IGlkLCBwb3N0IGJ5IGlkLCBkZWxldGUgYnkgaWRcclxuYXBwLnJvdXRlKCcvYXBpL3Bvc3RzLzppZCcpIC8vIDppZCB3aWxsIGJlIHJlcGxhY2VkXHJcbiAgLmdldChmdW5jdGlvbihyZXEsIHJlcykge1xyXG4gIC8vcmVxLnBhcmFtcyBmb3IgOmlkIG51bWJlclxyXG4gICAgTGlzdC5maW5kKHtpZDogcmVxLnBhcmFtKCdpZCcpfSwgZnVuY3Rpb24oZXJyLCBsaXN0KSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgLnB1dChmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgICBMaXN0LmZpbmQoe2lkOiByZXEucGFyYW0oaWQpfSwgZnVuY3Rpb24oZXJyLCBsaXN0KSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuaWQgPSByZXEuYm9keS50b0RvO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGxpc3QpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgLmRlbGV0ZShmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgICBMaXN0LmZpbmQoe2lkOiByZXEucGFyYW0oaWQpfSkucmVtb3ZlKGZ1bmN0aW9uKGVyciwgdG9Ebyl7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHRvRG8pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4vL2xpc3RlbmluZyB0byBwb3J0IDgwODBcclxuYXBwLmxpc3Rlbig4MDgwLCBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnTGlzdGVuaW5nIHRvIHBvcnQgODA4MCEnKVxyXG59KVxyXG5cclxuLy8gdmFyIHBvcnQgPSA4MDgwO1xyXG5cclxuLy8gdmFyIGlwID0gJzEyNy4wLjAuMSc7XHJcblxyXG4vLyB2YXIgcm91dGVyID0ge1xyXG4vLyAgICcvJzogbWVzc2FnZXMucmVxdWVzdEhhbmRsZXIsXHJcbi8vICAgLy8gR0VUIC0gL2FwaS9wb3N0cyAoUmV0cmlldmUgYWxsIHBvc3RzKVxyXG4vLyAgIC8vIFBPU1QgLSAvYXBpL3Bvc3RzIChDcmVhdGUgYSBuZXcgcG9zdClcclxuLy8gICAnL2FwaS9wb3N0cyc6IG1lc3NhZ2VzLnJlcXVlc3RIYW5kbGVyLFxyXG4vLyAgIC8vIEdFVCAtIC9hcGkvcG9zdHMvOmlkIChSZXRyaWV2ZSBhIHNpbmdsZSBwb3N0IGJ5IGl0cyBpZClcclxuLy8gICAvLyBQVVQgLSAvYXBpL3Bvc3RzLzppZCAoVXBkYXRlIGEgc2luZ2xlIHBvc3QgYnkgaXRzIGlkKVxyXG4vLyAgIC8vIERFTEVURSAtIC9hcGkvcG9zdHMvOmlkIChEZWxldGUgYSBzaW5nbGUgcG9zdCBieSBpdHMgaWQpXHJcbi8vICAgJy9hcGkvcG9zdHMvOmlkJzogbWVzc2FnZXMucmVxdWVzdEhhbmRsZXIsXHJcbi8vIH1cclxuXHJcblxyXG4vLyB2YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuLy8gICB2YXIgcm91dGUgPSByb3V0ZXJbdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lXTtcclxuLy8gICBpZiAocm91dGUpIHtcclxuLy8gICAgIHJvdXRlKHJlcSwgcmVzKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgdXRpbHMuc2VuZFJlc3BvbnNlKHJlcywgJycsIDQwNCk7XHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBodHRwOi8vJyArIGlwICsgJzonICsgcG9ydCk7XHJcbi8vIHNlcnZlci5saXN0ZW4ocG9ydCwgaXApOyJdfQ==