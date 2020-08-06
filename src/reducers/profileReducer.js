export const PROFILE_ACTION_TYPES = {
  CHANGE: "CHANGE",
  SET: "SET",
  RESET: "RESET",
};

export const FIELD_NAMES = {
  NAME: "name",
  LAST_NAME: "lastName",
  EMAIL: "email",
  USERNAME: "username",
  PASSWORD: "password",
};

export const PROFILE_INITIAL_STATE = {
  username: "",
  name: "",
  lastName: "",
  picture: "",
  email: "",
  password: "",
};

export const reducer = (state, action) => {
  const { type, target, user } = action;

  switch (type) {
    case PROFILE_ACTION_TYPES.CHANGE: {
      const fieldName = target.getAttribute("name");
      const { value } = target;

      // TODO below switch convert into sth universal
      switch (fieldName) {
        case FIELD_NAMES.NAME: {
          return { ...state, name: value };
        }
        case FIELD_NAMES.LAST_NAME: {
          return { ...state, lastName: value };
        }
        case FIELD_NAMES.EMAIL: {
          return { ...state, email: value };
        }
        case FIELD_NAMES.USERNAME: {
          return { ...state, username: value };
        }
        case FIELD_NAMES.PASSWORD: {
          return { ...state, password: value };
        }
        default:
          return state;
      }
    }
    case PROFILE_ACTION_TYPES.SET: {
      const { username, firstName, lastName, picture, email } = user;
      return {
        username: username,
        name: firstName,
        lastName: lastName,
        picture: picture,
        email: email,
        password: "",
        defaultState: user,
      };
    }
    case PROFILE_ACTION_TYPES.RESET: {
      const {
        username,
        firstName,
        lastName,
        picture,
        email,
      } = state.defaultState;
      return {
        ...state,
        username: username,
        name: firstName,
        lastName: lastName,
        picture: picture,
        email: email,
      };
    }
    default:
      return state;
  }
};
