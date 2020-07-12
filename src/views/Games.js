import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import sizes from "../utils/sizes";
import { filterArrayByFields } from "../utils/utils";
import GameBoxDefault from "../components/GameBoxes/variants/GameBoxDefault";
import GameBoxLabel from "../components/GameBoxes/variants/GameBoxLabel";
import { apiGames } from "../api/api";

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
    <div className="App">
      <Layout
        title={"Games"}
        searchTerm={searchTerm}
        searchTermSetter={setSearchTerm}
      >
        <Wrapper>
          {filteredGames.map((game, index) => (
            <GameBoxDefault game={game} key={index} />
          ))}
          {filteredGames.map((game, index) => (
            <GameBoxLabel game={game} key={index} />
          ))}
        </Wrapper>
      </Layout>
    </div>
  );
}

export default Games;
