import React from "react";

export default class CardTitle extends React.Component {
  render() {
    return (
      <div className="card-title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
