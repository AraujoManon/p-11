import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/argentBankLogo.png';
import { logoutUser } from '../../redux/reducers/AuthSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken, userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </NavLink>
        <div>
          {userToken ? (
            <div className="main-nav-item-out" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              {userInfo ? `${userInfo.userName}` : 'User'} 
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          ) : (
            <NavLink className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
