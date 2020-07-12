import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import sizes from "../utils/sizes";
import GameBox from "../components/GameBox";
import { filterArrayByFields } from "../utils/utils";
import api from "../api/api";

// TODO data eventually it will be taken from cms
const GAMES_MOCK = [
  {
    title: "Star Wars: Battlefront II",
    cover:
      "https://media.contentapi.ea.com/content/dam/walrus/de-de/migrated-images/2017/04/reveal-swbf2-fb-meta-image-alt.png.adapt.crop191x100.1200w.png",
  },
  {
    title: "Horizon Zero Dawn",
    cover:
      "https://images.derstandard.at/img/2017/07/07/horizon-zero-dawn-impact-poster-ps4-us-07feb17.png?w=750&s=3dff4499",
  },
  {
    title: "GTA V",
    cover:
      "https://cdn-products.eneba.com/resized-products/jpro1uksmc4_1Qr3tu06CTkBSXJpu3DZlWag7hCSw7A_390x400_1x-0.jpeg",
  },
  {
    title: "Minecraft",
    cover:
      "https://www.videogameschronicle.com/files/2019/04/Minecraft-Feature-image.jpg",
  },
  {
    title: "FIFA 20",
    cover:
      "https://gpstatic.com/acache/43/44/1/de/t620x300-cc4da148a7a359891dde91df1ecceb55.jpg",
  },
  {
    title: "Star Wars: Fallen Order",
    cover:
      "https://image-cdn.essentiallysports.com/wp-content/uploads/20200507004835/Jedi-Fallen-Order.jpg",
  },
  {
    title: "Need For Speed: Heat",
    cover:
      "https://www.gameswirtschaft.de/wp-content/uploads/2019/08/NfS-Heat-Release-Termin.jpg",
  },
  {
    title: "Day Z",
    cover: "https://i.redd.it/5odmmwgmw5051.jpg",
  },
  {
    title: "Escape from Tarkov",
    cover:
      "https://skidrowcodexcracks.com/wp-content/uploads/2020/02/Escape-from-Tarkov-cover-game-download.jpg",
  },
  {
    title: "Playerunknown's Battlegrounds",
    cover:
      "https://pics.computerbase.de/9/1/9/3/3/article-1280x720.c26fbf17.jpg",
  },
  {
    title: "Fortnite",
    cover: "https://estnn.com/wp-content/uploads/2020/02/fortnite-1200x675.jpg",
  },
];

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
  // Getting games from api
  const gamesFromApi = async () => {
    await fetch(api.games)
    .then(response => response.json()).then(data => {
      setGames(data);
    });
  }

  useEffect(() => {
    gamesFromApi();
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
