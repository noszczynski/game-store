import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const [searchResult, setSearchResult] = useState([
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
    { title: "search result mock", link: "/games" },
  ]);
  const [filteredResult, setFilteredResult] = useState([]);

  return (
    <Layout
      title={"Search"}
      data={searchResult}
      setFilteredData={setFilteredResult}
      searchFields={["title"]}
    >
      <Wrapper>
        {searchResult &&
          filteredResult.map((result, index) => (
            <Link to={result.link} key={index}>
              <SearchedItem>{result.title}</SearchedItem>
            </Link>
          ))}
      </Wrapper>
    </Layout>
  );
};

export default SearchVIew;
