import React from "react";
import ReactDOM from "react-dom";
import TitleText from "./titleText.jsx";
import Logo from "./logo.jsx";

const Title = () => {
  return (
    <div>
      <TitleText />
      <Logo />
    </div>
  );
};

ReactDOM.render(<Title />, document.getElementById("title"));
