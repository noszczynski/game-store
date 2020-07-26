import React, { useReducer } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { FIELD_NAMES, PROFILE_ACTION_TYPES, reducer } from "../profileReducer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.sizes.padding.lite};
`;

const Profile = () => {
  const initialState = {
    username: "",
    name: "",
    lastName: "",
    picture: "",
    email: "",
    password: "",
  };
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout title={"Profile"} removeTopPadding>
      <Wrapper>
        <ProfileForm>
          <Input
            type={"text"}
            name={FIELD_NAMES.NAME}
            value={data.name}
            placeholder={"name"}
            label={"Name"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
          <Input
            type={"text"}
            name={FIELD_NAMES.LAST_NAME}
            value={data.lastName}
            placeholder={"last name"}
            label={"Last name"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
          <Input
            type={"text"}
            name={FIELD_NAMES.EMAIL}
            value={data.email}
            placeholder={"email"}
            label={"Email"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
          <Input
            type={"text"}
            name={FIELD_NAMES.USERNAME}
            value={data.username}
            placeholder={"name"}
            label={"User name"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
          <Input
            type={"password"}
            name={FIELD_NAMES.PASSWORD}
            value={data.password}
            placeholder={"pass"}
            label={"Password"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
        </ProfileForm>
      </Wrapper>
    </Layout>
  );
};

export default Profile;
