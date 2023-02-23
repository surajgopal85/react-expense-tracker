import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const formDisplayHandler = () => {
    setIsFormVisible(true);
  };

  const cancelEditHandler = () => {
    setIsFormVisible(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={formDisplayHandler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
