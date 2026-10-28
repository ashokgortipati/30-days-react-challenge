import React, { useEffect, useState } from "react";
import"./App.css"

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  const clear = () => {
    setRunning(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);
  return (
    <div className="App">
      <p>{formattedTime}</p>
      <p>
  {!isRunning && seconds === 0
    ? "Ready to focus"
    : isRunning
    ? "Focusing..."                       
    : "Paused"}
</p>
      <button onClick={() => setRunning(true)} disabled={isRunning}>
        Start
      </button>

      <button onClick={() => setRunning(false)} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={clear}>Reset</button>
    </div>
  );
}

export default App;
