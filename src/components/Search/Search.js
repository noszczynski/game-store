import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import styled from "styled-components";
import sizes from "../../utils/sizes";
import colors from "../../utils/colors";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 281px;
  z-index: 100;
  width: 100%;
  padding: ${sizes.padding.standard} ${sizes.padding.lite};
  background-color: ${colors.gray100};
`;

const WrapperInner = styled.div`
  padding: 0.5rem ${sizes.padding.lite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  background-color: ${colors.searchBar.light};
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
