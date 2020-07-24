import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";

const LogoContainer = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.lite} 0;
  text-transform: uppercase;

  p {
    color: ${({ theme }) => theme.colors.primaryFontColor};
    padding: 0;
    margin: 0;
  }

  a {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.activeFontColor};
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link href={"/"}>
        <p>
          GAMES <span>STORE</span>
        </p>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
