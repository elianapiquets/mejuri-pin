import { css } from 'styled-components';

export const color = {
  white: '#ffffff',
  gray1: '#efefef',
  gray2: '#afafaf',
  gray3: '#868686',
  gray4: '#737272',
  gray5: '#585757',
  gray6: '#3c3b3b',
  gray7: '#1d1d1d',
  primary: '#98c2f7',
  secondary: '#f3000a',
};

export const breakpointSizes = {
  xxs: {
    min: 0,
    max: 576,
  },
  xs: {
    min: 577,
    max: 767,
  },
  sm: {
    min: 768,
    max: 991,
  },
  md: {
    min: 992,
    max: 1199,
  },
  lg: {
    min: 1200,
    max: 200000,
  },
};

export const mediaDown = breakpointSizes =>
  Object.keys(breakpointSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpointSizes[label].max}px) {
        // @ts-ignore
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

export const mediaUp = breakpointSizes =>
  Object.keys(breakpointSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpointSizes[label].min}px) {
        // @ts-ignore
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

export const mediaOnly = breakpointSizes =>
  Object.keys(breakpointSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpointSizes[label]
          .min}px) and (max-width: ${breakpointSizes[label].max}px) {
        // @ts-ignore
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

const theme = {
  breakpoints: ['576px', '767px', '992px', '1200px'],
  mediaDown: mediaDown(breakpointSizes),
  mediaUp: mediaUp(breakpointSizes),
  mediaOnly: mediaOnly(breakpointSizes),
  color,
};

export default theme;
