import { useState } from "react";

function PlayerScore(props) {
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore((preValue) => ++preValue);
  }
  return (
    <div>
      <button disabled={props.stopScore} id="btnScore" onClick={addPoint}>
        <input placeholder="player's Name" /> | +I HAVE : {score}
      </button>
    </div>
  );
}

export default PlayerScore;
