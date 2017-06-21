var http = require('http');

var messages = require('./request-handler');
var utils = require('./util')
var url = require('url');

var express = require('express');
var app = express();

var List = require('./db/database');

app.get('/api/posts', function(req, res) {
    //call to the database
    //res.send(database)
    List.find({}).exec(function(err, list){
      if (err) {
        res.status(201).send(err);
      } else {
        res.status(200).send(list)
      }
    })
  })
app.post('/api/posts', function(req, res){
  var list = new List({toDo: req.body});
  //list.save
  //pass in a callback function
  list.save(function (err, list) {
    if (err) { //if error, res.send(201)
      console.log(req.body)
      res.status(201).send(err);
    } else { //if no send back a new list.
    //good practice is to send back posted database;
    //res.send ()
      res.status(200).send(list);
    }
  })
  //req.body ... req.data
  //export database to database
  //after
})

app.route('/api/posts/:id') // :id will be replaced
  .get(function(req, res) {
  //req.params for :id number
    List.find({id: req.params.id}, function(err, list) {
      if (err) {
        res.status(201).send(err);
      } else {
        res.status(200).send(list);
      }
    })
  })
  .put(function(req, res){
    List.find({id: req.params.id}, function(err, list) {
      if (err) {
        res.status(201).send(err);
      } else {
        list.id = req.body.toDo;
        res.status(200).send(list);
      }
    })
  })
  .delete(function(req, res){
    List.find({id: req.params.id}).remove(function(err, toDo){
      if (err) {
        res.status(201).send(err);
      } else {
        res.status(200).send(toDo);
      }
    })
  })

//listening to port 8080
app.listen(8080, function() {
  console.log('Listening to port 8080!')
})

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