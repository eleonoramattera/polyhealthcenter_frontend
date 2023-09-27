import { ADD_TOKEN, USER, USERNAME_USER, SET_AUTHENTICATED } from "../actions";

const initialState = {
  token: "",
  username: "",
  isAuthenticated: false,
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
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
