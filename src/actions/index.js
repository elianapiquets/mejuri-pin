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

export const loadCategory = () => ({
    type: CATEGORY_LOAD,
});

export const setCategory = category => ({
    type: CATEGORY_LOAD_SUCCESS,
    category,
});

export const setCategoryError = error => ({
    type: CATEGORY_LOAD_FAIL,
    error,
});

export const loadBracelets = () => ({
    type: BRACELETS_LOAD,
});

export const setBracelets = bracelets => ({
    type: BRACELETS_LOAD_SUCCESS,
    bracelets,
});

export const setBraceletsError = error => ({
    type: BRACELETS_LOAD_FAIL,
    error,
});

export const loadEarrings = () => ({
    type: EARRINGS_LOAD,
});

export const setEarrings = earrings => ({
    type: EARRINGS_LOAD_SUCCESS,
    earrings,
});

export const setEarringsError = error => ({
    type: EARRINGS_LOAD_FAIL,
    error,
});
