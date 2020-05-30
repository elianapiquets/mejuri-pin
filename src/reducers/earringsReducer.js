import { EARRINGS_LOAD_SUCCESS } from '../constants';

const initialState = [];

const earringsReducer = (state = initialState, action) => {
    if (action.type === EARRINGS_LOAD_SUCCESS) {
        return [...state, ...action.earrings];
    }
    return state;
};

export default earringsReducer;
