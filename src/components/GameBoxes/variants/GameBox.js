import React from "react";
import PropTypes from "prop-types";
import Link from "../../Link/Link";
import Cover from "../Cover";
import Wrapper from "../Wrapper";
import { TitlePrimary, TitleSecondary } from "../Title";
import { apiUrl } from "../../../api/api";

const GameBox = ({ game, variant }) => {
  const { name, cover } = game;
  const coverPhoto = `${apiUrl}${cover.url}`;

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return <TitlePrimary>{name}</TitlePrimary>;
      case "secondary":
        return <TitleSecondary>{name}</TitleSecondary>;
      default:
        return null;
    }
  };

  return (
    <Link href={"/"}>
      <Wrapper>
        <Cover src={coverPhoto} alt={"game-img"} />
        {getVariant()}
      </Wrapper>
    </Link>
  );
};

GameBox.propTypes = {
  game: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

GameBox.defaultProps = {
  variant: "primary",
};

export default GameBox;
