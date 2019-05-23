import React from "react";

export default class CardHeader extends React.Component {
  render() {
    return (
      <div className="card-header">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
