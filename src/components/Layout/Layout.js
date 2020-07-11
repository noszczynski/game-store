import React from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import sizes from "../../utils/sizes";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1rem;
  max-width: 1000px;
  padding: ${sizes.padding.lite};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${sizes.padding.lite};
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <SideMenu />
      <Content>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </Content>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
