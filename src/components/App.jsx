import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);

  function handleMouseClick() {
    setHeadingText("Submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
