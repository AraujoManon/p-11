import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../redux/reducers/AuthActions'; 
import Wrapper from "./Wrappers";
import "../scss/modal.scss";

const Modal = ({ isOpen, onClose }) => {
  // Hook Redux pour dispatcher les actions
  const dispatch = useDispatch();
  
  // Récupération des informations utilisateur et de l'état de chargement depuis Redux
  const { userInfo } = useSelector(state => state.auth);
  
  // État local pour gérer la saisie du nom d'utilisateur
  const [username, setUsername] = useState('');

  // Récupération du profil utilisateur à l'ouverture de la modale
  useEffect(() => {
    if (isOpen) {
      dispatch(getUserProfile());
    }
  }, [isOpen, dispatch]);

  // Mise à jour de l'état local username quand les infos utilisateur changent
  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.userName || ''); 
    }
  }, [userInfo]);

  // Gestion de la sauvegarde du nouveau nom d'utilisateur
  const handleSave = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Dispatch de l'action de mise à jour si le username n'est pas vide
    if (username) {
      dispatch(updateUserProfile({ userName: username })); 
    }
    
    // Ferme la modale après la sauvegarde
    onClose();
  };

  // Si la modale n'est pas ouverte, ne rien afficher
  if (!isOpen) return null;

  return (
    <div className="main-modal">
      <h2>Edit user info</h2>
      <div className="form-group">
        <form>
          {/* Champ modifiable : User name */}
          <label>
            User name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          
          {/* Champ en lecture seule : First name */}
          <label >
            First name:
            <input className="input "
              type="text"
              name="firstName"
              value={userInfo?.firstName || ''}
              readOnly // Non modifiable
            />
          </label>
          
          {/* Champ en lecture seule : Last name */}
          <label >
            Last name:
            <input 
            className="input"
              type="text"
              name="lastName"
              value={userInfo?.lastName || ''}
              readOnly // Non modifiable
            />
          </label>
          
          {/* Boutons d'action */}
          <div className="modal-buttons">
            {/* Bouton de sauvegarde */}
            <button type="submit" onClick={handleSave}>
              Save
            </button>
            {/* Bouton d'annulation */}
            <button className="modal-close" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      
      {/* Affichage des comptes bancaires dans la modale */}
      {/* Compte courant */}
      <Wrapper
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
        inModal={true} // Indique que le composant est affiché dans la modale
      />
      
      {/* Compte épargne */}
      <Wrapper
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        amountDescription="Available Balance"
        inModal={true}
      />
      
      {/* Carte de crédit */}
      <Wrapper
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        amountDescription="Current Balance"
        inModal={true}
      />
    </div>
  );
};

export default Modal;