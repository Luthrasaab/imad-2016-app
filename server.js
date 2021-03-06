var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
 res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/user.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'user.html'));
});
app.get('/ui/for_blogger.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'for_blogger.html'));
});
app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/ui/foodarticle.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'foodarticle.html'));
});
app.get('/ui/travelarticle.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'travelarticle.html'));
});
app.get('/ui/booksarticle.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'booksarticle.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
