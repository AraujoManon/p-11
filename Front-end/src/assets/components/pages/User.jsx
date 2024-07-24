import React from "react";
import Wrapper from "../Wrappers";
import { Button } from "../Buttons";
export const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button className="edit-button" text="Edit Name" to={"*"} />
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
    </main>
  );
};

export default User;
