import React, { useState } from 'react'
import "./App.css"

function App() {

  const[selected,setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const[score,setScore] = useState(0)
  const[submit,setSubmit] = useState(false)

  const questions = [
  {
    id: 1,
    question: "Which language is used to build React applications?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    id: 3,
    question: "Which method is used to render lists in React?",
    options: [".filter()", ".reduce()", ".map()", ".find()"],
    answer: ".map()"
  },
  {
    id: 4,
    question: "Conditional rendering in React is commonly done using:",
    options: ["Ternary operator (? :)", ".reduce()", "Logical AND (&&)", "Conditional statements"],
    answer: "Ternary operator (? :)"
  }
];

  const currentQuestion = questions[currentIndex];

  function nextQuestion()
  {
     if (selected === null) {
      return;
}
    if(currentIndex < questions.length - 1)
    {
      setCurrentIndex(currentIndex+1);
      setSelected(null);
    }
    

    if(selected === currentQuestion.answer)
    {
      setScore(previousScore => previousScore + 1);
    }
    if (currentIndex === questions.length - 1) {
  setSubmit(true);
}
   
  }


  return (
    <div className="App">
      <h1>My Quiz App</h1>
     
          {submit ? (
    <div>
  <h2>Quiz Completed!</h2>
  <p>Your Score: {score} / {questions.length}</p>
  <h3>Great Work!</h3>
</div>
  ) :
  <>
   {currentQuestion.question}
          <ul>
            {currentQuestion.options.map((option)=>
          <li key={option} onClick={(()=>setSelected(option))} className={option === selected ? "select":"not-select"}>{option}</li>
          
          )}
          
          </ul>
          <button onClick={nextQuestion}>{currentIndex < questions.length-1?"Next":"Submit"}</button>
          </>
  }
    </div>
  )
}

export default App