import React from "react";
import { useState } from "react";
import axios from "axios";

const Add = () => {
  const [expense, setExpense] = useState({
    expenseName: "",
    expenseAmount: "",
    expenseMonth: "",
    expenseDay: "",
    expenseYear: "",
    expenseType: "",
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
          placeholder="Transaction Month"
          onChange={handleChange}
          name="expenseMonth"
        />
        <input
          type="text"
          placeholder="Transaction Day"
          onChange={handleChange}
          name="expenseDay"
        />
        <input
          type="text"
          placeholder="Transaction Year"
          onChange={handleChange}
          name="expenseYear"
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
