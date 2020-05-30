import { all } from "redux-saga/effects";

import allSaga from "./allSaga";
import braceletsSaga from "./braceletsSaga";
import earringsSaga from "./earringsSaga";

export default function* rootSaga() {
  yield all([allSaga(), braceletsSaga(), earringsSaga()]);
}
