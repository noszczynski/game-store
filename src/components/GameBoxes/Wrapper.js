import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;

  &:hover {
    div {
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
