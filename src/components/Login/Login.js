import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { authUser, getLoginCovers } from "../../api/api";
import { withHostAddress } from "../../utils/utils";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};

  & > div {
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ isLogin }) => (isLogin ? 0 : -50)}%);
    display: grid;
    grid-template-columns: 50% 50% 50%;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 200px);
    max-height: 70vh;
  }
`;

const WrapperInner = styled.div`
  padding: 0 ${({ theme }) => theme.sizes.padding.lite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 360px;
`;

const Cover = styled.div`
  height: 100%;
  width: 100%;
`;

export const LOGIN_VIEWS = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
};

const Login = () => {
  const [view, setView] = useState(LOGIN_VIEWS.LOGIN);
  const [covers, setCovers] = useState([]);
  const [titles, setTitles] = useState({
    login: "",
    register: "",
  });

  const login = (email, password, rememberMe) => {
    authUser(email, password).then(({ jwt, user }) => {
      window.sessionStorage.setItem("token", jwt);
      sessionStorage.setItem("user", JSON.stringify(user));
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      window.location.replace("/games");
    });
  };

  useEffect(() => {
    getLoginCovers().then(
      ({ covers, registerCovers, loginTitle, registerTitle }) => {
        setCovers({
          loginCovers: covers,
          registerCovers: registerCovers,
        });
        setTitles({
          login: loginTitle,
          register: registerTitle,
        });
      }
    );
  }, []);

  return (
    <Wrapper isLogin={view === LOGIN_VIEWS.LOGIN}>
      <div>
        {covers && covers.loginCovers && covers.loginCovers.length > 0
          ? covers.loginCovers.map(({ url, id }) => (
              <Cover key={id}>
                <img src={withHostAddress(url)} alt={"#"} />
              </Cover>
            ))
          : null}
        <WrapperInner>
          {view === LOGIN_VIEWS.LOGIN ? (
            <LoginForm
              login={login}
              title={titles ? titles.login : ""}
              view={view}
              setView={setView}
            />
          ) : (
            <RegisterForm />
          )}
        </WrapperInner>
        {covers && covers.registerCovers && covers.registerCovers.length > 0
          ? covers.registerCovers.map(({ url, id }) => (
              <Cover key={id}>
                <img src={withHostAddress(url)} alt={"#"} />
              </Cover>
            ))
          : null}
      </div>
    </Wrapper>
  );
};

Login.propTypes = {
  setTheme: PropTypes.func,
};

export default Login;
