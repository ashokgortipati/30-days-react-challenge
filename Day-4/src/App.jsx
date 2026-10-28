import React, { useState } from "react";
import './App.css'
function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("B.TECH CSE");
  const [student, setStudent] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    if(name.trim()=="")
    {
      alert("Enter the name ")
      return
    } 
    setStudent({
      name: name,
      course: course,
    });
  }
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="B.TECH CSE">B.TECH CSE</option>
          <option value="B.TECH ECE">B.TECH ECE</option>
          <option value="B.TECH EEE">B.TECH EEE</option>
        </select>

        <button type="submit">Register</button>
       
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
