import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/reducers/AuthSlice';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Récupération de l'état d'authentification depuis Redux
  const isAuth = useSelector(selectIsAuth);
  
  // Récupération de la localisation actuelle pour la redirection
  const location = useLocation();

  return isAuth ? (
    // Si l'utilisateur est authentifié, affiche le composant demandé
    <Element />
  ) : (
    // Sinon, redirige vers la page de connexion
    // state={{ from: location }} permet de revenir à la page demandée après connexion
    // replace remplace l'historique pour éviter de revenir en arrière vers cette route protégée
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;