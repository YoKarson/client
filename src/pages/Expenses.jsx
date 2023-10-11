import React from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
import ShowExpenses from "./ShowExpenses";

import { Routes, Route } from "react-router-dom";

const Expenses = () => {
  return (
    <div className="expense-container">
      <div className="top-section">
        <h1 className="logo">Expense Tracker</h1>
      </div>
      <div className="left-and-right-section">
        <div className="left-side-bar">
          <button className="side-bar-button">
            <Link to="/">Dashboard</Link>
          </button>
          <button className="side-bar-button">
            <Link to="/ShowExpenses">Transactions</Link>
          </button>
          <button className="side-bar-button">
            <Link to="/Add"> Add a new transaction</Link>
          </button>
        </div>
        <div className="around-right-and-body">
          <div className="right-section">
            {/*I put this here so the add an expense bar will always stay at the top*/}
            <Routes>
              <Route path="/Add" element={<Add />} />
            </Routes>

            <div className="body">
              <Routes>
                <Route path="/ShowExpenses" element={<ShowExpenses />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="right-side-bar">
          <button className="right-side-bar-button">Sort by month</button>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
