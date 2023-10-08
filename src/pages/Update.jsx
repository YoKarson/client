import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
//import { useNaviagte } from "react-router-dom";

const Update = () => {
  const [expense, setExpense] = useState({
    expenseName: "",
    expenseAmount: "",
    expenseDate: "",
    expenseType: "",
  });

  const location = useLocation();

  const expenseId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setExpense((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/expenses/" + expenseId, expense);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="right-section">
      <div className="form">
        <h1>Update an expense</h1>
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

        <input
          type="text"
          placeholder="Type of Transaction"
          onChange={handleChange}
          name="expenseType"
        />

        <button className="form-button" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
