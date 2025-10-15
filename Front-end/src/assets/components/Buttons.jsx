import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../scss/button.scss'; 

const Button = ({ text = 'Click Me', onClick = () => {}, to, className }) => {
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Gestion du clic sur le bouton
  const handleClick = (event) => {
    // Exécute la fonction onClick si elle est fournie
    if (onClick) onClick(event); 
    
    // Navigue vers la route spécifiée si la prop 'to' est fournie
    if (to) navigate(to); 
  };

  return (
    <button
      type="submit"
      className={className} // Classe CSS personnalisée
      onClick={handleClick}
    >
      {text} {/* Texte affiché sur le bouton */}
    </button>
  );
};

// Validation des types de props pour assurer la cohérence
Button.propTypes = {
  text: PropTypes.string,      // Texte du bouton
  onClick: PropTypes.func,     // Fonction appelée au clic
  className: PropTypes.string, // Classe CSS personnalisée
  to: PropTypes.string,        // Route de navigation
};

export { Button };