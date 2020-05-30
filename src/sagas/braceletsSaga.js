import { put, call, takeEvery } from "redux-saga/effects";
import { setBracelets, setBraceletsError } from "../actions";
import { LOAD_BRACELETS } from "../constants";
import { fetchBracelets } from "../api";

export function* handleBraceletsLoad() {
  try {
    const bracelets = yield call(fetchBracelets);
    yield put(setBracelets(bracelets));
  } catch (error) {
    yield put(setBraceletsError(error.toString()));
  }
}

export default function* watchBraceletsLoad() {
  yield takeEvery(LOAD_BRACELETS, handleBraceletsLoad);
}
