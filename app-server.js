var express = require('express');

var app = express();

// middleware
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// app port
app.listen(3000);


console.log("Polling server is running at http://localhost:3000")

