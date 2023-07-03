import { useState } from "react";

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

function StatisticLine({ text, value }) {
  return (
    <p>
      {text} {value}
    </p>
  );
}

function Statistics(props) {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="all" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </div>
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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
