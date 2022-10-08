import React, { Component } from "react";
import "./style.css";
class Square extends Component {
  getSquareTitle() {
    return this.props.info ? this.props.info : "";
  }
  handleClick = () => {
    const { position, info } = this.props;
    if (this.props.method) {
      this.props.method(position, info);
    }
  };
  render() {
    return (
      <div className="square" onClick={this.handleClick}>
        {this.getSquareTitle()}
      </div>
    );
  }
}
export default Square;
