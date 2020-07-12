import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import sizes from "../utils/sizes";
import GameBox from "../components/GameBox";
import { filterArrayByFields } from "../utils/utils";
import {apiGames} from "../api/api";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-row: 200px;
  gap: ${sizes.padding.lite};
`;

function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    apiGames().then(data => {
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
            <GameBox game={game} key={index} />
          ))}
        </Wrapper>
      </Layout>
    </div>
  );
}

export default Games;
