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

const initialState = true;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL:
    case LOAD_BRACELETS:
    case LOAD_EARRINGS:
      return true;
    case LOAD_ALL_SUCCESS:
    case LOAD_BRACELETS_SUCCESS:
    case LOAD_EARRINGS_SUCCESS:
      return false;
    case LOAD_ALL_FAIL:
    case LOAD_BRACELETS_FAIL:
    case LOAD_EARRINGS_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
