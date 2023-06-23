import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const countUp = () => {
    setNumber(number + 1);
  };
  const countDown = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>Count</h1>
      <div>{number}</div>
      <button onClick={countUp}>countUp</button>
      <button onClick={countDown}>countDown</button>
    </div>
  );
}

export default App;
