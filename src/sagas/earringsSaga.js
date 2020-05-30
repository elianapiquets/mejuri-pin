import { put, call, takeEvery } from 'redux-saga/effects';
import { setEarrings, setEarringsError } from '../actions';
import { EARRINGS_LOAD } from '../constants';
import { fetchEarrings } from '../api';

export function* handleEarringsLoad() {
    try {
        const earrings = yield call(fetchEarrings);
        yield put(setEarrings(earrings));
    } catch (error) {
        yield put(setEarringsError(error.toString()));
    }
}

export default function* watchEarringsLoad() {
    yield takeEvery(EARRINGS_LOAD, handleEarringsLoad);
}
