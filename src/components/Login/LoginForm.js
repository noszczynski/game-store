import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { authUser } from "../../api/api";
import ResetButton from "../Reset/ResetButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.padding.lite};
  width: 50%;
  min-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.activeFontColor};
  min-height: 50vh;
`;

const LoginInput = styled.input``;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRemember] = useState(true);

  const login = (email, password) => {
    authUser(email, password).then(({ jwt, user }) => {
      window.sessionStorage.setItem("token", jwt);
      sessionStorage.setItem("user", JSON.stringify(user));
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      window.location.replace("/games");
    });
  };

  const submit = () => {
    login(email, password);
  };

  const submitAsGuest = () => {
    login("guest@guest.com", "password");
  };

  useEffect(() => {
    setEmail("adam.noszczynski@gmail.com");
    setPassword("password");
  }, []);

  return (
    <Wrapper>
      <LoginInput
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        type={"text"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor={"rememberMe"}>Remember me</label>
      <input type={"checkbox"} name={"rememberMe"} />
      <ResetButton onClick={submit}>Login</ResetButton>
      <ResetButton onClick={submitAsGuest}>Login as guest</ResetButton>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  setTheme: PropTypes.func,
};

export default LoginForm;
