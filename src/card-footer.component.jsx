import React from "react";

export default class CardFooter extends React.Component {
  render() {
    return (
      <div className="font-bold text-sm text-gray-600 px-6 py-4">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
