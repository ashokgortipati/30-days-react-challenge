import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>
  {
    document.title =`count:${count}`
  },[count])


  let msg;
  if(count < 0)
  {msg = "Negative Number"}
  else if(count > 0)
  {
    msg = "Positive Number"
  }
  else{
    msg = "Zero"
  }

  return (
    <div>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <p>{msg}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;