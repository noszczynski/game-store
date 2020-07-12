const sizes = {
  padding: {
    lite: "1rem",
    standard: "2rem",
    strong: "3rem",
  },
  margin: {
    lite: "1rem",
    standard: "2rem",
    strong: "4rem",
  },
  fonts: {
    menu: "1.2rem",
    pageTitle: "1.8rem",
  },
};

const SCROLLBAR_WIDTH = 15;

const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024 - SCROLLBAR_WIDTH,
  laptopL: 1440 - SCROLLBAR_WIDTH,
  desktop: 1920 - SCROLLBAR_WIDTH,
  desktop2k: 2560 - SCROLLBAR_WIDTH,
  desktop4k: 3840 - SCROLLBAR_WIDTH,
};

export const device = Object.keys(breakpoints).reduce((acc, curr) => {
  acc[curr] = `min-width: ${breakpoints[curr]}px`;
  return acc;
}, {});

export default sizes;
