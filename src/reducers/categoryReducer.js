import { CATEGORY_LOAD_SUCCESS } from '../constants';

const initialState = [];

const categoryReducer = (state = initialState, action) => {
    if (action.type === CATEGORY_LOAD_SUCCESS) {
        return [...state, ...action.category];
    }
    return state;
};

export default categoryReducer;
