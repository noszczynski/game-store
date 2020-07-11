import React from "react";
import styled from "styled-components";
import sizes from "../../utils/sizes";
import colors from "../../utils/colors";
import Link from "../Link/Link";

const LogoContainer = styled.div`
  padding: ${sizes.padding.lite};
  text-transform: uppercase;
  color: ${colors.dark};
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link href={"/"}>
        <span>GAMES STORE</span>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
