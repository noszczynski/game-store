import React, { useState } from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import styled from "styled-components";
import Search from "../Search/Search";

import { createGlobalStyle } from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
`;

const Title = styled.section`
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: capitalize;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.fonts.pageTitle};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.padding.lite} 0;
  margin: 88px 1rem 0 300px;
`;

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
    
    ${({ themeOption, theme }) => {
      return {
        color: theme.colors[themeOption].primaryFontColor,
      };
    }}
    }}
`;

const THEMES = {
  LIGHT: "lightTheme",
  DARK: "darkTheme",
};

const Layout = ({ title, searchTerm, searchTermSetter, children }) => {
  const [currentTheme, setCurrentTheme] = useState(THEMES.LIGHT);

  const handleSetTheme = () => {
    switch (currentTheme) {
      case THEMES.LIGHT:
        return THEMES.DARK;
      case THEMES.DARK:
        return THEMES.LIGHT;
      default:
        return THEMES.LIGHT;
    }
  };

  console.log(currentTheme);
  return (
    <>
      <GlobalStyle themeOption={currentTheme} />
      <Wrapper>
        <SideMenu />
        <Content>
          <Search value={searchTerm} setter={searchTermSetter} />
          <Title>{title}</Title>
          <button onClick={() => setCurrentTheme(handleSetTheme())}>
            change theme
          </button>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </Content>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchTermSetter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
