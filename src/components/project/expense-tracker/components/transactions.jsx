import React from "react";

import Transaction from "./transaction";
import "../expense-tracker.styles.css";

const Transactions = ({ transactions }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default Transactions;
