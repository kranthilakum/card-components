import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div
        className="max-w-sm rounded overflow-hidden 
          border border-gray-400 shadow-lg"
      >
        {this.props.children}
      </div>
    );
  }
}
