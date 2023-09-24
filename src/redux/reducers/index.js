import { ADD_TOKEN, USER, USERNAME_USER } from "../actions";

const initialState = {
  token: "",
  username: "",

  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USERNAME_USER:
      return {
        ...state,
        username: action.payload,
      };

    case USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
