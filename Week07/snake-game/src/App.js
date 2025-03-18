import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");  // Connect to the server

function App() {
  const canvasRef = useRef(null);
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("players_update", (updatedPlayers) => {
      setPlayers(updatedPlayers);  // Update player positions
    });
  }, []);

  // Function to handle movement
  const handleKeyPress = (e) => {
    const movement = { x: 0, y: 0 };
    if (e.key === "ArrowUp") movement.y = -10;
    if (e.key === "ArrowDown") movement.y = 10;
    if (e.key === "ArrowLeft") movement.x = -10;
    if (e.key === "ArrowRight") movement.x = 10;
    
    socket.emit("move_snake", movement);
  };

  // Function to join the game
  const joinGame = () => {
    socket.emit("join_game", username);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Drawing the game
  const drawGame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    players.forEach((player) => {
      ctx.fillStyle = "green";
      ctx.fillRect(player.position.x, player.position.y, 10, 10);
    });
  };

  useEffect(() => {
    const interval = setInterval(drawGame, 100);
    return () => clearInterval(interval);
  }, [players]);

  return (
    <div>
      <h1>Snake.io</h1>
      {!username ? (
        <div>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button onClick={joinGame}>Join Game</button>
        </div>
      ) : (
        <div>
          <canvas ref={canvasRef} width={500} height={500}></canvas>
        </div>
      )}
    </div>
  );
}

export default App;
