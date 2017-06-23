var express = require('express');
var app = express();

//bodyParser is a useful tool to retrieve req.body as an object.
var bodyParser = require('body-parser');

var List = require('./db/database');

// these are required inside express.
//tool kits to make express easier to use
app.use(express.static(__dirname + '/../')); //index.html frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/posts', function(req, res) {
    //call to the database
    //res.send(database)
    List.find({}).exec(function(err, list) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(list)
      }
    })
  })
app.post('/api/posts', function(req, res){

  console.log(req.body.toDo)
  var list = new List({toDo: req.body.toDo});
  //list.save
  //pass in a callback function
  list.save(function (err, listFromDB) {
    if (err) { //if error, res.send(404)
  // console.log(req.body.toDo)
      res.status(404).send(err);
    } else { //if no send back a new list.
    //good practice is to send back posted database;
    //res.send ()
      console.log('list', listFromDB)
      res.status(200).send(listFromDB);
    }
  })
  //req.body ... req.data
  //export database to database
  //after
})

app.route('/api/posts/:id') // :id will be replaced
  .get(function(req, res) {
  //req.params for :id number
    List.findById(req.params.id, function(err, list) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(list);
      }
    })
  })
  .put(function(req, res){
    List.findByIdAndUpdate(req.params.id, {toDo: req.body.toDo}, function(err, list) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(list);
      }
    })
  })
  .delete(function(req, res){
    List.findByIdAndRemove(req.params.id, function(err, toDo){
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(toDo);
      }
    })
  })

//listening to port 8080
app.listen(8080, function() {
  console.log('Listening to port 8080!')
});

//grab all posts, or post a message
// app.route('/api/posts')
//   .get(function(req, res) {
//     //call to the database
//     //res.send(database)
//     List.find({}).exec(function(err, list){
//       if (err) {
//         res.status(404).send(err);
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
//       if (err) { //if error, res.send(404)
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