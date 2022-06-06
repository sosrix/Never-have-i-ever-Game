import { useState } from "react";

function PlayerScore() {
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore((preValue) => ++preValue);
  }
  return (
    <div>
      <button onClick={addPoint}>
        <input placeholder="player's Name" /> | +I HAVE : {score}
      </button>
    </div>
  );
}

export default PlayerScore;
