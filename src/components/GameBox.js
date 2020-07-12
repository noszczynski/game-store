import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import sizes from "../utils/sizes";
import Link from "./Link/Link";
import { apiUrl } from "../api/api";

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

const Cover = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0.5rem ${sizes.padding.lite}; // TODO
  background-color: rgba(0, 0, 0, 0.3); // TODO to variable
  color: #fff; // TODO to variable
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

const GameBox = ({ game }) => {
  const { name, cover } = game;

  return (
    <Link href={"/"}>
      <Wrapper>
        <Cover src={`${apiUrl}${cover.url}`} alt={"game-img"} />
        <Title>{name}</Title>
      </Wrapper>
    </Link>
  );
};

GameBox.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameBox;