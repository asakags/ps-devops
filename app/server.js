var express = require('express');
var app = express();

module.exports = app;

app.get('/', function (req, res) {

  res.send({
    version1: '1.0.0'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
