import React, { useEffect, useReducer, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { FIELD_NAMES, PROFILE_ACTION_TYPES, reducer } from "../profileReducer";
import { getSiteData, PAGES } from "../api/api";
import ResetButton from "../components/Reset/ResetButton";
import GapWrapper from "../components/Wrappers/GapWrapper";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  padding: ${({ theme }) => theme.sizes.padding.lite};
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
`;

const ProfileForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.sizes.padding.lite};
  margin: 0 auto;
  align-items: center;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.lite} 0;

  button {
    background-color: ${({ theme }) => theme.colors.activeFontColor};
    color: ${({ theme }) => theme.colors.tertiaryFontColor};
    padding: 1rem 2rem;
  }
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
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    getSiteData(PAGES.PROFILE).then(({ profilePage }) => {
      setSiteData(profilePage);
    });

    const user = JSON.parse(sessionStorage.getItem("user"));
    dispatch({ type: PROFILE_ACTION_TYPES.SET, user });
  }, []);

  return (
    <Layout site={siteData} removeTopPadding>
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
            placeholder={"password"}
            label={"Password"}
            onChange={({ target }) =>
              dispatch({ type: PROFILE_ACTION_TYPES.CHANGE, target })
            }
          />
          <ButtonWrapper>
            <GapWrapper>
              <ResetButton>Save</ResetButton>
              <ResetButton
                onClick={() => dispatch({ type: PROFILE_ACTION_TYPES.RESET })}
              >
                Cancel
              </ResetButton>
            </GapWrapper>
          </ButtonWrapper>
        </ProfileForm>
      </Wrapper>
    </Layout>
  );
};

export default Profile;
