import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
  cursor: text;

  ${({ isFocus }) => isFocus && "transform: translate(-1rem, -250%)"}
`;

const Input = styled.input`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.padding.lite} 0.5rem;
  font-size: 14px;
`;

const LoginInput = ({ label, name, value, ...props }) => {
  const [focus, setFocus] = useState(null);

  const handleFocus = (statement) => {
    setFocus(value ? true : statement);
  };

  return (
    <Wrapper>
      <Label htmlFor={name} isFocus={focus}>
        {label}
      </Label>
      <Input
        id={name}
        value={value}
        name={name}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        {...props}
      />
    </Wrapper>
  );
};

LoginInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LoginInput;
