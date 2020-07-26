import styled from "styled-components";

const ResetButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 0;
  color: ${({ theme }) => theme.colors.primaryFontColor};

  :hover {
    cursor: pointer;
  }
`;

export default ResetButton;
