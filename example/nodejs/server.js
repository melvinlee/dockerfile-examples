'use strict';

const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.contentType('text/plain');
  res.send('Hello world!\n');
});

app.listen(port);

console.log('Server running at port: ' +  port + '\n');