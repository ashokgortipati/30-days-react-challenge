import React from 'react'
import { useState } from 'react';
import "./App.css"

function App() {

  const [liked, setLiked] = useState(false);

  function add()
  {
    setLiked(!liked)
  }
  return (
    <div className="App">
<h1>My React Post</h1>
<p>Lorem ipsum dolor sit amet.</p>
<button onClick={add}>

{liked ? "❤️ Unlike" : "🤍 Like"}
</button>
<p>{liked ? 1:0}</p>
    </div>
  )
}

export default App