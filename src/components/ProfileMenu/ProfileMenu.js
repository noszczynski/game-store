import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLocalUser } from "../../utils/utils";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.h6`
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
`;

const Photo = styled.div`
  border-radius: 100%;
  height: 45px;
  width: 45px;
  margin-left: 1rem;

  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

const Menu = styled.div`
  display: none;
`;

const ProfileMenu = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = getLocalUser();
    setUser(localUser);
  }, []);

  return (
    <Wrapper>
      <Label>{user && user.nickname}</Label>
      <Photo>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          }
          alt={"profile"}
        />
      </Photo>
      <Menu />
    </Wrapper>
  );
};

export default ProfileMenu;
