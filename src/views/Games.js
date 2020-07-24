import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import sizes from "../utils/sizes";
import { filterArrayByFields } from "../utils/utils";
import { apiGames } from "../api/api";
import GameBox from "../components/GameBoxes/variants/GameBox";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 200px;
  gap: ${sizes.padding.lite};
`;

function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    apiGames().then((data) => {
      setGames(data);
    });
  }, []);

  useEffect(() => {
    setFilteredGames(
      searchTerm.length
        ? filterArrayByFields(searchTerm, games, ["Keywords"])
        : games
    );
  }, [games, searchTerm]);

  return (
    <Layout
      title={"Games"}
      searchTerm={searchTerm}
      searchTermSetter={setSearchTerm}
    >
      <Wrapper>
        {filteredGames.map((game, index) => (
          <GameBox
            game={game}
            variant={index % 2 === 0 ? "primary" : "secondary"}
            key={index}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Games;
