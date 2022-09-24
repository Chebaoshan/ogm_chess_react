import { connect } from "react-redux";
import Game from "../routes/Game/Game";
import { UPDATE_GAME, getActionGAME } from "../../redux/actions/actionGame";

const mapStateToProps = (state) => {
  return {
    squares: state.reducerGame.squares,
    stepCount: state.reducerGame.stepCount,
    history: state.reducerGame.history,
    currentPlayer: state.reducerGame.stepCount % 2 === 0 ? "X" : "O",
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSquare: (param1, param2) =>
      dispatch(getActionGAME(UPDATE_GAME, param1, param2)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
