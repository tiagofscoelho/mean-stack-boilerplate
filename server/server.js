/* jshint node: true */
'use strict';

var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined', {
  skip: function (req, res) {
    return res.statusCode < 400;
  }
}));

app.use('/', express.static(process.cwd() + "/app"));
app.get('*', function (req, res) {
  res.sendFile(process.cwd() + "/app/index.html");
});

app.listen(3000, function () {
  console.log("App running at port 3000");
});
