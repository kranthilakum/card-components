import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h1>{this.props.title}</h1>
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}
