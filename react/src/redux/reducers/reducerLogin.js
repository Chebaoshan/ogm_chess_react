import { USER_NAME } from "../actions/actions";

//生产者
export const reducerLogin = (previousState = initData, action) => {
  let nextState = JSON.parse(JSON.stringify(previousState));
  switch (action.type) {
    case USER_NAME:
      nextState.username = action.data.username;
      return nextState;
    default:
      return previousState;
  }
};
const initData = {
  username: "initUser",
};
