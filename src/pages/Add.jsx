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
          placeholder="Name of the expense"
          onChange={handleChange}
          name="expenseName"
        />

        <input
          type="number"
          placeholder="Amount of the expense"
          onChange={handleChange}
          name="expenseAmount"
        />

        <input
          type="text"
          placeholder="Date of the expense"
          onChange={handleChange}
          name="expenseDate"
        />

        <button className="form-button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
