import styled from "styled-components";
import ResetButton from "../Reset/ResetButton";

const LinkButton = styled(ResetButton)`
  color: ${({ theme }) => theme.colors.activeFontColor};
`;

export default LinkButton;
