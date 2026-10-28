import React, { useState } from "react";
import "./App.css";


function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");
  function addSkill() {
    if (text.trim() === "") return;
    // const newTask={
    //   id:Date.now(),
    //   text:text,
    //   completed: fasle
    // }

    setTask([...tasks, text]);
    setText("");
  }

  function remove(tasktoremove) {
    setTask(tasks.filter((task) => task !== tasktoremove));
  }


  return (
    <>
      <div className="todo-app">
        <div className="todo-card">
          <h1 className="todo-title">My TODO LIST 📝</h1>

          <div className="todo-input-row">
            <input
              className="todo-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task"
            />
            <button className="add-btn" onClick={addSkill}>
              Add
            </button>
          </div>

          <div className="todo-list">
            {tasks.map((task) => (
              <div key={task} className="todo-item">
               
                <p className="todo-text">{task}</p>
                <button className="todo-complete" >✔</button>
                <button
                  className="todo-delete-btn"
                  onClick={() => remove(task)}
                  aria-label="Remove task"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
