import React from "react";
import PropTypes from "prop-types";
import { Checkbox as Chx, FormControlLabel } from "@material-ui/core";
import styled from "styled-components";

const StyledCheckbox = styled(Chx)`
  color: ${({ theme }) => theme.colors.activeFontColor} !important;
`;

const Checkbox = ({ value, setValue, label }) => {
  return (
    <FormControlLabel
      value="end"
      control={
        <StyledCheckbox
          color="primary"
          value={value}
          onChange={({ target: { checked } }) => setValue(checked)}
        />
      }
      label={label}
      labelPlacement="end"
    />
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.string,
  setValue: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
};

export default Checkbox;
