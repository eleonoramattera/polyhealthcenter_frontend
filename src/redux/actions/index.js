export const ADD_TOKEN = "ADD_TOKEN";
export const USERNAME_USER = "USERNAME_USER";
export const USER = "USER";

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
        window.location.href = "http://localhost:3000/login";
      } else if (response.status === 400) {
        alert("EMAIL O PASSWORD GIA' ESISTENTE");
      }
    } catch (error) {
      alert("Errore con la registrazione", error);
    }
  };
}

export function getUser(token, username) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const userFiltrato = data.filter((e) => e.username === username);
        dispatch({
          type: USER,
          payload: userFiltrato[0],
        });
      }
    } catch (error) {
      alert("Errore con il GET user!", error);
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
            type: USERNAME_USER,
            payload: data.username,
          });
        window.location.href = "http://localhost:3000";
      } else if (response.status === 500) {
        alert("Email o Password errati");
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: ADD_TOKEN,
      payload: "",
    });
    alert("non sei più loggato");
    window.location.href = "http://localhost:3000/";
  };
}
