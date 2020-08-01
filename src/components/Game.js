import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import PropTypes from "prop-types";
import { getGame } from "../api/api";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { withHostAddress } from "../utils/utils";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const Cover = styled.article`
  width: 100%;
  height: 100vh;
  opacity: 0.4;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 100%;
    display: block;
  }
`;

const Game = ({ match }) => {
  const [game, setGame] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    getGame(id).then((response) => {
      setGame(response);
    });
  }, [id]);

  return (
    <Layout removeTopPadding removeSidePadding>
      <>
        {game && (
          <Wrapper>
            <Cover>
              <img src={withHostAddress(game.cover.url)} alt={game.name} />
            </Cover>
            <div>
              <h2>{game.name}</h2>
            </div>
            <div>
              <p>{game.description}</p>
            </div>
            <div>
              <p>{game.release ? game.release : "20-09-2020"}</p>
            </div>
          </Wrapper>
        )}
      </>
    </Layout>
  );
};

Game.propTypes = {
  match: PropTypes.object,
};

export default withRouter(Game);
