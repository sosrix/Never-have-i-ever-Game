import { useState } from "react";
import "./App.css";
import PlayerScore from "./PlayerScore";
import data from "./Questions.js";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [idUsed, setIdUsed] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  function randomNumberGen() {
    return Math.floor(Math.random() * data.questions.length);
  }
  function handleClick() {
    const randomNumber = randomNumberGen();
    let oldUsed = idUsed;

    if (data.questions.length - idUsed.length === 0) {
      setGameEnded(true);
    } else if (!idUsed.includes(randomNumber)) {
      oldUsed.push(questionId);
      setQuestionId(() => randomNumber);
      setIdUsed(oldUsed);
    } else {
      handleClick();
    }
  }

  return (
    <div className="App">
      <h1>Never Have I Ever Game</h1>
      <h4>
        Questions used : {idUsed.length} | Questions in databbase :{" "}
        {data.questions.length - idUsed.length}
      </h4>
      <button id="btn" disabled={gameEnded} onClick={handleClick}>
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
