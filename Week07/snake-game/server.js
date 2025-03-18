const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);  // Enable real-time communication

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/snakeio", { useNewUrlParser: true, useUnifiedTopology: true });

// Sample user model for MongoDB
const User = mongoose.model("User", new mongoose.Schema({
  username: String,
  score: Number,
}));

// Real-time socket.io event handling
let players = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle player joining the game
  socket.on("join_game", (username) => {
    players.push({ id: socket.id, username, position: { x: 50, y: 50 }, score: 0 });
    io.emit("players_update", players);
  });

  // Handle player movement
  socket.on("move_snake", (movement) => {
    let player = players.find(p => p.id === socket.id);
    if (player) {
      player.position = movement;  // Update position based on the movement
      io.emit("players_update", players);
    }
  });

  // Handle player disconnection
  socket.on("disconnect", () => {
    players = players.filter(p => p.id !== socket.id);
    io.emit("players_update", players);
  });
});

// Start the server
server.listen(3001, () => {
  console.log("Server running on port 3001");
});
