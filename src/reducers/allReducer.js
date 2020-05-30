import { LOAD_ALL_SUCCESS } from "../constants";

const initialState = [];

const allReducer = (state = initialState, action) => {
  if (action.type === LOAD_ALL_SUCCESS) {
    return [...state, ...action.all];
  }
  return state;
};

export default allReducer;
