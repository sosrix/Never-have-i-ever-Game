import { useState } from "react";
import "./App.css";
import PlayerScore from "./PlayerScore";
import data from "./Questions.js";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [idUsed, setIdUsed] = useState([]);

  function randomNumberGen() {
    return Math.floor(Math.random() * data.questions.length);
  }
  function handleClick() {
    const randomNumber = randomNumberGen();
    console.log(randomNumber);
    let oldUsed = idUsed;
    if (idUsed.includes(randomNumber)) {
      handleClick();
    } else {
      oldUsed.push(questionId);
      setQuestionId(() => randomNumber);
      setIdUsed(oldUsed);
    }
  }

  return (
    <div className="App">
      <h1>Never Have I Ever Game</h1>
      <button onClick={handleClick}>Next Question</button>
      <h3> {data.questions[questionId]}</h3>
      <div>
        <h2>Scoreboard</h2>
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
      </div>
    </div>
  );
}

export default App;
