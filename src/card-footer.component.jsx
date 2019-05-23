import React from "react";

export default class CardFooter extends React.Component {
  render() {
    return (
      <div className="card-footer">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
