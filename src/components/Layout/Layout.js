import React, { useState } from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import styled, { ThemeProvider } from "styled-components";
import Search from "../Search/Search";

import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../../utils/theme";

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 281px 1fr;
  grid-template-areas: ". content";
`;

const Title = styled.section`
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.pageTitle};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.padding.lite} 0;
  grid-area: content;
  position: relative;
  top: 88px;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
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

  return (
    <ThemeProvider
      theme={currentTheme === THEMES.LIGHT ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      <Wrapper>
        <SideMenu />
        <Content>
          <Search value={searchTerm} setter={searchTermSetter} />
          <ContentWrapper>
            <Title>{title}</Title>
            <button onClick={() => setCurrentTheme(handleSetTheme())}>
              change theme to {handleSetTheme()}
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
