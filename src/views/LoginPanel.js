import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import PropTypes from "prop-types";
import News from "../components/News";
import Login from "../components/Login/Login";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.startPageAfterBackground};
  }
`;

export const VIEWS = {
  LOGIN: "LOGIN",
  NEWS: "NEWS",
  GAMES: "GAMES",
};

const LoginPanel = ({ setTheme }) => {
  const [view, setView] = useState(VIEWS.LOGIN);

  const renderView = () => {
    switch (view) {
      case VIEWS.LOGIN: {
        return <Login />;
      }
      case VIEWS.NEWS: {
        return <News />;
      }
      case VIEWS.GAMES: {
        return <div>Games</div>;
      }
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <LoginHeader setTheme={setTheme} setView={setView} />
      {renderView()}
    </Wrapper>
  );
};

LoginPanel.propTypes = {
  setTheme: PropTypes.func,
};

export default ThemeProviderWrapper(LoginPanel);
