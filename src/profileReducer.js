export const PROFILE_ACTION_TYPES = {
  CHANGE: "CHANGE",
};

export const FIELD_NAMES = {
  NAME: "name",
  LAST_NAME: "lastName",
  EMAIL: "email",
  NICKNAME: "nickname",
  PASSWORD: "password",
};

export const reducer = (state, action) => {
  const { type, target } = action;

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
        case FIELD_NAMES.NICKNAME: {
          return { ...state, nickname: value };
        }
        case FIELD_NAMES.PASSWORD: {
          return { ...state, password: value };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
