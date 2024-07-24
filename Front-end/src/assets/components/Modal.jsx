import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../redux/reducers/AuthActions'; 
import Wrapper from "./Wrappers";
import "../scss/modal.scss";

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (isOpen) {
      dispatch(getUserProfile());
    }
  }, [isOpen, dispatch]);

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.userName || ''); 
    }
  }, [userInfo]);

  const handleSave = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(updateUserProfile({ userName: username })); 
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="main-modal">
      <h2>Edit user info</h2>
      <div className="form-group">
        <form>
          <label>
            User name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label >
            First name:
            <input className="input "
              type="text"
              name="firstName"
              value={userInfo?.firstName || ''}
              readOnly
            />
          </label>
          <label >
            Last name:
            <input 
            className="input"
              type="text"
              name="lastName"
              value={userInfo?.lastName || ''}
              readOnly
            />
          </label>
          <div className="modal-buttons">
            <button type="submit" onClick={handleSave}>
              Save
            </button>
            <button className="modal-close" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Wrapper
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
        inModal={true}
      />
      <Wrapper
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        amountDescription="Available Balance"
        inModal={true}
      />
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

