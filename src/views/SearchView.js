import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes.padding.standard};
  grid-template-columns: 1fr;
  grid-auto-rows: 200px; // TODO
`;

const SearchedItem = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.activeFontColor};
`;

const SearchVIew = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout
      title={"Search"}
      searchTerm={searchTerm}
      searchTermSetter={setSearchTerm}
    >
      <Wrapper>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
        <SearchedItem>search result mock</SearchedItem>
      </Wrapper>
    </Layout>
  );
};

export default SearchVIew;
