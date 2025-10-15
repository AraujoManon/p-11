import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/argentBankLogo.webp";
import { logoutUser } from "../../redux/reducers/AuthSlice";
import { selectIsModalOpen, closeModal } from "../../redux/reducers/ModalSlice";
import greenLogo from "../images/ArgentBankGreen.webp";

const Header = () => {
  // Hook Redux pour dispatcher les actions
  const dispatch = useDispatch();
  
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();
  
  // Récupération du token et des informations utilisateur depuis le store Redux
  const { userToken, userInfo } = useSelector((state) => state.auth);
  
  // Récupération de l'état de la modale
  const isModalOpen = useSelector(selectIsModalOpen);

  // Gestion de la déconnexion
  const handleLogout = () => {
    dispatch(logoutUser());      // Déconnecte l'utilisateur
    dispatch(closeModal());      // Ferme la modale si ouverte
    navigate("/");               // Redirige vers la page d'accueil
  };
  
  // Gestion de la fermeture de la modale
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <header>
      <nav className="main-nav">
        {/* Navigation différente selon si la modale est ouverte ou non */}
        {isModalOpen ? (
          // Navigation verte affichée quand la modale est ouverte
          <div className="greenNav">
            <img src={greenLogo} alt="Argent Bank Logo" />
            <div className="greenLogo">
              {/* Affichage du nom d'utilisateur */}
              <div className="containerGreenUser">
                <p className="greenUser">
                  {userInfo ? `${userInfo.userName}` : "User"}
                </p>
                <i className="fa fa-circle-user"></i>
              </div>
              {/* Icône paramètres */}
              <i className="fa fa-gear"></i>
              {/* Icône déconnexion - ferme la modale et déconnecte */}
              <i className="fa fa-power-off" onClick={() => {handleLogout(); handleCloseModal();}}></i>
            </div>
          </div>
        ) : (
          // Navigation normale affichée quand la modale est fermée
          <>
            {/* Logo cliquable qui redirige vers la page d'accueil */}
            <NavLink className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
            </NavLink>
            
            <div>
              {/* Affichage conditionnel selon l'état de connexion */}
              {userToken ? (
                // Menu utilisateur connecté
                <div className="main-nav-item-out" >
                  <i className="fa fa-user-circle"></i>
                  {/* Affichage du nom d'utilisateur ou "User" par défaut */}
                  {userInfo ? `${userInfo.userName}` : "User"}
                  {/* Icône et texte de déconnexion */}
                  <i className="fa fa-sign-out" onClick={handleLogout}></i>
                  <p onClick={handleLogout}>Sign Out</p>
                </div>
              ) : (
                // Lien de connexion pour utilisateur non connecté
                <NavLink className="main-nav-item" to="/login">
                  <i className="fa fa-user-circle"></i>
                  Sign In
                </NavLink>
              )}
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;