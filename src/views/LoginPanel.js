import React, { useEffect, useState } from "react";
import { authUser } from "../api/api";
import { Input } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoginPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRemember] = useState(true);

  const submit = () => {
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
    setEmail("adam.noszczynski@gmail.com");
    setPassword("password");
  }, []);

  return (
    <Wrapper>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
    </Wrapper>
  );
};

export default LoginPanel;
