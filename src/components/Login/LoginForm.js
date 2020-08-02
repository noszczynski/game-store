import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import GapWrapper from "../Wrappers/GapWrapper";
import Button from "../Button";
import ResetButton from "../Reset/ResetButton";
import LoginInput from "./LoginInput";
import { LOGIN_VIEWS } from "./Login";
import PropTypes from "prop-types";

const LoginForm = ({ login, title, view, setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRemember] = useState(true);

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
        type={"text"}
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
        <ResetButton
          onClick={() =>
            setView(
              view === LOGIN_VIEWS.REGISTER
                ? LOGIN_VIEWS.LOGIN
                : LOGIN_VIEWS.REGISTER
            )
          }
        >
          Register
        </ResetButton>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default LoginForm;
