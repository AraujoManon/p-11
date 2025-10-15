import { createSlice } from '@reduxjs/toolkit';

// État initial de la modale
const initialState = {
  isOpen: false, // La modale est fermée par défaut
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  
  // Actions pour gérer l'ouverture et la fermeture de la modale
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Export des actions pour utilisation dans les composants
export const { openModal, closeModal } = modalSlice.actions;

// Selector pour accéder à l'état de la modale
export const selectIsModalOpen = (state) => state.modal.isOpen;

export default modalSlice.reducer;