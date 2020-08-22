import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.sizes.margin.lite} 0;

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;

const TitlePicture = ({ source }) => {
  return (
    <Wrapper>
      <img src={source} alt={"game title"} />
    </Wrapper>
  );
};

export default TitlePicture;
