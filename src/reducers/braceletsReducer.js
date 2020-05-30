import { BRACELETS_LOAD_SUCCESS } from '../constants';

const initialState = [];

const braceletsReducer = (state = initialState, action) => {
    if (action.type === BRACELETS_LOAD_SUCCESS) {
        return [...state, ...action.bracelets];
    }
    return state;
};

export default braceletsReducer;
