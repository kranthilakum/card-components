import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.component";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Card title="Card Title" content="Card content here!" />,
  rootElement
);
