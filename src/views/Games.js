import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import { getGames } from "../api/api";
import GameBox from "../components/GameBoxes/variants/GameBox";
import GapWrapper from "../components/Wrappers/GapWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Games() {
  const [games, setGames] = useState([]);
  const parent = useRef(null);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => {
      setGames(data);
    });
  }, []);

  useEffect(() => {
    if (filteredGames && filteredGames.length > 0) {
      const { children } = parent.current;

      gsap.fromTo(
        children,
        { y: "+=100", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: children,
            start: "top bottom",
          },
        }
      );
    }
  }, [filteredGames]);

  return (
    <Layout title={"Games"} data={games} setFilteredData={setFilteredGames}>
      <GapWrapper
        columns={"repeat(auto-fill, minmax(320px, 1fr))"}
        rows={"240px"}
        ref={parent}
      >
        {filteredGames.map((game, index) => (
          <GameBox game={game} variant={"secondary"} key={index} />
        ))}
      </GapWrapper>
    </Layout>
  );
}

export default Games;
