import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import modalReducer from "./reducers/ModalSlice";

// Configuration du store Redux avec tous les reducers de l'application
const store = configureStore({ 
  reducer: { 
    auth: authReducer,   // Gestion de l'authentification et du profil utilisateur
    modal: modalReducer, // Gestion de l'état de la modale
  } 
});

export default store;