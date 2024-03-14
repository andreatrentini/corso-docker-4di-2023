const express = require('express');
// Carico la libreria socket.io
const socketio = require('socket.io');

const config = require('./config');
const log = require('./log');

const service = express();

service.use(log);
service.use('/', express.static(__dirname + '/sito'));

const server = service.listen(config.port, () => {
    console.log('Server in ascolto sulla porta:', config.port);
})

// Creo un'istanza del mio real time server
const rtServer = socketio(server);

// Iniziamo la configurazione del real time server

// 1. metto rtServer in ascolto per nuove connessioni
// 'connection': nome del messaggio
// socket: oggetto che verrà creato per ogni client che si connette al server, ogni client avrà il suo socket
rtServer.on('connection', (socket) => {
    console.log('Un nuovo client si è connesso');
})