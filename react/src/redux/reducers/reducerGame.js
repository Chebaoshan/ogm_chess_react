import { RESET_DATA, UPDATE_GAME } from "../actions/actions";
import { winner } from "../../utils/winner";
//生产者
export const reducerGame = (previousState = initData, action) => {
  let nextState = JSON.parse(JSON.stringify(previousState));
  switch (action.type) {
    case UPDATE_GAME:
      if (action.data.info !== null) {
        return previousState;
      }
      const newHistory = [
        ...nextState.history,
        {
          stepCount: nextState.stepCount,
          player: nextState.stepCount % 2 === 0 ? "X" : "O",
          position: action.data.position,
        },
      ];
      return (nextState = {
        history: newHistory,
        stepCount: nextState.stepCount + 1,
        squares: calcSquare(newHistory, nextState.stepCount + 1),
        over: winner(newHistory),
      });
    case RESET_DATA:
      return initData;
    default:
      return previousState;
  }
};
const initData = {
  //棋盘上的棋子信息
  squares: new Array(9).fill(null),
  //步数
  stepCount: 0,
  //历史记录
  history: [],
  //胜负已出
  over: {
    result: false,
    winner: "",
  },
};
const calcSquare = (history, stepCount) => {
  let newSquare = new Array(9).fill(null);
  for (let i = 0; i < stepCount; i++) {
    let curHistory = history[i];
    newSquare[curHistory.position] = curHistory.player;
  }
  return newSquare;
};
