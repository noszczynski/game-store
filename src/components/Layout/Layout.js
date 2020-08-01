import React from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import styled from "styled-components";
import TopBar from "./TopBar";
import ThemeProviderWrapper from "../ThemeProviderWrapper";

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: ". content";
`;

const Title = styled.section`
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: ${({ theme }) => theme.sizes.fontWeight.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.pageTitle};
  transition: ${({ theme }) => theme.transitions.changeTheme};
  text-transform: capitalize;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ clearTopPadding }) => (clearTopPadding ? 0 : 88)}px 0
    ${({ theme }) => theme.sizes.padding.lite};
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  transition: ${({ theme }) => theme.transitions.changeTheme};
`;

const ContentWrapper = styled.div`
  padding: 0
    ${({ theme, removeSidePadding }) =>
      removeSidePadding ? "0" : theme.sizes.padding.standard};
`;

const Layout = ({
  title,
  data,
  setFilteredData,
  removeTopPadding,
  removeSidePadding,
  setTheme,
  children,
}) => {
  return (
    <Wrapper>
      <SideMenu />
      <Content clearTopPadding={removeTopPadding}>
        <TopBar items={data} setter={setFilteredData} setTheme={setTheme} />
        <ContentWrapper removeSidePadding>
          {title && <Title>{title}</Title>}
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  setFilteredData: PropTypes.func,
  setTheme: PropTypes.func,
  children: PropTypes.node,
  removeTopPadding: PropTypes.bool,
  removeSidePadding: PropTypes.bool,
};

Layout.defaultProps = {
  title: "",
  data: null,
  setFilteredData: undefined,
  removeTopPadding: false,
  removeSidePadding: false,
};

export default ThemeProviderWrapper(Layout);
