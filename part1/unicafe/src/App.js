import { useState } from "react";

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

function Statistic(props) {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad || 0;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <div>
      <Header title={"give feedback"} />

      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <Header title={"statistics"} />

      <Statistic text={"good"} value={good} />
      <Statistic text={"neutral"} value={neutral} />
      <Statistic text={"bad"} value={bad} />
      <Statistic text={"all"} value={all} />
      <Statistic text={"average"} value={average} />
      <Statistic text={"positive"} value={`${positive} %`} />
    </div>
  );
}

export default App;
