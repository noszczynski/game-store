import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import styled from "styled-components";
import sizes from "../../utils/sizes";
import colors from "../../utils/colors";
import Input from "../Input/Input";

const Wrapper = styled.div`
  padding: ${sizes.padding.lite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  background-color: ${colors.searchBar.light};
`;

const Search = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input type={"text"} />
    </Wrapper>
  );
};

export default Search;
