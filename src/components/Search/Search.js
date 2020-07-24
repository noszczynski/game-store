import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import styled from "styled-components";
import colors from "../../utils/colors";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 281px;
  z-index: 100;
  width: 100%;
  padding: ${({ theme }) => `1.5rem ${theme.sizes.padding.lite} 1.5rem 0`};
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
`;

const WrapperInner = styled.div`
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.searchBar};
`;

const Icon = styled(SearchIcon)`
  font-size: 2rem !important;
  color: ${colors.gray300};
`;

const Search = ({ value, setter }) => {
  return (
    <Wrapper>
      <WrapperInner>
        <Icon />
        <Input
          type={"text"}
          placeholder={"Search for games"}
          value={value}
          onChange={({ target: { value } }) => setter(value)}
        />
      </WrapperInner>
    </Wrapper>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};

export default Search;
