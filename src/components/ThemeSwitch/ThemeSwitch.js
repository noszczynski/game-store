import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InvertColors } from "@material-ui/icons";
import ResetButton from "../Reset/ResetButton";

const ThemeButton = styled(ResetButton)`
  transition: transform 0.3s ease-in-out;
  margin: 0 ${({ theme }) => theme.sizes.margin.lite};

  svg {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

const ThemeSwitch = ({ setTheme }) => {
  return (
    <div>
      <ThemeButton onClick={setTheme}>
        <InvertColors />
      </ThemeButton>
    </div>
  );
};

ThemeSwitch.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitch;
