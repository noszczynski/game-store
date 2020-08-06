import React, { useState } from "react";
import GapWrapper from "../Wrappers/GapWrapper";
import Button from "../Button";
import LoginInput from "./LoginInput";
import { LOGIN_VIEWS } from "./Login";
import PropTypes from "prop-types";
import { authUser } from "../../api/api";
import LinkButton from "../Link/LinkButton";
import Checkbox from "./Checkbox";

const LoginForm = ({ title, setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRemember] = useState(true);

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

  const submit = () => {
    login(email, password, rememberMe);
  };

  const submitAsGuest = () => {
    login("guest@guest.com", "password", false);
  };

  return (
    <>
      <h2>{title}</h2>
      <LoginInput
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name={"email"}
        label={"Login or email"}
      />
      <LoginInput
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name={"password"}
        label={"Password"}
      />
      <div>
        <Checkbox
          label={"remember me"}
          value={rememberMe}
          setValue={setRemember}
        />
      </div>
      <GapWrapper>
        <Button onClick={submit} active>
          Login
        </Button>
        <Button onClick={submitAsGuest}>Login as guest</Button>
      </GapWrapper>
      <div>
        <p>
          Don't have an account? Come on, &nbsp;
          <LinkButton onClick={() => setView(LOGIN_VIEWS.REGISTER)}>
            create an account
          </LinkButton>
        </p>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default LoginForm;
