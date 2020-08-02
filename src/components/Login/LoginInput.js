import styled from "styled-components";

const LoginInput = styled.input`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.padding.lite} 0.5rem;
`;

export default LoginInput;
