import styled from "styled-components";

const ResetLink = styled.a`
  color: ${({ theme, color }) =>
    color ? color : theme.colors.primaryFontColor};
  text-decoration: none;

  :hover {
    color: ${({ theme, activeColor }) =>
      activeColor ? activeColor : theme.colors.activeFontColor};
  }
`;

export default ResetLink;
