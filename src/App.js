import React, { useState } from "react";
import "./styles.css";

function App() {
  const [Count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1> Counter App</h1>
        <h2> {Count}</h2>
        <div className="box">
          <button
            className="btn"
            onClick={() => setCount(Count - 1)}
            disabled={Count === 0}
          >
            Decrease
          </button>
          <button className="btn" onClick={() => setCount(Count + 1)}>
            Increase
          </button>
          <button className="btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
