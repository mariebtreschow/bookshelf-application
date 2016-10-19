var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', './pug');
app.set('views', './views');

app.get('/', function(request, response) {
  response.render('/application.pug');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public' + '/index.html');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public' + '/index2.html');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public' + '/index3.html');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public' + '/index4.html');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
