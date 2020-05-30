import { LOAD_BRACELETS_SUCCESS } from "../constants";

const initialState = [];

const braceletsReducer = (state = initialState, action) => {
  if (action.type === LOAD_BRACELETS_SUCCESS) {
    return [...state, ...action.bracelets];
  }
  return state;
};

export default braceletsReducer;
