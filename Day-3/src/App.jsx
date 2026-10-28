import React, { useState } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [skillText, setSkillText] = useState("");
  function addSkill() {
    if (skillText.trim() === "") return;

    setSkills([...skills, skillText]);
    setSkillText("");
  }

  function remove(skillToremove) {
    setSkills(skills.filter((skill) => skill !== skillToremove));
  }

  return (
    <div>
      <h1>My Skills</h1>
      <input
        value={skillText}
        onChange={(event) => setSkillText(event.target.value)}
      />
      <button onClick={addSkill}>Add</button>
      {skills.map((skill) => (
        <div key={skill}>
          <p>{skill}</p>
          <button onClick={() => remove(skill)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
