import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState([]);
  const [totalIncome, setTotalIncome] = useState([]);

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
        const res = await axios.get("http://localhost:8800/totalExpense", {
          params: { expenseType: "expense" },
        });
        setTotalExpense(parseFloat(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchTotalExpense();
  });

  useEffect(() => {
    const fetchTotalIncome = async () => {
      try {
        const res = await axios.get("http://localhost:8800/totalIncome", {
          params: { expenseType: "income" },
        });
        setTotalIncome(parseFloat(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchTotalIncome();
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
      <h2>Total Balance: ${totalIncome - totalExpense}</h2>
      <div className="expense-income">
        <h3>Total Expenses: $ {totalExpense}</h3>
        <h3>Total Income: $ {totalIncome}</h3>
      </div>
      {expenses.map((expense) => (
        <div className="all-expense-data" key={expense.expenseId}>
          <div className="expense-data">
            <ul>
              <li>{expense.expenseName}</li>
              <li>${expense.expenseAmount}</li>
              <li>{expense.expenseDate}</li>
              <li
                style={{
                  color: expense.expenseType === "expense" ? "red" : "green",
                }}
              >
                {expense.expenseType}
              </li>
            </ul>
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
