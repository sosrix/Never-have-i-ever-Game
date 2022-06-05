import { RANDOM } from "mysql/lib/PoolSelector";
import { useState } from "react";
import "./App.css";
import data from "./Questions.js";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [idUsed, setIdUsed] = useState([]);

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * data.questions.length);
    let oldUsed = idUsed;
    if (idUsed.includes(randomNumber)) {
      console.log("idUsed");
    } else {
      oldUsed.push(questionId);
      setQuestionId(() => randomNumber);
      setIdUsed(oldUsed);
    }
    console.log(idUsed);
  }
  function addPoint() {
    setScore((preValue) => ++preValue);
  }
  return (
    <div className="App">
      <h1>Never Have I Ever Game</h1>
      <button onClick={handleClick}>Next Question</button>
      <h3> {data.questions[questionId]}</h3>
      <div>
        <h2>Scoreboard</h2>

        <button onClick={addPoint}>
          <input placeholder="player's Name" /> | +I HAVE : {score}
        </button>
      </div>
    </div>
  );
}

export default App;
