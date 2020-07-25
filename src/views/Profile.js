import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 200px;
  gap: ${({ theme }) => theme.sizes.padding.lite};
`;

const Profile = () => {
  return (
    <Layout title={"Profile"} removeTopPadding>
      <Wrapper></Wrapper>
    </Layout>
  );
};

export default Profile;
