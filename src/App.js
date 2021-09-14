import "./App.css";
import data from "./data";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="App">
      <h3>Generate Some Names</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="amount"> Amount : </label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      {text.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </section>
  );
}

export default App;
