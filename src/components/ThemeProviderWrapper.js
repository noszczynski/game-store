import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${({ theme }) => theme.transitions.changeTheme};
    
    ${({ theme }) => `
        color: ${theme.colors.primaryFontColor};
        background-color: ${theme.colors.primaryBackgroundColor};
      `}
    }
    
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    p, span, button {
      font-size: 14px;
    }
    
    button {
      font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
    }
`;

const THEMES = {
  LIGHT: "lightTheme",
  DARK: "darkTheme",
};

const ThemeProviderWrapper = (Component) => {
  return function WrappedComponent(props) {
    const [currentTheme, setCurrentTheme] = useState(
      localStorage.getItem("theme")
    );

    const handleSetTheme = () => {
      switch (currentTheme) {
        case THEMES.LIGHT: {
          localStorage.setItem("theme", THEMES.DARK);
          return THEMES.DARK;
        }
        case THEMES.DARK: {
          localStorage.setItem("theme", THEMES.LIGHT);
          return THEMES.LIGHT;
        }
        default:
          return THEMES.LIGHT;
      }
    };

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      localStorage.setItem("theme", theme ? theme : THEMES.LIGHT);
      setCurrentTheme(theme ? theme : THEMES.LIGHT);
    }, []);

    return (
      <ThemeProvider
        theme={
          currentTheme === THEMES.LIGHT || !currentTheme
            ? lightTheme
            : darkTheme
        }
      >
        <GlobalStyle />
        {
          <Component
            setTheme={() => setCurrentTheme(handleSetTheme())}
            {...props}
          />
        }
      </ThemeProvider>
    );
  };
};

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node,
};

export default ThemeProviderWrapper;
