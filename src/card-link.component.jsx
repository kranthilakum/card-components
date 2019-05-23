import React from "react";

export default class CardLink extends React.Component {
  render() {
    return (
      <div className="card-link">
        <a href="{this.props.link}">{this.props.text}</a>
      </div>
    );
  }
}
