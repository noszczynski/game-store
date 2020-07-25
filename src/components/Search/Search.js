import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import styled from "styled-components";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: calc(250px + 1rem);
  z-index: 100;
  padding: ${({ theme }) => `1.5rem ${theme.sizes.padding.lite} 1.5rem 0`};
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const WrapperInner = styled.div`
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.searchBar};
`;

const SearchInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.primaryFontColor};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

const Icon = styled(SearchIcon)`
  font-size: 2rem !important;
  color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const Search = ({ value, setter }) => {
  return (
    <Wrapper>
      <WrapperInner>
        <Icon />
        <SearchInput
          type={"text"}
          placeholder={"search..."}
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
