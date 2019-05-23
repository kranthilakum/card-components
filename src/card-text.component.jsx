import React from "react";

export default class CardText extends React.Component {
  render() {
    return (
      <div className="card-text">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
