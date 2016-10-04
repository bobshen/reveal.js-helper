/**
 * Server
 *
 * @file server
 * @author shenbin
 */

var server = require('http').createServer();
var io = require('socket.io')(server);

var PORT = 3030;

server.listen(PORT);
io.on('connection', function (socket) {
    socket.emit('connected', {});
    socket.on('command', function (data) {
        io.emit('change', data);
    });
});

console.log('Server have run on http://localhost:' + PORT);
