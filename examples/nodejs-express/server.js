'use strict';

const express = require('express');
const os = require('os');
const app = express();  

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  
  let name = req.query.name || `world`
  let host = os.hostname();

  res.contentType('text/plain');
  res.send(`Hello ${name}! (You request served by host:${host})\n`);
});

let server = app.listen(port, function() {  
  console.log(`Server is listening on port ${port}`);
});