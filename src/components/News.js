import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { getPremiereNews } from "../api/api";
import Premiere from "./Premiere";

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 400px 100px 1fr;
  grid-template-rows: 1fr 140px;
  height: calc(100vh - 200px);
  max-width: 1800px;
  margin: 1rem auto 0;
`;

const DateWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  span {
    font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
    font-size: ${({ theme }) => theme.sizes.fonts.premiereSpan};
    color: #fff;
    mix-blend-mode: difference;
  }

  hr {
    background-color: #fff !important;
    mix-blend-mode: difference;
    width: 40px;
    height: 2px;
    margin: ${({ theme }) => theme.sizes.padding.lite} auto !important;
  }
`;

const DateWrapperHorizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  mix-blend-mode: difference;

  p {
    font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
    font-size: 48px;
    color: inherit;
    mix-blend-mode: inherit;
  }
`;

const AltSpan = styled.span`
  color: #000;
  mix-blend-mode: inherit;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: 0;
    left: -10%;
    display: block;
    background-color: #fff;
    z-index: -1;
  }
`;

const Tag = styled.div`
  padding: 1rem;
  text-transform: uppercase;
`;

const News = () => {
  const [premiereData, setPremiereData] = useState([]);

  useEffect(() => {
    getPremiereNews().then((data) => {
      const { firstGame, firstPremiereDate, firstCover, firstTitle } = data;
      const { secondGame, secondPremiereDate, secondCover, secondTitle } = data;

      const content = [
        {
          relatedTo: firstGame,
          premiereDate: firstPremiereDate,
          cover: firstCover,
          title: firstTitle,
        },
        {
          relatedTo: secondGame,
          premiereDate: secondPremiereDate,
          cover: secondCover,
          title: secondTitle,
        },
      ];

      setPremiereData(content);
    });
  }, []);

  const VARIANT = {
    VERTICAL: "VERTICAL",
    HORIZONTAL: "HORIZONTAL",
  };

  const renderPremiereDate = (date, variant) => {
    const [year, month, day] = date.split("-");

    switch (variant) {
      case VARIANT.VERTICAL: {
        return (
          <DateWrapperVertical>
            <span>{day}</span>
            <Divider />
            <span>{month}</span>
            <Divider />
            <span>{year}</span>
          </DateWrapperVertical>
        );
      }
      case VARIANT.HORIZONTAL: {
        return (
          <DateWrapperHorizontal>
            <p>
              <span>{day}</span>/<span>{month}</span>/<AltSpan>{year}</AltSpan>
            </p>
          </DateWrapperHorizontal>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      {premiereData && premiereData.length > 0 ? (
        <>
          <Premiere game={premiereData[0]} />
          {renderPremiereDate(premiereData[0].premiereDate, VARIANT.VERTICAL)}
          <Premiere game={premiereData[1]} />
          <div>
            <Tag>GAMES</Tag>
          </div>
          <div style={{ gridColumn: "3" }}>
            {renderPremiereDate(
              premiereData[1].premiereDate,
              VARIANT.HORIZONTAL
            )}
          </div>
        </>
      ) : null}
    </Wrapper>
  );
};

export default News;
