import { put, call, takeEvery } from "redux-saga/effects";
import { setAll, setAllError } from "../actions";
import { LOAD_ALL } from "../constants";
import { fetchAll } from "../api";

export function* handleAllLoad() {
  try {
    const all = yield call(fetchAll);
    yield put(setAll(all));
  } catch (error) {
    yield put(setAllError(error.toString()));
  }
}

export default function* watchAllLoad() {
  yield takeEvery(LOAD_ALL, handleAllLoad);
}
