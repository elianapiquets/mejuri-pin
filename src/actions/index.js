import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_BRACELETS,
  LOAD_BRACELETS_SUCCESS,
  LOAD_BRACELETS_FAIL,
  LOAD_EARRINGS,
  LOAD_EARRINGS_SUCCESS,
  LOAD_EARRINGS_FAIL,
  SAVE_LIKE,
} from "../constants";

export const loadAll = () => ({
  type: LOAD_ALL,
});

export const setAll = (all) => ({
  type: LOAD_ALL_SUCCESS,
  all,
});

export const setAllError = (error) => ({
  type: LOAD_ALL_FAIL,
  error,
});

export const loadBracelets = () => ({
  type: LOAD_BRACELETS,
});

export const setBracelets = (bracelets) => ({
  type: LOAD_BRACELETS_SUCCESS,
  bracelets,
});

export const setBraceletsError = (error) => ({
  type: LOAD_BRACELETS_FAIL,
  error,
});

export const loadEarrings = () => ({
  type: LOAD_EARRINGS,
});

export const setEarrings = (earrings) => ({
  type: LOAD_EARRINGS_SUCCESS,
  earrings,
});

export const setEarringsError = (error) => ({
  type: LOAD_EARRINGS_FAIL,
  error,
});

export const saveLike = (src, title, alt, id) => ({
  type: SAVE_LIKE,
  src,
  title,
  alt,
  id,
});
