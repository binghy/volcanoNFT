var path = require('path');
var express = require('express');

var app = express();

const port = process.env.PORT || 3000;

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(port, () => console.log(`Listening on port ${port}...`));
