// actions.js

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (accessToken, username) => ({
  type: LOGIN_SUCCESS,
  payload: { accessToken, username },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
