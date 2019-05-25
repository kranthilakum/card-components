import React from "react";

export default class CardImage extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <img className="w-full" src={this.props.url} alt={this.props.name} />
        <p className="text-sm text-gray-600 text-center">
          {this.props.caption}
        </p>
      </div>
    );
  }
}
