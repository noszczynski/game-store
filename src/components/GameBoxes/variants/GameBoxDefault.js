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
  padding: 0.5rem ${sizes.padding.lite};
  background-color: rgba(0, 0, 0, 0.3); // TODO to variable
  color: ${colors.light};
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

const GameBoxDefault = ({ game }) => {
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

GameBoxDefault.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameBox(GameBoxDefault);
