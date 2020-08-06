import React, { useReducer } from "react";
import GapWrapper from "../Wrappers/GapWrapper";
import Button from "../Button";
import LoginInput from "./LoginInput";
import { LOGIN_VIEWS } from "./Login";
import PropTypes from "prop-types";
import LinkButton from "../Link/LinkButton";
import {
  reducer,
  REGISTER_ACTION_TYPES,
  REGISTER_FIELD_NAMES,
  REGISTER_INITIAL_STATE,
} from "../../reducers/registerReducer";

const RegisterForm = ({ title, setView }) => {
  const [data, dispatch] = useReducer(reducer, REGISTER_INITIAL_STATE);

  const register = () => {};

  return (
    <>
      <h2>{title}</h2>
      <LoginInput
        type={"text"}
        value={data.username}
        name={REGISTER_FIELD_NAMES.USERNAME}
        label={"Username"}
        onChange={({ target }) =>
          dispatch({ type: REGISTER_ACTION_TYPES.CHANGE, target })
        }
      />
      <LoginInput
        type={"email"}
        value={data.email}
        name={REGISTER_FIELD_NAMES.EMAIL}
        label={"Email address"}
        onChange={({ target }) =>
          dispatch({ type: REGISTER_ACTION_TYPES.CHANGE, target })
        }
      />
      <LoginInput
        type={"password"}
        value={data.password}
        name={REGISTER_FIELD_NAMES.PASSWORD}
        label={"Password"}
        onChange={({ target }) =>
          dispatch({ type: REGISTER_ACTION_TYPES.CHANGE, target })
        }
      />
      <LoginInput
        type={"password"}
        value={data.confirmPassword}
        name={REGISTER_FIELD_NAMES.CONFIRM_PASSWORD}
        label={"Confirm password"}
        onChange={({ target }) =>
          dispatch({ type: REGISTER_ACTION_TYPES.CHANGE, target })
        }
      />
      <GapWrapper>
        <Button onClick={register} active>
          Register
        </Button>
      </GapWrapper>
      <div>
        <p>
          However, do you have an account? &nbsp;
          <LinkButton onClick={() => setView(LOGIN_VIEWS.LOGIN)}>
            Come back to us
          </LinkButton>
        </p>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default RegisterForm;
