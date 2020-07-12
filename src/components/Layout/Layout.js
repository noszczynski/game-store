import React from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import sizes from "../../utils/sizes";
import styled from "styled-components";
import Search from "../Search/Search";
import colors from "../../utils/colors";

const Wrapper = styled.section`
  height: 100vh;
`;

const Title = styled.section`
  margin: ${sizes.margin.standard} 0;
  color: ${colors.dark};
  text-transform: capitalize;
  font-weight: 700;
  font-size: ${sizes.fonts.pageTitle};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${sizes.padding.lite} 0;
  margin: 88px 0 0 300px;
`;

const Layout = ({ title, searchTerm, searchTermSetter, children }) => {
  return (
    <Wrapper>
      <SideMenu />
      <Content>
        <Search value={searchTerm} setter={searchTermSetter} />
        <Title>{title}</Title>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </Content>
    </Wrapper>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchTermSetter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
