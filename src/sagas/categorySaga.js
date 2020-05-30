import { put, call, takeEvery } from 'redux-saga/effects';
import { setCategory, setCategoryError } from '../actions';
import { CATEGORY_LOAD } from '../constants';
import { fetchCategory } from '../api';

export function* handleCategoryLoad() {
    try {
        const category = yield call(fetchCategory);
        yield put(setCategory(category));
    } catch (error) {
        yield put(setCategoryError(error.toString()));
    }
}

export default function* watchCategoryLoad() {
    yield takeEvery(CATEGORY_LOAD, handleCategoryLoad);
}
