function Header(props) {
  console.log("Header component props", props);
  return <h1>{props.course.name}</h1>;
}

function Part(props) {
  console.log("Part component props", props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}

function Content(props) {
  console.log("Content component props", props);
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
}

function Total(props) {
  console.log("Total component props", props);
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
