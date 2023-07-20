export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USERNAME = "ADD_USERNAME";
export const ADD_ID_USER = "ADD_ID_USER";
export const USER = "USER";
export const PRENOTAZIONE = "PRENOTAZIONE";
export const PRENOTAZIONI = "PRENOTAZIONI";

export function regisrazioneUser(input) {
  return async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.ok) {
        console.log(response);
        window.location.href = "/login";
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function loginUser(input) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        const username = data.username;
        console.log(data, " oooooooooooooooole");
        alert("loggato");
        dispatch({
          type: ADD_TOKEN,
          payload: token,
        });
        dispatch({
          type: ADD_USERNAME,
          payload: username,
        });
        window.location.href = "/";
      }
    } catch (error) {
      alert("errore generale", error);
    }
  };
}
/*export const SET_USER = "SET_USER";
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
};*/
