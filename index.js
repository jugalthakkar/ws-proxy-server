const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

console.log('started server');

const ws = new WebSocket('ws://stocks.mnet.website');

console.log('connected to target');

ws.on('message', function incoming(data) {
    console.log(data);
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
});

console.log('proxy server running');