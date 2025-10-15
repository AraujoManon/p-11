import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

// Action pour connecter un utilisateur
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log(email, password);
      // Envoi des identifiants au backend
      const response = await axios.post(
        `${backendURL}/api/v1/user/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      // Stockage du token pour maintenir la session
      const token = response.data.body.token;
      localStorage.setItem('userToken', token);
      
      // Récupération du profil utilisateur avec le token obtenu
      const userInfoResponse = await axios.post(
        `${backendURL}/api/v1/user/profile`,
        {},
        { headers: { 'Authorization': `Bearer ${token}` } }
      );
      
      return {
        token,
        userInfo: userInfoResponse.data.body
      };
    } catch (error) {
      console.log(error);
      // Gestion des erreurs (mauvais identifiants, problème réseau, etc.)
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);

// Action pour récupérer le profil utilisateur
export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      // Récupération du token depuis Redux
      const { userToken } = getState().auth;

      // Vérification du token avant d'appeler l'API
      if (!userToken) {
        throw new Error('User token is missing');
      }

      const response = await axios.post(
        `${backendURL}/api/v1/user/profile`,
        {},
        { headers: { 'Authorization': `Bearer ${userToken}` } }
      );

      return response.data.body;

    } catch (error) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);

// Action pour mettre à jour le profil utilisateur
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (userData, { rejectWithValue, getState }) => {
    try {
      // Récupération du token depuis Redux
      const { userToken } = getState().auth;
      
      if (!userToken) {
        throw new Error('User token is missing');
      }

      // Envoi des données modifiées (méthode PUT)
      const response = await axios.put(
        `${backendURL}/api/v1/user/profile`,
        userData,
        { headers: { 
          'Authorization': `Bearer ${userToken}`, 
          'Content-Type': 'application/json' 
        }}
      );
      
      // Sauvegarde dans localStorage pour persistance après rafraîchissement
      localStorage.setItem('userInfo', JSON.stringify(response.data.body));
      
      return response.data.body;
      
    } catch (error) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);