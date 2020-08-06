import styled from "styled-components"

const MarginWrapper = styled.div`
  margin: ${({ margin }) => (margin ? margin : "2rem 0 0")};
`;

export default MarginWrapper;
