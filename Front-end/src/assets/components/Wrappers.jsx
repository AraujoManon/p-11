import React from "react";
import { Button } from "./Buttons";
import "../scss/wrapper.scss";

const Wrapper = ({ title, amount, amountDescription, inModal = false }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className={`account-content-wrapper cta ${inModal ? "hidden" : ""}`}>
        <Button
          text="View transactions"
          to={"/user"}
          className="transaction-button"
        />
      </div>
      {inModal && <i className="fa fa-angle-right"></i>}
    </section>
  );
};

export default Wrapper;
