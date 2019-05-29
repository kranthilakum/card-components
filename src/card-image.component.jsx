import React from "react";

export default class CardImage extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap">
        <img
          className="w-full ml-auto mr-auto"
          src={this.props.url}
          alt={this.props.name}
        />
        <p className="text-sm text-gray-600 text-center ml-auto mr-auto">
          {this.props.caption}
        </p>
      </div>
    );
  }
}
