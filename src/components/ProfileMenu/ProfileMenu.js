import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLocalUser } from "../../utils/utils";
import { apiUrl } from "../../api/api";
import logout from "../../api/logout";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Label = styled.h6`
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
  font-size: ${({ theme }) => theme.sizes.fonts.userNameLabel};
`;

const Photo = styled.div`
  height: 51px;
  width: 51px;
  margin-left: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  img {
    border-radius: 100%;
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.profileSubmenu};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  position: absolute;
  right: 0;
  bottom: -120px;
  padding: ${({ theme }) => theme.sizes.padding.lite};
  transform: scaleY(0);
  transform-origin: 0 0;
  transition: transform 0.15s;

  ${({ show }) => show && `transform: scaleY(1);`}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
  color: inherit;

  button {
    border: 0;
    background-color: ${({ theme }) => theme.colors.transparent};
    color: inherit;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ListItem = styled.li`
  display: block;
  text-align: right;
  width: 100%;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.regular};
  font-size: ${({ theme }) => theme.sizes.fonts.profileSubmenu};
  transition: color 0.15s ease;

  :hover {
    color: ${({ theme }) => theme.colors.activeFontColor};
  }
`;

const ProfileMenu = () => {
  const [user, setUser] = useState(null);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const LIST_ITEMS = [
    {
      label: "Profile",
      link: "/profile",
      title: "Go to your profile",
    },
    {
      label: "Settings",
      link: "/settings",
      title: "Go to settings",
    },
    {
      label: "Logout",
      action: logout,
      title: "Logout",
    },
  ];

  useEffect(() => {
    const localUser = getLocalUser();
    setUser(localUser);
  }, []);

  return (
    <Wrapper>
      {user && (
        <>
          <Label>{user.username}</Label>
          <Photo>
            <button onClick={() => setMenuVisibility(!menuVisibility)}>
              <img src={`${apiUrl}${user.picture.url}`} alt={"profile"} />
            </button>
          </Photo>
          <Menu show={menuVisibility}>
            <List>
              {LIST_ITEMS.map(({ label, title, link, action }) => {
                return link ? (
                  <Link to={link} key={label}>
                    <ListItem title={title}>{label}</ListItem>
                  </Link>
                ) : (
                  action && (
                    <button onClick={action} key={label}>
                      <ListItem title={title}>{label}</ListItem>
                    </button>
                  )
                );
              })}
            </List>
          </Menu>
        </>
      )}
    </Wrapper>
  );
};

export default ProfileMenu;
