import { combineReducers, configureStore } from "@reduxjs/toolkit"; //funzione che serve a creare store

import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";

const bigReducer = combineReducers({
  // user: userReducer,
  auth: authReducer,
});
//configure store ha come patamentro oggetto
const store = configureStore({
  reducer: bigReducer,
});
export default store;
