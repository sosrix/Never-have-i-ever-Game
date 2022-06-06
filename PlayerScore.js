import { useState } from "react";

function PlayerScore(props) {
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore((preValue) => ++preValue);
  }
  return (
    <div className="players">
      <h3 className="score">{score}</h3>
      <input className="input" placeholder="PLAYER'S NAME" />
      <button disabled={props.stopScore} className="btn" onClick={addPoint}>
        I HAVE
      </button>
    </div>
  );
}

export default PlayerScore;
