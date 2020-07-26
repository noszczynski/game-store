import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { getGames } from "../api/api";
import GameBox from "../components/GameBoxes/variants/GameBox";
import GapWrapper from "../components/Wrappers/GapWrapper";

function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <Layout title={"Games"} data={games} setFilteredData={setFilteredGames}>
      <GapWrapper
        columns={"repeat(auto-fill, minmax(320px, 1fr))"}
        rows={"240px"}
        gap={({ theme }) => theme.sizes.padding.lite}
      >
        {filteredGames.map((game, index) => (
          <GameBox game={game} variant={"secondary"} key={index} />
        ))}
      </GapWrapper>
    </Layout>
  );
}

export default Games;
