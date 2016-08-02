var express = require('express');

var app = express();

// middleware
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// app port / store server
var server = app.listen(3000);

// socket address
var io = require('socket.io').listen(server);

// what happens when someone connects to socket
io.sockets.on('connection', function(socket){
  console.log("Connected: %s", socket.id);
})

console.log("Polling server is running at http://localhost:3000")

