import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_BRACELETS,
  LOAD_BRACELETS_SUCCESS,
  LOAD_BRACELETS_FAIL,
  LOAD_EARRINGS,
  LOAD_EARRINGS_SUCCESS,
  LOAD_EARRINGS_FAIL,
} from "../constants";

const initialState = null;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_FAIL:
    case LOAD_BRACELETS_FAIL:
    case LOAD_EARRINGS_FAIL:
      return action.error;
    case LOAD_ALL:
    case LOAD_ALL_SUCCESS:
    case LOAD_BRACELETS:
    case LOAD_BRACELETS_SUCCESS:
    case LOAD_EARRINGS:
    case LOAD_EARRINGS_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
