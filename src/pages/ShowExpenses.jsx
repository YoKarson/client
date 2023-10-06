import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState([]);

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        const res = await axios.get("http://localhost:8800/expenses");
        setExpenses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllExpenses();
  });

  useEffect(() => {
    const fetchTotalExpense = async () => {
      try {
        const res = await axios.get("http://localhost:8800/totalExpense");
        setTotalExpense(parseFloat(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchTotalExpense();
  });

  const handleDelete = async (expenseId) => {
    try {
      await axios.delete("http://localhost:8800/expenses/" + expenseId);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="expenses">
      <h2>Total Expenses: $ {totalExpense}</h2>
      {expenses.map((expense) => (
        <div className="all-expense-data" key={expense.expenseId}>
          <div className="expense-data">
            <h3>Expense: {expense.expenseName}</h3>
            <h3>Amount: ${expense.expenseAmount}</h3>
            <h3>Date: {expense.expenseDate}</h3>
          </div>
          <button
            className="delete"
            onClick={() => handleDelete(expense.expenseId)}
          >
            Delete
          </button>
          <button className="update">
            <Link to={`/Update/${expense.expenseId}`}>Update</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowExpenses;
