import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../Wrappers';
import { Button } from '../Buttons';
import Modal from '../Modal';
import { selectIsModalOpen, openModal, closeModal } from '../../../redux/reducers/ModalSlice';
import { selectUserInfo } from '../../../redux/reducers/AuthSlice';

export const User = () => {
  // Hook Redux pour dispatcher les actions
  const dispatch = useDispatch();
  
  // Récupération de l'état de la modale depuis le store Redux
  const isModalOpen = useSelector(selectIsModalOpen);
  
  // Récupération des informations de l'utilisateur connecté depuis le store Redux
  const userInfo = useSelector(selectUserInfo);

  return (
    <>
      {/* Main avec classe dynamique selon l'état de la modale */}
      <main className={`main ${isModalOpen ? 'bg-light' : 'bg-dark'}`}>
        {/* Composant Modal avec gestion de l'ouverture/fermeture */}
        <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())} />
        
        {/* Affichage du contenu uniquement si la modale est fermée */}
        {!isModalOpen && (
          <>
            {/* En-tête avec message de bienvenue et bouton d'édition */}
            <div className="header">
              <h1>
                Welcome back
                <br />
                {/* Affichage du nom d'utilisateur ou "User" par défaut */}
                {userInfo ? userInfo.userName : 'User'}
              </h1>
              {/* Bouton pour ouvrir la modale d'édition du nom */}
              <Button className="edit-button" text="Edit Name" onClick={() => dispatch(openModal())} />
            </div>
            
            {/* Titre masqué pour l'accessibilité */}
            <h2 className="sr-only">Accounts</h2>
            
            {/* Liste des comptes bancaires de l'utilisateur */}
            {/* Compte courant */}
            <Wrapper
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              amountDescription="Available Balance"
            />
            
            {/* Compte épargne */}
            <Wrapper
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              amountDescription="Available Balance"
            />
            
            {/* Carte de crédit */}
            <Wrapper
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              amountDescription="Current Balance"
            />
          </>
        )}
      </main>
    </>
  );
};

export default User;