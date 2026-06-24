import React, { useState } from "react";

function App() {
  // State to hold message
  const [message, setMessage] = useState("Hello, React!");

  // Function to change message
  const changeMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
}

export default App;
