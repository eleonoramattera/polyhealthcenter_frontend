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
      } else if (response.status === 400) {
        alert("EMAIL O PASSWORD GIA' ESISTENTE");
      }
    } catch (error) {
      alert("Errore con la registrazione", error);
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
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: ADD_TOKEN,
          payload: data.accessToken,
        }) &&
          dispatch({
            type: ADD_USERNAME,
            payload: data.username,
          });
        window.location.href = "http://localhost:3000/";
      } else if (response.status === 500) {
        alert("Email o Password errati");
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}
