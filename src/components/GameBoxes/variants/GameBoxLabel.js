import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import sizes from "../../../utils/sizes";
import colors from "../../../utils/colors";
import Link from "../../Link/Link";
import GameBox from "../GameBox";
import Cover from "../Cover";
import Wrapper from "../Wrapper";

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: ${sizes.padding.lite} 0 0;
  background-color: ${colors.gray100};
  color: ${colors.dark};
  transition: transform 0.3s ease;
  font-weight: 500;
`;

const GameBoxLabel = ({ game }) => {
  const { title, cover } = game;

  return (
    <Link href={"/"}>
      <Wrapper>
        <Cover src={cover} alt={"game-img"} />
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  );
};

GameBoxLabel.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameBox(GameBoxLabel);
