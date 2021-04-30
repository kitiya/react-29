import React from "react";
import "../expense-tracker.styles.css";

const Transaction = ({ transaction, sign, deleteTransaction }) => {
  return (
    <>
      <h3>History</h3>

      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
