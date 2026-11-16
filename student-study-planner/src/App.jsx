
import React, { useState } from "react";
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // Add a new task
  function addTask() {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  // Delete a task
  function deleteTask(taskToDelete) {
    setTasks(
      tasks.filter((task) => task.id !== taskToDelete)
    );
  }

  // Toggle task completion
  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="container">
      <h1>Student Study Planner</h1>

      {/* Add Task */}
      <div>
        <input
          type="text"
          placeholder="Enter your study task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display Tasks */}
      <h2>My Study Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet. Start planning!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {task.text}
              </span>

              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Mark Pending" : "Complete"}
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
