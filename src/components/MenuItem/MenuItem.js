import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import sizes from "../../utils/sizes";
import Link from "../Link/Link";

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem ${sizes.padding.lite};
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Label = styled.div`
  font-size: ${sizes.fonts.menu};
  margin-left: ${sizes.padding.lite};
  font-weight: 500;
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
