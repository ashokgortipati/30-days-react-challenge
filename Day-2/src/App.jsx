
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="app">
      <div className={`light-card ${isOn ? "on" : "off"}`}>
        <div className="bulb">
          {isOn ? "💡" : "🔌"}
        </div>

        <h1>Light Switch</h1>

        <p className={`status ${isOn ? "active" : "inactive"}`}>
          {isOn ? "The light is ON" : "The light is OFF"}
        </p>

        <button
          className={`toggle-btn ${isOn ? "btn-on" : "btn-off"}`}
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>

        <p className="hint">
          Click the button to toggle the light.
        </p>
      </div>
    </div>
  );
}

export default App;
