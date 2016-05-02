var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://admin:tkfkdgo4@ds011902.mlab.com:11902/mean");
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB OK");
});
db.on("error", function(err){
  console.log("DB ERROR", err);
});


app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname + 'public')));

app.get('/', function(req, res){
  res.render('myejs');
});

app.listen(3000, function(){
  console.log('server On!');
});
