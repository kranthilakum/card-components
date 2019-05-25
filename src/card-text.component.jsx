import React from "react";

export default class CardText extends React.Component {
  render() {
    return (
      <div className="text-gray-900 text-base">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
