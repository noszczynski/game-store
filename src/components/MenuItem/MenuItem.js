import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../Link/Link";

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.sizes.fonts.menu};
  margin-left: ${({ theme }) => theme.sizes.padding.lite};
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
`;

const MenuItem = ({ item: { label, link, icon } }) => {
  return (
    <Wrapper>
      <Link href={link}>
        <WrapperInner>
          <div>{icon}</div>
          <Label>{label}</Label>
        </WrapperInner>
      </Link>
    </Wrapper>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
