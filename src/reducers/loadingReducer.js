import {
    CATEGORY_LOAD,
    CATEGORY_LOAD_SUCCESS,
    CATEGORY_LOAD_FAIL,
    BRACELETS_LOAD,
    BRACELETS_LOAD_SUCCESS,
    BRACELETS_LOAD_FAIL,
    EARRINGS_LOAD,
    EARRINGS_LOAD_SUCCESS,
    EARRINGS_LOAD_FAIL,
} from '../constants';

const initialState = true;

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_LOAD:
        case BRACELETS_LOAD:
        case EARRINGS_LOAD:
            return true;
        case CATEGORY_LOAD_SUCCESS:
        case BRACELETS_LOAD_SUCCESS:
        case EARRINGS_LOAD_SUCCESS:
            return false;
        case CATEGORY_LOAD_FAIL:
        case BRACELETS_LOAD_FAIL:
        case EARRINGS_LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
