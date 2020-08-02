import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Person } from "@material-ui/icons";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { VIEWS } from "../../views/LoginPanel";
import PropTypes from "prop-types";
import ResetButton from "../Reset/ResetButton";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0; // TODO
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  justify-content: space-between;
  align-items: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: flex-end;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryFontColor};
    width: 60%;
    transform: translateY(50%) translateX(-50%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &.active,
  &:hover {
    &::after {
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
  }

  &.active::after {
    background-color: ${({ theme }) => theme.colors.activeFontColor};
  }
`;

const Button = styled(ResetButton)`
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
  text-transform: uppercase;
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
  font-size: ${({ theme }) => theme.sizes.fonts.menu};
  font-family: Roboto, serif;
`;

const LoginHeader = ({ setTheme, setView }) => {
  return (
    <Wrapper>
      <Logo />
      <div>
        <List>
          <ListItem>
            <Button onClick={() => setView(VIEWS.NEWS)}>news</Button>
          </ListItem>
          <ListItem>
            <Button onClick={() => setView(VIEWS.GAMES)}>games</Button>
          </ListItem>
        </List>
      </div>
      <ActionWrapper>
        <ThemeSwitch setTheme={setTheme} />
        &nbsp;
        <ResetButton onClick={() => setView(VIEWS.LOGIN)}>
          <Person />
        </ResetButton>
      </ActionWrapper>
    </Wrapper>
  );
};

LoginHeader.propTypes = {
  setTheme: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};

export default LoginHeader;
