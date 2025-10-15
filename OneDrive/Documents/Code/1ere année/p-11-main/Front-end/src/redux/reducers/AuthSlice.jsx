import { createSlice } from '@reduxjs/toolkit';
import { loginUser, getUserProfile, updateUserProfile } from './AuthActions';

// État initial du slice auth
const initialState = {
  loading: false, // Indicateur de chargement pour les requêtes en cours
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null, // Récupération des infos depuis localStorage
  userToken: localStorage.getItem('userToken') || null, // Récupération du token depuis localStorage
  error: null, // Stockage des messages d'erreur
  success: false, // Indicateur de succès des actions
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  // Reducers synchrones (actions simples sans appel API)
  reducers: {
    // Déconnexion de l'utilisateur
    logoutUser: (state) => {
      state.userInfo = null;
      state.userToken = null;
      localStorage.removeItem('userToken');
      localStorage.removeItem('userInfo');
      state.success = false;
    },
  },
  
  // Reducers pour les actions asynchrones (importées depuis AuthActions)
  extraReducers: (builder) => {
    builder
      // Gestion de la connexion utilisateur (loginUser)
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token;
        state.userInfo = action.payload.userInfo;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      
      // Gestion de la récupération du profil (getUserProfile)
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        // Sauvegarde dans localStorage pour persistance
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
        state.success = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      
      // Gestion de la mise à jour du profil (updateUserProfile)
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        // Sauvegarde des nouvelles données dans localStorage
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
        state.success = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  }
});

// Export de l'action synchrone
export const { logoutUser } = authSlice.actions;

// Selectors pour accéder à l'état depuis les composants
export const selectIsAuth = (state) => !!state.auth.userToken; // Vérifie si l'utilisateur est authentifié
export const selectUserInfo = (state) => state.auth.userInfo; // Récupère les infos utilisateur

export default authSlice.reducer;