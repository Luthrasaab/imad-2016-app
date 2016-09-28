var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/C-language.html',function(req, res){
   res.sendFile(path.join(__dirname,'ui','C-language.html')); 
});
app.get('/Java-language.html',function(req, res){
   res.sendFile(path.join(__dirname,'ui','Java-language.html')); 
});
app.get('/Python-language.html',function(req, res){
   res.sendFile(path.join(__dirname,'ui','Python-language.html')); 
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



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
