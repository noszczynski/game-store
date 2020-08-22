import styled from "styled-components";
import ResetButton from "./Reset/ResetButton";

const Button = styled(ResetButton)`
  background-color: ${({ theme, active }) =>
    active
      ? theme.colors.activeFontColor
      : theme.colors.secondaryBackgroundColor};
  padding: ${({ theme }) => theme.sizes.padding.lite}
    ${({ theme }) => theme.sizes.padding.standard};
  color: ${({ theme, active }) =>
    active ? theme.colors.light : theme.colors.primaryFontColor};
  margin: 2px 0;
`;

export default Button;
