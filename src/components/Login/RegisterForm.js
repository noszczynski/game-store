import React, { useState } from "react";
import GapWrapper from "../Wrappers/GapWrapper";
import Button from "../Button";
import ResetButton from "../Reset/ResetButton";
import LoginInput from "./LoginInput";
import { LOGIN_VIEWS } from "./Login";
import PropTypes from "prop-types";

const RegisterForm = ({ title, setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {};

  return (
    <>
      <h2>{title}</h2>
      <LoginInput
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"username"}
      />
      <LoginInput
        type={"email"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"email"}
      />
      <LoginInput
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"password"}
      />
      <LoginInput
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"confirm password"}
      />
      <GapWrapper>
        <Button onClick={register} active>
          Register
        </Button>
      </GapWrapper>
      <div>
        <ResetButton onClick={() => setView(LOGIN_VIEWS.LOGIN)}>
          Back to Log in
        </ResetButton>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default RegisterForm;
