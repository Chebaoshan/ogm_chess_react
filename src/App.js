import "./App.css";
import React, { Component } from "react";
import Board from "./components/Board/Board";
import PlayerInfo from "./components/Playerinfo/PlayerInfo";
import History from "./components/History/History";

class App extends Component {
  state = {
    //棋盘上的棋子信息
    squares: new Array(9).fill(null),
    //步数
    stepCount: 0,
    //历史记录
    history: [],
  };

  getCurrentPlayer() {
    const { stepCount } = this.state;
    //根据步数，判断奇偶，确定棋手
    return stepCount % 2 === 0 ? "X" : "O";
  }

  handleClickSquare = (pos, info) => {
    if (info === null) {
      const { history } = this.state;
      const newHistory = [
        ...history,
        {
          stepCount: this.state.stepCount,
          player: this.getCurrentPlayer(),
          pos: pos,
        },
      ];

      this.setState({
        history: newHistory,
        stepCount: this.state.stepCount + 1,
        squares: this.calcSquare(newHistory, this.state.stepCount + 1),
      });
    }
  };

  calcSquare(history, stepCount) {
    const newSquare = new Array(9).fill(null);
    for (let i = 0; i < stepCount; i++) {
      let curHistory = history[i];
      newSquare[curHistory.pos] = curHistory.player;
    }
    return newSquare;
  }

  handleClickHistory(item) {
    console.log(item);
  }

  render() {
    const curPlayer = this.getCurrentPlayer();
    const { squares, history } = this.state;
    return (
      <div className="App">
        <div className="leftPanel">
          <Board squares={squares} def={this.handleClickSquare} />
        </div>
        <div className="rightPanel">
          <PlayerInfo curPlayer={curPlayer} />
          <History history={history} onClickHistory={this.handleClickHistory} />
        </div>
      </div>
    );
  }
}

export default App;
