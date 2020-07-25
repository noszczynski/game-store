import colors from "./colors";

const shadows = {
  lightTheme: {
    first: `0 20px 50px ${colors.transparentDark}`,
  },
  darkTheme: {
    first: `0 20px 50px ${colors.transparentDark}`,
  },
};

const rounded = {
  first: `20px`,
  second: `50%`,
};

const transitions = {
  changeTheme: "color 0.3s, background-color 0.3s",
};

export { shadows, rounded, transitions };
