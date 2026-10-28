import React from "react";
import { useState } from "react";
import "./App.css";
import POST from "./assets/POST.png";

function App() {
  const [likes, setLikes] = useState(0);

  function increase() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  function reset() {
    setLikes(0);
  }

  return (
    <div className="App">
      <div className="card">
        <img src={POST} alt="post" className="post-image" />
        <p className="like-count">
          {likes}
          <span aria-label="likes">🤍</span>
        </p>
        {likes > 0 ? (
          <p>Thanks for liking the post! ❤️</p>
        ) : (
          <p>Be the first to like this post!</p>
        )}

        <div className="actions">
          <button type="button" className="primary-btn" onClick={increase}>
            Like
          </button>
          <button type="button" className="secondary-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
