export const UPDATE_GAME = "UPDATE_GAME";

export const RESET_DATA = "RESET_DATA";

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
    default:
      return {
        type: RESET_DATA,
      };
  }
};
