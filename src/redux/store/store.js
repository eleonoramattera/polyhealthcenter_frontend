import { combineReducers, configureStore } from "@reduxjs/toolkit"; //funzione che serve a creare store

import userReducer from "../reducers/userReducer";

const bigReducer = combineReducers({
  user: userReducer,
});
//configure store ha come patamentro oggetto
const store = configureStore({
  reducer: bigReducer,
});
export default store;
