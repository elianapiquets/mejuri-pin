import { all } from 'redux-saga/effects';

import categorySaga from './categorySaga';
import braceletsSaga from './braceletsSaga';
import earringsSaga from './earringsSaga';

export default function* rootSaga() {
    yield all([categorySaga(), braceletsSaga(), earringsSaga()]);
}
