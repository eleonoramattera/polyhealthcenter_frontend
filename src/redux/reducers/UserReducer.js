import { ADD_ID_USER, ADD_TOKEN, ADD_USERNAME, USER, PRENOTAZIONE, PRENOTAZIONI } from "../actions/userAction";

const initialState = {
  token: "",
  username: "",
  idUser: "",
  user: {},
  prenotazione: {},
  prenotazioni: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case ADD_ID_USER:
      return {
        ...state,
        idUser: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case PRENOTAZIONE:
      return {
        ...state,
        prenotazione: action.payload,
      };
    case PRENOTAZIONI:
      return {
        ...state,
        prenotazioni: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
