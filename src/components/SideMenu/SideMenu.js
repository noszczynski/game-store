import React from "react";
import { objectToArray } from "../../utils/utils";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../Logo/Logo";
import { List, Person, Search } from "@material-ui/icons";
import { shadows } from "../../utils/variables";
import sizes from "../../utils/sizes";
import styled from "styled-components";

const Aside = styled.aside`
  box-shadow: ${shadows.first};
  padding: ${sizes.padding.lite};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  transition: ${({ theme }) => theme.transitions.changeTheme};
`;

const SideMenu = () => {
  const menu = {
    games: { label: "Games", link: "/games", icon: <List /> },
    search: { label: "Search", link: "/search", icon: <Search /> },
    profile: { label: "Profile", link: "/profile", icon: <Person /> },
    // friend: { label: "Friend", link: "/friend", icon: <PersonAdd /> },
    // messages: { label: "Messages", link: "/messages", icon: <ChatBubble /> },
    // channels: { label: "Channels", link: "/channels", icon: <YouTube /> },
    // store: { label: "Store", link: "/store", icon: <Store /> },
    // favorite: { label: "Favorite", link: "/favorite", icon: <Favorite /> },
  };

  const MENU_SCHEMA = objectToArray(menu);

  return (
    <Aside>
      <Logo />
      <div>
        {MENU_SCHEMA.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </div>
    </Aside>
  );
};

export default SideMenu;
