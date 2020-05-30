import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import allReducer from "./allReducer";
import braceletsReducer from "./braceletsReducer";
import earringsReducer from "./earringsReducer";
import likeReducer from "./likeReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  all: allReducer,
  bracelets: braceletsReducer,
  earrings: earringsReducer,
  like: likeReducer,
  error: errorReducer,
});

export default rootReducer;
