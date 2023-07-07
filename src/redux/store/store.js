import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/UserReducer";

const bigReducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
