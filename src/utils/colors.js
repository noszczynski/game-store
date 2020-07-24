const rest = {
  light: "#fff",
  gray100: "#fdfdfd", // background-light-theme
  gray300: "#90929A",
  gray700: "#171818",
  gray900: "#0C0D0D", // background-dark-theme
  dark: "#000000",
  violet: "#a77de0",
  red: "#D30040",
  transparentDark: "rgba(0,0,0,0.05)",
  transparent: "rgba(0,0,0,0)",
  fonts: {
    gray: {
      light: "#9f9ea3",
      dark: "",
    },
    black: {
      light: "#080808",
      dark: "#ffffff",
    },
  },
};

const colors = {
  lightTheme: {
    ...rest,
    primaryFontColor: "#1a1a1a",
    secondaryFontColor: "#3a3a3a",
    tertiaryFontColor: "#fdfdfd",
    primaryBackgroundColor: "#fdfdfd",
    secondaryBackgroundColor: "#f4f4f4",
    searchBar: "#f5f5f5",
    activeFontColor: rest.violet,
  },
  darkTheme: {
    ...rest,
    primaryFontColor: "#fff",
    secondaryFontColor: "#a77de0",
    tertiaryFontColor: "#0C0D0D",
    primaryBackgroundColor: "#000",
    secondaryBackgroundColor: "#0C0D0D",
    searchBar: "#000",
    activeFontColor: rest.red,
  },
};

export default colors;
