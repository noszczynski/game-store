import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import styled, { ThemeProvider } from "styled-components";
import Search from "../Search/Search";

import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../../utils/theme";

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: ". content";
`;

const Title = styled.section`
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.pageTitle};
  transition: color 0.3s, background-color 0.3s;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 88px 0 ${({ theme }) => theme.sizes.padding.lite};
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  transition: color 0.3s, background-color 0.3s;
`;

const ContentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.sizes.padding.lite};
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
    transition: color 0.3s, background-color 0.3s;
    
    ${({ theme }) => `
        color: ${theme.colors.primaryFontColor};
        background-color: ${theme.colors.primaryBackgroundColor};
      `}
`;

const THEMES = {
  LIGHT: "lightTheme",
  DARK: "darkTheme",
};

const Layout = ({ title, searchTerm, searchTermSetter, children }) => {
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
    console.log(theme);
    localStorage.setItem("theme", theme ? theme : THEMES.LIGHT);
    setCurrentTheme(theme ? theme : THEMES.LIGHT);
  }, []);

  return (
    <ThemeProvider
      theme={
        currentTheme === THEMES.LIGHT || !currentTheme ? lightTheme : darkTheme
      }
    >
      <GlobalStyle />
      <Wrapper>
        <SideMenu />
        <Content>
          <Search value={searchTerm} setter={searchTermSetter} />
          <ContentWrapper>
            <Title>{title}</Title>
            <button onClick={() => setCurrentTheme(handleSetTheme())}>
              current theme is {currentTheme}
            </button>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
          </ContentWrapper>
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchTermSetter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
