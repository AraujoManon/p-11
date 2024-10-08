import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import modalReducer from "./reducers/ModalSlice";

const store = configureStore({ 
  reducer: { 
    auth: authReducer ,
    modal: modalReducer,
  } 
});

export default store;
