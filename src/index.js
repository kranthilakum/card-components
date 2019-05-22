import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h1>Card Title</h1>
        <h2>Card content here!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Card />, rootElement);
