const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve your Angular frontend (build) from a public folder
app.use(express.static(__dirname + '/public'));

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for custom events from the client
  socket.on('message', (data) => {
    console.log('Received message:', data+1);
    // Broadcast the message to all connected clients
    io.emit('message', data+1);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
