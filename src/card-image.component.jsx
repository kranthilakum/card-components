import React from "react";

export default class CardImage extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <img
          className="card-image"
          src={this.props.url}
          alt={this.props.name}
        />
        <h4>{this.props.caption}</h4>
      </div>
    );
  }
}
