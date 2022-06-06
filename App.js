import { useState } from "react";
import "./App.css";
import PlayerScore from "./PlayerScore";
import data from "./Questions.js";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [idUsed, setIdUsed] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  const button = document.getElementById("btn");

  function randomNumberGen() {
    return Math.floor(Math.random() * data.questions.length);
  }
  function handleClick() {
    const randomNumber = randomNumberGen();
    let oldUsed = idUsed;
    if (idUsed.length >= data.questions.length) {
      stopGame();
    } else if (idUsed.includes(randomNumber)) {
      handleClick();
    } else {
      oldUsed.push(questionId);
      setQuestionId(() => randomNumber);
      setIdUsed(oldUsed);
    }
  }

  function stopGame() {
    setGameEnded(true);
    button.disabled = true;
  }

  return (
    <div className="App">
      <h1>Never Have I Ever Game</h1>
      <button id="btn" onClick={handleClick}>
        Next Question
      </button>
      <h3>
        {idUsed.length === data.questions.length
          ? "Game Ended"
          : data.questions[questionId]}
      </h3>
      <div>
        <h2>Scoreboard</h2>
        <PlayerScore stopScore={gameEnded} />
        <PlayerScore stopScore={gameEnded} />
        <PlayerScore stopScore={gameEnded} />
        <PlayerScore stopScore={gameEnded} />
      </div>
    </div>
  );
}

export default App;
