var express = require('express');
var fallback = require('express-history-api-fallback');
var app = express();
var path = require('path');
var util = require('util');

// set the port
var port = process.env.PORT || 8080;

// Serve build assets from the js client.
// @todo: This could be improved to serve development vs production builds.
var root = path.join(__dirname, '../client/dist');
app.get('/env', (req, res) => {
  res.send(util.inspect({ env: process.env, req }));
})
app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

// start the server.
app.listen(port);

module.exports = app;
