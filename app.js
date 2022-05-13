const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
 
});

let x = 250;
let y = 250;

io.on('connection', (socket) => {
  socket.on('direction', (msg) => {
    console.log(msg);
    switch(msg){
      case "u":
        y -= 5;
        break;
      case "d":
        y += 5;
        break;
      case "l":
        x -= 5;
        break;
      case "r":
        x += 5;
        break;
    }
    socket.emit('event_b',[x,y]);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
