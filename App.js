import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Never Have I Ever Game</h1>
      <button>Next Question</button>
      <div>
        <h2>Scoreboard</h2>
        <div>
          <button> Player 1 | +I HAVE : 0</button>
        </div>
        <h3>
          <button> Player 2 | +I HAVE : 0</button>
        </h3>{" "}
        <h3>
          <button> Player 3 | +I HAVE : 0</button>
        </h3>
      </div>
    </div>
  );
}

export default App;

