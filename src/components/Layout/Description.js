import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 140%;
  text-align: justify;
  padding: 0;
  margin: 0;
`;

const Description = ({ children }) => {
  return (
    <div>
      <Paragraph>{children}</Paragraph>
    </div>
  );
};

export default Description;
