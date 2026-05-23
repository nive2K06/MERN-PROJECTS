import React from "react";
import bg from "./images/theme.jpg";

function App() {
  const message = "hello,JSX works!";
  const paragraph = "JSX (JavaScript XML) is a syntax extension for JavaScript commonly used in React to describe what the user interface should look like. It allows developers to write HTML-like code directly within JavaScript, making UI components more readable and easier to maintain. JSX is not understood by browsers directly; instead, it is transpiled (usually by tools like Babel) into standard JavaScript function calls, such as React.createElement(). This approach enables developers to combine markup and logic in a single file, improving component cohesion. JSX also supports embedding JavaScript expressions inside curly braces {},making it dynamic and flexible for rendering data-driven content.";
  const name = "THIVIJAN";
  // embedding expressions in jsx
  const PI = 3.14159;
  const description = `The value of PI approximately ${PI}`;
  // Using JSX to create elements
  const theme = <img src={bg} alt="Theme for web" />
  //Passing children to JSX element
  const Welcome = (props) => {
    return <div>{props.children}</div>;
  }

  return (

    <Welcome>

      <h1>{message}</h1>
      <ul>
        <li><a href="#">home</a></li>
      </ul>
      <p>{paragraph}</p>
      <p>{description}</p>
      <h3>Author,{name}</h3>
      {theme}


    </Welcome>
  );
}

export default App;
