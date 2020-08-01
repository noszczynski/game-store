import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import GapWrapper from "../components/Wrappers/GapWrapper";
import { getSiteData, PAGES } from "../api/api";

const SearchedItem = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.activeFontColor};
`;

const SearchVIew = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    getSiteData(PAGES.SEARCH).then(({ searchPage }) => {
      setSiteData(searchPage);
    });
  }, []);

  return (
    <Layout
      site={siteData}
      searchTerm={searchTerm}
      searchTermSetter={setSearchTerm}
    >
      <GapWrapper
        items={3}
        gap={({ theme }) => theme.sizes.padding.lite}
        rows={["60px", "120px"]}
      >
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
      </GapWrapper>
    </Layout>
  );
};

export default SearchVIew;
