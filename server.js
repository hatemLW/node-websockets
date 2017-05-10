var io = require('socket.io')(80);
console.log('000');
io.on('connection', function (socket) {
  //io.emit('this', { will: 'be received by everyone'});
console.log('111');
  //socket.on('private message', function (from, msg) {
  //  console.log('I received a private message by ', from, ' saying ', msg);
  //});

  //socket.on('disconnect', function () {
  //  io.emit('user disconnected');
  //});
});

/*'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

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
}*/

/*setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);*/
