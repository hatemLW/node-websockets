var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

http.listen(3001, function(){

  console.log('listening on *:3001');

});

//for testing, we're just going to send data to the client every second
setInterval( function() {

  /*
    our message we want to send to the client: in this case it's just a random
    number that we generate on the server
  */
  var msg = Math.random();
  io.emit('message', msg);
  console.log (msg);

}, 1000);

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
