import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const handleRemoveExpense = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="btn-delete" onClick={handleRemoveExpense}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
