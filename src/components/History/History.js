import React, { Component } from "react";
import "./style.css";

class History extends Component {
  getHistory(item, index) {
    return (
      <li key={index}>
        <button>
          第{item.stepCount}步：玩家 {item.player} 下的是 {item.position}
        </button>
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
