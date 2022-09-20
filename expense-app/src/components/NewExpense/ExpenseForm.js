import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  console.log(props);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{ marginRight: "113px" }}>Name</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Enter name here..."
          />
        </div>
        <div className="new-expense__control">
          <label style={{ marginRight: "97px" }}>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="Enter amount here..."
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="btn-add">
          ADD
        </button>
        <button
          type="button"
          onClick={props.onCancelExpense}
          className="btn-cancel"
        >
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
