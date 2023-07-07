export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SET_TOKEN_TYPE = "SET_TOKEN_TYPE";
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const SetTokenType = (type) => {
  return {
    type: SET_TOKEN_TYPE,
    paylod: type,
  };
};
