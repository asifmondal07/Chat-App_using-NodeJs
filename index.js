const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server); // Bind Socket.IO to the HTTP server

// Serve static files from the "public" directory
app.use(express.static(path.resolve("./public")));

// Handle WebSocket connections
io.on("connection", (socket) => {
  // Listen for user messages
  socket.on("user-message", (message) => {
    console.log(`Message from ${socket.id}: ${message}`); // Debugging log
    io.emit("message", message); // Broadcast the message to all clients
});
});

// Serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

// Start the server
server.listen(9000, () => {
    console.log("Server started on ", 9000);
});
