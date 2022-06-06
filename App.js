import { useState } from "react";
import "./App.css";
import PlayerScore from "./PlayerScore";
import data from "./Questions.js";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [idUsed, setIdUsed] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [players, setPlayers] = useState([0, 1, 2]);
  const [forceRender, setforceRender] = useState(true);

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

  function addPlayer() {
    const addedPlayers = players;
    addedPlayers.push(0);
    setPlayers(addedPlayers);
    setforceRender(!forceRender);
  }
  function deletePlayer() {
    const deletedPlayers = players;
    deletedPlayers.pop();
    setPlayers(deletedPlayers);
    setforceRender(!forceRender);
  }
  return (
    <div className="App">
      <h1 className="gameName">Never Have I Ever Game</h1>
      <h5>
        Questions used : {idUsed.length} | Questions in databbase :{" "}
        {data.questions.length - idUsed.length}
      </h5>
      <button className="btn" disabled={gameEnded} onClick={handleClick}>
        {idUsed.length === 0 ? "START THE GAME" : "NEXT QUESTION"}
      </button>
      <h2 className="Question">
        {idUsed.length === data.questions.length
          ? "Game Ended"
          : data.questions[questionId]}
      </h2>

      <div className="board">
        <h2 className="scoreTitle">
          Scoreboard{" "}
          <button
            className="playerBtn"
            disabled={gameEnded}
            onClick={addPlayer}
          >
            Add a player
          </button>
          <button
            className="playerBtn"
            disabled={gameEnded}
            onClick={deletePlayer}
          >
            Delete a player
          </button>
        </h2>

        {players.map(() => (
          <PlayerScore stopScore={gameEnded} />
        ))}
      </div>
    </div>
  );
}

export default App;
