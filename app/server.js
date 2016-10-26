var express = require('express');
var app = express();

module.exports = app;

app.get('/', function (req, res) {

  res.send({
    server: 'wolf'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
