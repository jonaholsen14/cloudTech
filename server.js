// Import required modules
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Create an Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.IO server instance
const io = socketIO(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat messages from clients
    socket.on('chat message', (message) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', message);
    });

    // Listen for disconnections
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
