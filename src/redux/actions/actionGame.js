export const UPDATE_GAME = "UPDATE_GAME";

export const getActionGame = (UPDATE_GAME, param1, param2) => {
  return {
    type: UPDATE_GAME,
    data: {
      position: param1,
      info: param2,
    },
  };
};
