var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json('Done!');
});
app.get('*', function(req, res){
  res.status(404).render('error');
});
app.listen(8050);
console.log('Listening on port 8050');

