import { combineReducers } from "redux";
import { reducerGame } from "./reducerGame";
import { reducerLogin } from "./reducerLogin";
const reducers = combineReducers({
  reducerGame,
  reducerLogin,
});

export default reducers;
