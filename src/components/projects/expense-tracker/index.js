import React from "react";

import Balance from "./components/balance";
import IncomeExpenses from "./components/income-expenses";
import Transactions from "./components/transactions";
import AddTransaction from "./components/add-transaction";

import { GlobalProvider } from "./context/global-state";

import "./expense-tracker.styles.css";

const ExpenseTracker = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>ExpenseTracker</h1>
        <Balance />
        <hr />
        <IncomeExpenses income="20" expense="10" />
        <hr />
        <Transactions transactions={[]} />
        <hr />
        <AddTransaction />
        <hr />
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
