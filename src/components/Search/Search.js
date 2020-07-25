import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import styled from "styled-components";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import { filterArrayByFields } from "../../utils/utils";

const Wrapper = styled.div`
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

const Search = ({ items, setter, fields }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setter(
      searchTerm.length ? filterArrayByFields(searchTerm, items, fields) : items
    );
    // shouldn't be fields
  }, [items, searchTerm, setter]); //eslint-disable-line

  return (
    <Wrapper>
      <Icon />
      <SearchInput
        type={"text"}
        placeholder={"search..."}
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
    </Wrapper>
  );
};

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.string),
  setter: PropTypes.func.isRequired,
};

Search.defaultProps = {
  items: [],
  fields: [],
};

export default Search;
