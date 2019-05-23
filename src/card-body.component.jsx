import React from "react";

export default class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body-container">
        <div>{this.props.children}</div>
      </div>
    );
  }
}
