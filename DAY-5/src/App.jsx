import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState(null);
  return (
    <div>
      <h3>How are you feeling?</h3>
      <p>Choose an emoji that matches your mood.</p>

      <div className="emoij">
        <button
          className={select === "😊" ? "mood-option selected" : "mood-option"}
          onClick={() => setSelect("😊")}
        >
          <label htmlFor="">😊</label>Happy
        </button>

        <button
          className={select === "😢" ? "mood-option selected" : "mood-option"}
          onClick={() => setSelect("😢")}
        >
          <label htmlFor="">😢</label>Sad
        </button>

        <button
          className={select === "🤩" ? "mood-option selected" : "mood-option"}
          onClick={() => setSelect("🤩")}
        >
          <label htmlFor="">🤩</label>Excited
        </button>
        <button
          className={select === "😴" ? "mood-option selected" : "mood-option"}
          onClick={() => setSelect("😴")}
        >
          <label>😴</label>
          Tired
        </button>
      </div>
      <button className="reset" onClick={() => setSelect(null)}>
        Reset
      </button>

      {select !== null && <p>Your Mood: {select}</p>}

      {select === "😢" && <p>It's okay to have difficult days.</p>}
      {select === "😊" && <p>Keep smiling!</p>}
      {select === "🤩" && <p>Enjoy your excitement!</p>}
      {select === "😴" && <p>Take a little rest.</p>}
    </div>
  );
}

export default App;
