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
 
var ws = require("nodejs-websocket");
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        console.log("text:"+str);
        conn.sendText(str);
    })
    conn.on("close", function (code, reason) {
        console.log("close");
    });
    conn.on("error", function (code, reason) {
        console.log("error");
    });
}).listen(3001)


console.log("--WebSocket-------------");
console.log("WebSocket address: ws://127.0.0.1:3001");
console.log("WebSocket has started.");
console.log("------------------------");


var http = require("http"),
    url  = require("url"),
    path = require("path"),
    fs   = require("fs");

http.createServer(function (req, res) {
    var pathname=__dirname+url.parse(req.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="test/index.html";
    }

    path.exists(pathname,function(exists){
        if(exists){
            switch(path.extname(pathname)){
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname,function (err,data){
                res.end(data);
            });
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
        }
    });

}).listen(8080, "127.0.0.1");


console.log("--Server----------------");
console.log("Server address: http://127.0.0.1:8080");
console.log("Server running... press ctrl-c to stop.");
console.log("Server has started.");
console.log("------------------------");

/*
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
*/

/*setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);*/
