import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";

const Wrapper = styled.a`
  text-decoration: none;
  color: ${colors.dark};

  &:hover {
    text-decoration: none;
    color: ${colors.dark};
  }
`;

const Link = ({ href, children }) => {
  return <Wrapper href={href}>{children}</Wrapper>;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
