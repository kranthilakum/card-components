import React from "react";

export default class CardTitle extends React.Component {
  render() {
    return (
      <div className="font-bold text-xl mb-2">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
