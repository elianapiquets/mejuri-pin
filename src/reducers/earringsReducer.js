import { LOAD_EARRINGS_SUCCESS } from "../constants";

const initialState = [];

const earringsReducer = (state = initialState, action) => {
  if (action.type === LOAD_EARRINGS_SUCCESS) {
    return [...state, ...action.earrings];
  }
  return state;
};

export default earringsReducer;
