import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpenseContainer.css";

const ExpenseContainer = () => {
  const [itemData, setItemData] = useState([
    {
      id: 1,
      month: "January",
      year: 2022,
      day: 16,
      title: "Some Book",
      money: 50,
    },
    {
      id: 2,
      month: "October",
      year: 2022,
      day: 10,
      title: "Electricity Bill",
      money: 75,
    },
    {
      id: 3,
      month: "May",
      year: 2022,
      day: 8,
      title: "New Bike",
      money: 100,
    },
  ]);

  return (
    <div className="expense-container">
      {itemData.map((item) => {
        return (
          <ExpenseItem
            month={item.month}
            year={item.year}
            day={item.day}
            title={item.title}
            money={item.money}
          />
        );
      })}
    </div>
  );
};

export default ExpenseContainer;
