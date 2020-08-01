const SCROLLBAR_WIDTH = 15;

const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024 - SCROLLBAR_WIDTH,
  laptopL: 1440 - SCROLLBAR_WIDTH,
  laptopXL: 1600 - SCROLLBAR_WIDTH,
  desktop: 1920 - SCROLLBAR_WIDTH,
  desktop2k: 2560 - SCROLLBAR_WIDTH,
  desktop4k: 3840 - SCROLLBAR_WIDTH,
};

export const device = Object.keys(breakpoints).reduce((acc, curr) => {
  acc[curr] = `screen and (min-width: ${breakpoints[curr]}px)`;
  return acc;
}, {});
