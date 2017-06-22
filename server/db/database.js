var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/server');
// mongoose.connect('mongodb://localhost/server/db/database.js');

//check if the database is connected to the local server
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('connected o.o!')
})

//create a schema here
var listSchema = Schema({
  toDo: String //
})

var List = mongoose.model('List', listSchema);

module.exports = List;