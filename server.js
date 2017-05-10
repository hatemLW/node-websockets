/*var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
  //res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/

//'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');
var WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', function incoming(message) {
    console.log('received: ' + message);
    //console.log('received: %s', message);
    Broadcast(ws,message);
  });
});

function Broadcast(ws,msg)
{
  wss.clients.forEach((client) => {
    if(ws!=client && client.readyState === WebSocket.OPEN)
      client.send(msg);
  });
}

/*setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);*/
