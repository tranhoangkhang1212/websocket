import "./App.css";
import { useState, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const domain = "http://localhost:3000";

  const socket = io(domain);

  const inputRef = useRef();

  const handleClick = () => {
    socket.emit("on-chat", {
      message: inputRef.current.value,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="App">
      <h1>Admin</h1>
      <input type="text" ref={inputRef} onKeyPress={handleKeyPress} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default App;
