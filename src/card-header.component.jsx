import React from "react";

export default class CardHeader extends React.Component {
  render() {
    return (
      <div className="font-bold text-xl px-6 py-4">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
