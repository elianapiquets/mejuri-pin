import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import categoryReducer from './categoryReducer';
import braceletsReducer from './braceletsReducer';
import earringsReducer from './earringsReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    category: categoryReducer,
    bracelets: braceletsReducer,
    earrings: earringsReducer,
    error: errorReducer,
});

export default rootReducer;
