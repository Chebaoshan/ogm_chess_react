import "./style.css";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Board from "../../components/Board/Board";
import PlayerInfo from "../../components/Playerinfo/PlayerInfo";
import History from "../../components/History/History";

class Game extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <div className="leftPanel">
            <Board
              squares={this.props.squares}
              def={this.props.handleClickSquare}
            />
          </div>
          <div className="rightPanel">
            <PlayerInfo curPlayer={this.props.currentPlayer} />
            <History history={this.props.history} />
          </div>
        </div>
        <div className="button">
          <button>
            <Link to="/">Exit</Link>
          </button>
          <button>
            <Link to="/again">Play again</Link>
          </button>
        </div>
      </Fragment>
    );
  }
}
export default Game;
