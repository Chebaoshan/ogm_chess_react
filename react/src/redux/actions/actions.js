export const UPDATE_GAME = "UPDATE_GAME";

export const RESET_DATA = "RESET_DATA";

export const USER_NAME = "USER_NAME";

export const getAction = (actionName = RESET_DATA, param1, param2) => {
  switch (actionName) {
    case UPDATE_GAME:
      return {
        type: UPDATE_GAME,
        data: {
          position: param1,
          info: param2,
        },
      };
    case USER_NAME:
      return {
        type: USER_NAME,
        data: {
          username: param1,
        },
      };
    default:
      return {
        type: RESET_DATA,
      };
  }
};
