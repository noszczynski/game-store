import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withHostAddress } from "../utils/utils"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 70vh;
`;

const Premiere = ({ game }) => {
  const { cover } = game;
  return (
    game && (
      <Wrapper>
        <img src={withHostAddress(cover.url)} alt={"TODO"} />
      </Wrapper>
    )
  );
};

Premiere.propTypes = {
  game: PropTypes.object,
};

export default Premiere;
