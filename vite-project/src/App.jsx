import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCounts] = useState(0);
  const [count2, setCounts2] = useState(0);
  const [active, setActive] = useState(true);
  const [counters, setCounters] = useState([{ id: 1, count: 0 }]);
  const addCounter = () => {
    const newId = counters.length + 1;
    setCounters([...counters, { id: newId, count: 0 }]);
  };
  const increment = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };
  const decrement = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };
  const reset = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: 0 } : counter
      )
    );
  };

  return (
    <>
      <h2> {count}:metr </h2>
      <button onClick={() => setCounts((item) => item + count2)}>Yurish</button>
      <h3> Qadam kattaligi:{count2}metr</h3>
      <button onClick={() => setCounts2((item) => item + 1)}>
        qadam kattaligi
      </button>
      <div className="login-section">
        <h2 className="login">{active ? "Welcome" : "Please log in"}</h2>
        <button onClick={() => setActive(!active)}>Login</button>
      </div>
      <div className="counter-container">
        {counters.map((counter) => (
          <div key={counter.id} className="counter">
            <h2>Counter {counter.id}</h2>
            <div className="counter-controls">
              <button className="btn" onClick={() => decrement(counter.id)}>
                -
              </button>
              <span className="count">{counter.count}</span>
              <button className="btn" onClick={() => increment(counter.id)}>
                +
              </button>
            </div>
            <button className="reset-btn" onClick={() => reset(counter.id)}>
              Reset
            </button>
          </div>
        ))}
        <button className="add-btn" onClick={addCounter}>
          Add Counter
        </button>
      </div>
    </>
  );
}

export default App;
