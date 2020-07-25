import colors from "./colors";
import { rounded, shadows, transitions } from "./variables";
import { fonts } from "./fonts";
import sizes from "./sizes";
import { device } from "./breakpoints";

const rest = {
  fonts: fonts,
  sizes: sizes,
  rounded: rounded,
  breakpoints: device,
  transitions,
};

const lightTheme = {
  ...rest,
  colors: colors.lightTheme,
  shadows: shadows.lightTheme,
};

const darkTheme = {
  ...rest,
  colors: colors.darkTheme,
  shadows: shadows.darkTheme,
};

export { lightTheme, darkTheme };
