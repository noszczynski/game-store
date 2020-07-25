import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "../Search/Search";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: calc(250px + 1rem);
  z-index: 100;
  padding: ${({ theme }) => `1.5rem ${theme.sizes.padding.lite} 1.5rem 0`};
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
`;

const TopBar = ({ items, searchFields, setter, setTheme }) => {
  return (
    <Wrapper>
      {setter !== undefined ? (
        <Search items={items} setter={setter} fields={searchFields} />
      ) : (
        <div />
      )}
      <RightWrapper>
        <ThemeSwitch setTheme={setTheme} />
        <ProfileMenu />
      </RightWrapper>
    </Wrapper>
  );
};

TopBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  searchFields: PropTypes.arrayOf(PropTypes.string),
  setter: PropTypes.func,
  setTheme: PropTypes.func,
};

TopBar.defaultProps = {
  items: [],
  searchFields: [],
  setter: undefined,
};

export default TopBar;
