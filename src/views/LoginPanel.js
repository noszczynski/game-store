import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import PropTypes from "prop-types";
import LoginForm from "../components/Login/LoginForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.sizes.padding.lite};
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
        return <LoginForm />;
      }
      case VIEWS.NEWS: {
        return <div />;
      }
      case VIEWS.GAMES: {
        return <div />;
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
