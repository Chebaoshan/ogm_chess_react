import React, { Component } from "react";
import "./style.css";

class History extends Component {
  getHistory(item, index) {
    return (
      <li key={index}>
        <label>
          第{item.stepCount}步：下的是{item.player}位置是{item.position}
        </label>
      </li>
    );
  }
  render() {
    return (
      <div className="history">
        {this.props.history.map((item, index) => this.getHistory(item, index))}
      </div>
    );
  }
}

export default History;
