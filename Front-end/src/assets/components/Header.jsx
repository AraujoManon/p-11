import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/argentBankLogo.png";
import { logoutUser } from "../../redux/reducers/AuthSlice";
import { selectIsModalOpen, closeModal } from "../../redux/reducers/ModalSlice";
import greenLogo from "../images/ArgentBankGreen.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken, userInfo } = useSelector((state) => state.auth);
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(closeModal());  
    navigate("/");
  };
  const handleCloseModal = () => {
    dispatch(closeModal());  
  };

  return (
    <header>
      <nav className="main-nav">
        {isModalOpen ? (
          <div className="greenNav">
            <img src={greenLogo} alt="Argent Bank Logo" />
            <div className="greenLogo">
              <div className="containerGreenUser">
                <p className="greenUser">
                  {userInfo ? `${userInfo.userName}` : "User"}
                </p>
                <i className="fa fa-circle-user"></i>
              </div>
              <i className="fa fa-gear"></i>
              <i className="fa fa-power-off" onClick={() => {handleLogout(); handleCloseModal();}}></i>
            </div>
          </div>
        ) : (
          <>
            <NavLink className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
            </NavLink>
            <div>
              {userToken ? (
                <div className="main-nav-item-out" >
                  <i className="fa fa-user-circle"></i>
                  {userInfo ? `${userInfo.userName}` : "User"}
                  <i className="fa fa-sign-out" onClick={handleLogout}></i>
                  <p onClick={handleLogout}>Sign Out</p>
                </div>
              ) : (
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
