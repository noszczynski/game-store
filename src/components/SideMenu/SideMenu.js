import React from "react";
import { objectToArray } from "../../utils/utils";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../Logo/Logo";
import {
  ChatBubble,
  Delete,
  Favorite,
  List,
  Person,
  PersonAdd,
  Search,
  Store,
  YouTube,
} from "@material-ui/icons";
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
`;

const SideMenu = () => {
  const menu = {
    profile: { label: "Profile", link: "/profile", icon: <Person /> },
    search: { label: "Search", link: "/search", icon: <Search /> },
    friend: { label: "Friend", link: "/friend", icon: <PersonAdd /> },
    messages: { label: "Messages", link: "/messages", icon: <ChatBubble /> },
    channels: { label: "Channels", link: "/channels", icon: <YouTube /> },
    store: { label: "Store", link: "/store", icon: <Store /> },
    games: { label: "Games", link: "/games", icon: <List /> },
    favorite: { label: "Favorite", link: "/favorite", icon: <Favorite /> },
    mamuski: { label: "Mamuśki", link: "/mamuski", icon: <Delete /> },
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
