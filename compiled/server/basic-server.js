'use strict';

var http = require('http');

var messages = require('./request-handler');
var utils = require('./util');
var url = require('url');

var express = require('express');
var app = express();

var List = require('./db/database');

//grab all posts, or post a message
app.route('/api/posts').get(function (req, res) {
  //call to the database
  //res.send(database)
  List.find({}).exec(function (err, list) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send(list);
    }
  });
}).post(function (req, res) {
  var list = new List({ toDo: req.body.toDo });
  //list.save
  //pass in a callback function
  list.save(function (err, list) {
    if (err) {
      //if error, res.send(201)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iYXNpYy1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJtZXNzYWdlcyIsInV0aWxzIiwidXJsIiwiZXhwcmVzcyIsImFwcCIsIkxpc3QiLCJyb3V0ZSIsImdldCIsInJlcSIsInJlcyIsImZpbmQiLCJleGVjIiwiZXJyIiwibGlzdCIsInN0YXR1cyIsInNlbmQiLCJwb3N0IiwidG9EbyIsImJvZHkiLCJzYXZlIiwiaWQiLCJwYXJhbSIsInB1dCIsImRlbGV0ZSIsInJlbW92ZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBT0MsUUFBUSxNQUFSLENBQVg7O0FBRUEsSUFBSUMsV0FBV0QsUUFBUSxtQkFBUixDQUFmO0FBQ0EsSUFBSUUsUUFBUUYsUUFBUSxRQUFSLENBQVo7QUFDQSxJQUFJRyxNQUFNSCxRQUFRLEtBQVIsQ0FBVjs7QUFFQSxJQUFJSSxVQUFVSixRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlLLE1BQU1ELFNBQVY7O0FBRUEsSUFBSUUsT0FBT04sUUFBUSxlQUFSLENBQVg7O0FBRUE7QUFDQUssSUFBSUUsS0FBSixDQUFVLFlBQVYsRUFDR0MsR0FESCxDQUNPLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN0QjtBQUNBO0FBQ0FKLE9BQUtLLElBQUwsQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW1CO0FBQ3BDLFFBQUlELEdBQUosRUFBUztBQUNQSCxVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILEdBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILFVBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBckI7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQVhILEVBWUdHLElBWkgsQ0FZUSxVQUFTUixHQUFULEVBQWNDLEdBQWQsRUFBa0I7QUFDdEIsTUFBSUksT0FBTyxJQUFJUixJQUFKLENBQVMsRUFBQ1ksTUFBTVQsSUFBSVUsSUFBSixDQUFTRCxJQUFoQixFQUFULENBQVg7QUFDQTtBQUNBO0FBQ0FKLE9BQUtNLElBQUwsQ0FBVSxVQUFVUCxHQUFWLEVBQWVDLElBQWYsRUFBcUI7QUFDN0IsUUFBSUQsR0FBSixFQUFTO0FBQUU7QUFDVEgsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEtBRkQsTUFFTztBQUFFO0FBQ1Q7QUFDQTtBQUNFSCxVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0Q7QUFDRjtBQUNEO0FBQ0E7QUFDQTtBQVhBO0FBWUQ7O0FBRUg7QUE5QkEsRUErQkFULElBQUlFLEtBQUosQ0FBVSxnQkFBVixDQUE0QjtBQUE1QixFQUNHQyxHQURILENBQ08sVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3hCO0FBQ0VKLE9BQUtLLElBQUwsQ0FBVSxFQUFDVSxJQUFJWixJQUFJYSxLQUFKLENBQVUsSUFBVixDQUFMLEVBQVYsRUFBaUMsVUFBU1QsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ25ELFFBQUlELEdBQUosRUFBUztBQUNQSCxVQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILEdBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILFVBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBckI7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQVZILEVBV0dTLEdBWEgsQ0FXTyxVQUFTZCxHQUFULEVBQWNDLEdBQWQsRUFBa0I7QUFDckJKLE9BQUtLLElBQUwsQ0FBVSxFQUFDVSxJQUFJWixJQUFJYSxLQUFKLENBQVVELEVBQVYsQ0FBTCxFQUFWLEVBQStCLFVBQVNSLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjtBQUNqRCxRQUFJRCxHQUFKLEVBQVM7QUFDUEgsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMQyxXQUFLTyxFQUFMLEdBQVVaLElBQUlVLElBQUosQ0FBU0QsSUFBbkI7QUFDQVIsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQUNEO0FBQ0YsR0FQRDtBQVFELENBcEJILEVBcUJHVSxNQXJCSCxDQXFCVSxVQUFTZixHQUFULEVBQWNDLEdBQWQsRUFBa0I7QUFDeEJKLE9BQUtLLElBQUwsQ0FBVSxFQUFDVSxJQUFJWixJQUFJYSxLQUFKLENBQVVELEVBQVYsQ0FBTCxFQUFWLEVBQStCSSxNQUEvQixDQUFzQyxVQUFTWixHQUFULEVBQWNLLElBQWQsRUFBbUI7QUFDdkQsUUFBSUwsR0FBSixFQUFTO0FBQ1BILFVBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsR0FBckI7QUFDRCxLQUZELE1BRU87QUFDTEgsVUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRSxJQUFyQjtBQUNEO0FBQ0YsR0FORDtBQU9EOztBQUVIO0FBL0JBLEVBZ0NBYixJQUFJcUIsTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQkMsVUFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0Q7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQTlCQSIsImZpbGUiOiJiYXNpYy1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcclxuXHJcbnZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vcmVxdWVzdC1oYW5kbGVyJyk7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbCcpXHJcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcclxuXHJcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5cclxudmFyIExpc3QgPSByZXF1aXJlKCcuL2RiL2RhdGFiYXNlJyk7XHJcblxyXG4vL2dyYWIgYWxsIHBvc3RzLCBvciBwb3N0IGEgbWVzc2FnZVxyXG5hcHAucm91dGUoJy9hcGkvcG9zdHMnKVxyXG4gIC5nZXQoZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICAgIC8vY2FsbCB0byB0aGUgZGF0YWJhc2VcclxuICAgIC8vcmVzLnNlbmQoZGF0YWJhc2UpXHJcbiAgICBMaXN0LmZpbmQoe30pLmV4ZWMoZnVuY3Rpb24oZXJyLCBsaXN0KXtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC5wb3N0KGZ1bmN0aW9uKHJlcSwgcmVzKXtcclxuICAgIHZhciBsaXN0ID0gbmV3IExpc3Qoe3RvRG86IHJlcS5ib2R5LnRvRG99KTtcclxuICAgIC8vbGlzdC5zYXZlXHJcbiAgICAvL3Bhc3MgaW4gYSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgbGlzdC5zYXZlKGZ1bmN0aW9uIChlcnIsIGxpc3QpIHtcclxuICAgICAgaWYgKGVycikgeyAvL2lmIGVycm9yLCByZXMuc2VuZCgyMDEpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoZXJyKTtcclxuICAgICAgfSBlbHNlIHsgLy9pZiBubyBzZW5kIGJhY2sgYSBuZXcgbGlzdC5cclxuICAgICAgLy9nb29kIHByYWN0aWNlIGlzIHRvIHNlbmQgYmFjayBwb3N0ZWQgZGF0YWJhc2U7XHJcbiAgICAgIC8vcmVzLnNlbmQgKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChsaXN0KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vcmVxLmJvZHkgLi4uIHJlcS5kYXRhXHJcbiAgICAvL2V4cG9ydCBkYXRhYmFzZSB0byBkYXRhYmFzZVxyXG4gICAgLy9hZnRlclxyXG4gIH0pXHJcblxyXG4vL2dyYWIgYnkgaWQsIHBvc3QgYnkgaWQsIGRlbGV0ZSBieSBpZFxyXG5hcHAucm91dGUoJy9hcGkvcG9zdHMvOmlkJykgLy8gOmlkIHdpbGwgYmUgcmVwbGFjZWRcclxuICAuZ2V0KGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbiAgLy9yZXEucGFyYW1zIGZvciA6aWQgbnVtYmVyXHJcbiAgICBMaXN0LmZpbmQoe2lkOiByZXEucGFyYW0oJ2lkJyl9LCBmdW5jdGlvbihlcnIsIGxpc3QpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuICAucHV0KGZ1bmN0aW9uKHJlcSwgcmVzKXtcclxuICAgIExpc3QuZmluZCh7aWQ6IHJlcS5wYXJhbShpZCl9LCBmdW5jdGlvbihlcnIsIGxpc3QpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5pZCA9IHJlcS5ib2R5LnRvRG87XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQobGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuICAuZGVsZXRlKGZ1bmN0aW9uKHJlcSwgcmVzKXtcclxuICAgIExpc3QuZmluZCh7aWQ6IHJlcS5wYXJhbShpZCl9KS5yZW1vdmUoZnVuY3Rpb24oZXJyLCB0b0RvKXtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodG9Ebyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbi8vbGlzdGVuaW5nIHRvIHBvcnQgODA4MFxyXG5hcHAubGlzdGVuKDgwODAsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgdG8gcG9ydCA4MDgwIScpXHJcbn0pXHJcblxyXG4vLyB2YXIgcG9ydCA9IDgwODA7XHJcblxyXG4vLyB2YXIgaXAgPSAnMTI3LjAuMC4xJztcclxuXHJcbi8vIHZhciByb3V0ZXIgPSB7XHJcbi8vICAgJy8nOiBtZXNzYWdlcy5yZXF1ZXN0SGFuZGxlcixcclxuLy8gICAvLyBHRVQgLSAvYXBpL3Bvc3RzIChSZXRyaWV2ZSBhbGwgcG9zdHMpXHJcbi8vICAgLy8gUE9TVCAtIC9hcGkvcG9zdHMgKENyZWF0ZSBhIG5ldyBwb3N0KVxyXG4vLyAgICcvYXBpL3Bvc3RzJzogbWVzc2FnZXMucmVxdWVzdEhhbmRsZXIsXHJcbi8vICAgLy8gR0VUIC0gL2FwaS9wb3N0cy86aWQgKFJldHJpZXZlIGEgc2luZ2xlIHBvc3QgYnkgaXRzIGlkKVxyXG4vLyAgIC8vIFBVVCAtIC9hcGkvcG9zdHMvOmlkIChVcGRhdGUgYSBzaW5nbGUgcG9zdCBieSBpdHMgaWQpXHJcbi8vICAgLy8gREVMRVRFIC0gL2FwaS9wb3N0cy86aWQgKERlbGV0ZSBhIHNpbmdsZSBwb3N0IGJ5IGl0cyBpZClcclxuLy8gICAnL2FwaS9wb3N0cy86aWQnOiBtZXNzYWdlcy5yZXF1ZXN0SGFuZGxlcixcclxuLy8gfVxyXG5cclxuXHJcbi8vIHZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbihyZXEsIHJlcykge1xyXG4vLyAgIHZhciByb3V0ZSA9IHJvdXRlclt1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWVdO1xyXG4vLyAgIGlmIChyb3V0ZSkge1xyXG4vLyAgICAgcm91dGUocmVxLCByZXMpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICB1dGlscy5zZW5kUmVzcG9uc2UocmVzLCAnJywgNDA0KTtcclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG4vLyBjb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uIGh0dHA6Ly8nICsgaXAgKyAnOicgKyBwb3J0KTtcclxuLy8gc2VydmVyLmxpc3Rlbihwb3J0LCBpcCk7Il19