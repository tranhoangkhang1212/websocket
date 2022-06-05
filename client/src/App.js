import "./App.css";
import { useState, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const domain = "http://localhost:3000";
  const [message, setMessage] = useState("");

  const socket = io(domain);

  socket.on("user-chat", (message) => {
    setMessage(message.message);
    console.log(message.message);
  });

  return (
    <div className="App">
      <h1>Client</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
