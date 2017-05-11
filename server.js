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
 

'use strict';

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
  
  ws.on('message', msg => {
	     console.log('WebSocket new client');
    SendAll(ws,msg)
		//ws.send(msg);
    });
});
var fb_ws_client;
function handleMsg(ws, msg)
{
	switch(msg){
		case 'lwFB.ChatBot Starting.':
			fb_ws_client=ws;
			berak;
		default:SendAll(ws,msg);berak;
	}
}
function SendAll(ws,msg)
{
  wss.clients.forEach((client) => {
    if(ws!=client)
      client.send(msg);
  });
}

/*setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
*/

/*setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);*/
