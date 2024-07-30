// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/reducers/AuthSlice';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? (
    <Element />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
