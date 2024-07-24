<<<<<<< HEAD
// Wrapper.js
import React from "react";
import { Button } from "./Buttons"; 
import "../scss/wrapper.scss";

const Wrapper = ({ title, amount, amountDescription, inModal = false }) => {
=======
import React from "react";
import { Button } from "./Buttons"; 
import "../scss/wrapper.scss";
const Wrapper = ({ title, amount, amountDescription }) => {
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
<<<<<<< HEAD
      <div className={`account-content-wrapper cta ${inModal ? 'hidden' : ''}`}>
=======
      <div className="account-content-wrapper cta">
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
        <Button
          text="View transactions"
          to={"/user"}
          className="transaction-button"
        />
      </div>
<<<<<<< HEAD
      {inModal && <i class="fa fa-angle-right"></i>}
=======
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
    </section>
  );
};

export default Wrapper;
<<<<<<< HEAD


=======
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
