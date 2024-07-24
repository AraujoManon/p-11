// User.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../Wrappers';
import { Button } from '../Buttons';
import Modal from '../Modal';

export const User = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <main className={`main ${isModalOpen ? 'bg-light' : 'bg-dark'}`}>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        {!isModalOpen && (
          <>
            <div className="header">
              <h1>
                Welcome back
                <br />
                {userInfo ? `${userInfo.userName}` : 'User'}
              </h1>
              <Button className="edit-button" text="Edit Name" onClick={openModal} />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Wrapper
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              amountDescription="Available Balance"
            />
            <Wrapper
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              amountDescription="Available Balance"
            />
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
