import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.input`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  margin-left: ${({ theme }) => theme.sizes.margin.lite};
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
  width: 100%;
  font-size: 1rem; // TODO
  font-weight: 400; // TODO
  font-family: "Roboto", sans-serif; // TODO
  border-radius: 0.25rem; // TODO
  color: ${({ theme }) => theme.colors.primaryFontColor};

  :focus,
  :active {
    outline-width: 0;
    background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  }
`;

const Label = styled.label`
  //
`;

const Input = ({ label, name, ...props }) => {
  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Text name={name} {...props} />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
