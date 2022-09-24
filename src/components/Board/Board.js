import React, { Component } from "react";
import Square from "../Square/Square";
import "./style.css";
class Board extends Component {
  makeSquare(position) {
    const { squares } = this.props;
    return (
      <Square
        position={position}
        info={squares[position]}
        method={this.props.def}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <div className="row">
          {this.makeSquare(0)}
          {this.makeSquare(1)}
          {this.makeSquare(2)}
        </div>
        <div className="row">
          {this.makeSquare(3)}
          {this.makeSquare(4)}
          {this.makeSquare(5)}
        </div>
        <div className="row">
          {this.makeSquare(6)}
          {this.makeSquare(7)}
          {this.makeSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
