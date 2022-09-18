import React from "react";
import "../css/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="date">
        <span className="month">{props.month}</span>
        <span className="year">{props.year}</span>
        <span className="day">{props.day}</span>
      </div>
      <h2 className="title">{props.title}</h2>
      <span className="money">$ {props.money}</span>
    </div>
  );
};

export default ExpenseItem;
