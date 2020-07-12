import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";

const Text = styled.input`
  background-color: ${colors.transparent};
  border: none;
  margin-left: ${sizes.margin.lite};
  padding: 0.5rem ${sizes.padding.lite};
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  border-radius: 0.25rem;
  color: ${colors.gray300};

  &:focus,
  &:active {
    outline-width: 0;
    background-color: ${colors.light};
  }
`;

const Input = (props) => {
  return <Text {...props} />;
};

export default Input;
