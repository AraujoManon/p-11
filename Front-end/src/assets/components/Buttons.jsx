import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../scss/button.scss'; 

const Button = ({ text = 'Click Me', onClick = () => {}, to, className }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) onClick(event); 
    if (to) navigate(to); 
  };

  return (
    <button
<<<<<<< HEAD
      type="submit"
=======
      type="button"
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
      className={className} 
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
};

export { Button };
