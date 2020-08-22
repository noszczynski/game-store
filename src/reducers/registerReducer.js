export const REGISTER_ACTION_TYPES = {
  CHANGE: "CHANGE",
  RESET: "RESET",
};

export const REGISTER_FIELD_NAMES = {
  USERNAME: "username",
  EMAIL: "email",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirmPassword",
};

export const REGISTER_INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const reducer = (state, action) => {
  const { type, target } = action;

  switch (type) {
    case REGISTER_ACTION_TYPES.CHANGE: {
      const fieldName = target.getAttribute("name");
      const { value } = target;

      switch (fieldName) {
        case REGISTER_FIELD_NAMES.USERNAME: {
          return { ...state, username: value };
        }
        case REGISTER_FIELD_NAMES.EMAIL: {
          return { ...state, email: value };
        }
        case REGISTER_FIELD_NAMES.PASSWORD: {
          return { ...state, password: value };
        }
        case REGISTER_FIELD_NAMES.CONFIRM_PASSWORD: {
          return { ...state, confirmPassword: value };
        }
        default:
          return state;
      }
    }
    case REGISTER_ACTION_TYPES.RESET: {
      return {
        ...state,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    }
    default:
      return state;
  }
};
