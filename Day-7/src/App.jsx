import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("B.TECH CSE");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  function handlesubmit(ev) {
    ev.preventDefault();
    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }
    setStudent({
      name: name.trim(),
      course: course,
    });
    setName("");
    setError("");
  }
  return (
    <div className="card">
      <h2>Regestration form</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) {
              setError("");
            }
          }}
          placeholder="Enter name"
        />
        {error && <p>{error}</p>}
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option value="B.TECH CSE">B.TECH CSE</option>
          <option value="B.TECH EEE">B.TECH EEE</option>
          <option value="B.TECH ECE">B.TECH ECE</option>
          <option value="B.TECH MECH">B.TECH MECH</option>
        </select>
        <button>submit</button>
      </form>
      {student && (
        <div>
          <h2>Registration Details</h2>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
