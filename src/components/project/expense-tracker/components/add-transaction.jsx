import React, { useState } from "react";
import "../expense-tracker.styles.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="formgroup">
          <label htmlFor="text">Text</label>
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="formgroup">
          <label htmlFor="text">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            className="form-control"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn btn-info">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
