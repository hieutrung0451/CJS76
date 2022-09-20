import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Some Book",
      amount: 50,
      date: new Date(2022, 0, 14),
    },
    {
      id: 2,
      title: "Electricity Bill",
      amount: 75,
      date: new Date(2022, 9, 12),
    },
    {
      id: 3,
      title: "New Bike",
      amount: 100,
      date: new Date(2022, 4, 28),
    },
  ]);

  const [show, isShown] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    hideNewExpenses();
  };

  const showNewExpenses = () => {
    isShown(true);
  };

  const hideNewExpenses = () => {
    isShown(false);
  };

  const deleteExpenseHandler = (id) => {
    const listExpenseTemp = [...expenses];
    const expense = listExpenseTemp.filter((element) => !(element.id === id));
    console.log(expense);
    setExpenses(expense);
  };

  return (
    <div>
      {!show && (
        <div className="new-expense">
          <button onClick={showNewExpenses}>ADD NEW EXPENSE</button>
        </div>
      )}
      {show && (
        <NewExpense
          onAddExpense={addExpenseHandler}
          onCancelExpense={hideNewExpenses}
        />
      )}
      <Expenses items={expenses} delete={deleteExpenseHandler} />
    </div>
  );
};

export default App;
