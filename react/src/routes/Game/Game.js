import "./style.css";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Board from "../../components/Board/Board";
import PlayerInfo from "../../components/Playerinfo/PlayerInfo";
import History from "../../components/History/History";
import {
  UPDATE_GAME,
  getAction,
  RESET_DATA,
} from "../../redux/actions/actions";
import { connect } from "react-redux";
class Game extends Component {
  componentDidUpdate() {
    if (this.props.over.result) {
      alert(this.props.over.winner);
      this.props.resetStore();
    }
  }
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
            <PlayerInfo
              curPlayer={this.props.currentPlayer}
              username={this.props.username}
            />
            <History history={this.props.history} />
          </div>
        </div>
        <div className="button">
          <button>
            <Link onClick={this.props.resetStore} to="/">
              Exit
            </Link>
          </button>
          <button>
            <Link onClick={this.props.resetStore} to="/again">
              Play again
            </Link>
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.reducerGame.squares,
    stepCount: state.reducerGame.stepCount,
    history: state.reducerGame.history,
    currentPlayer: state.reducerGame.stepCount % 2 === 0 ? "X" : "O",
    over: state.reducerGame.over,
    username: state.reducerLogin.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSquare: (param1, param2) =>
      dispatch(getAction(UPDATE_GAME, param1, param2)),
    resetStore: () => dispatch(getAction(RESET_DATA, null, null)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
