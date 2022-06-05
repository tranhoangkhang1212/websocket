import "./App.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const domain = "http://localhost:3000";

  const [messageRes, setMessageRes] = useState([]);

  const socket = io(domain);

  useEffect(() => {
    socket.on("user-chat", (message) => {
      setMessageRes((prev) => [...prev, message.message]);
    });
  }, []);

  return (
    <div className="App">
      <h1>Client</h1>
      <ul>
        {messageRes.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
