// reducers.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/index";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  accessToken: null,
  username: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        accessToken: action.payload.accessToken,
        username: action.payload.username,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        accessToken: null,
        username: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
