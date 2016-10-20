var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

app.set('view engine', './pug');
app.set('views', './views');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/homepage.html');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/first-book.html');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/second-book.html');
});

app.get('/', function(request, response) {

  response.sendFile(__dirname + '/third-book.html');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
