import React from "react";
import { useState } from "react";
import axios from "axios";

const Add = () => {
  const [expense, setExpense] = useState({
    expenseName: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const handleChange = (e) => {
    setExpense((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/expenses", expense);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="right-section">
      <div className="form">
        <input
          type="text"
          placeholder="Transaction Name"
          onChange={handleChange}
          name="expenseName"
        />

        <input
          type="number"
          placeholder="Transaction Amount"
          onChange={handleChange}
          name="expenseAmount"
        />

        <input
          type="text"
          placeholder="Transaction Date"
          onChange={handleChange}
          name="expenseDate"
        />

        <input
          type="text"
          placeholder="Type of Transaction"
          onChange={handleChange}
          name="expenseType"
        />

        <button className="form-button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
