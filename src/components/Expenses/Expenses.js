import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

// note about filtering: originally i had a solution with useState and destructuring
// initial state is props.expenses, consts are filteredExpenses and setFilteredExpenses
// in the same handler as year is filtered, I automatically filtered arr, and then mapped through
// improvement: make an "ALL" choice that displays all expenses
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onChangeFilterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // create filtered copy to display
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={onChangeFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
