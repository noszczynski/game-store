import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import GapWrapper from "../Wrappers/GapWrapper";
import Button from "../Button";
import ResetButton from "../Reset/ResetButton";
import LoginInput from "./LoginInput";
import { LOGIN_VIEWS } from "./Login";
import PropTypes from "prop-types";
import { authUser } from "../../api/api";

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
        placeholder={"login or email"}
      />
      <LoginInput
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"password"}
      />
      <div>
        <FormControlLabel
          value="end"
          control={
            <Checkbox
              color="primary"
              value={rememberMe}
              onChange={({ target: { checked } }) => setRemember(checked)}
            />
          }
          label="Remember Me"
          labelPlacement="end"
        />
      </div>
      <GapWrapper>
        <Button onClick={submit} active>
          Login
        </Button>
        <Button onClick={submitAsGuest}>Login as guest</Button>
      </GapWrapper>
      <div>
        <ResetButton onClick={() => setView(LOGIN_VIEWS.REGISTER)}>
          Register
        </ResetButton>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default LoginForm;
