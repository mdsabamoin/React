// Write your code at relevant places in the code below:

import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [appearform , Setappearform] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    Setappearform(false);
  };

  return (
    <div className="new-expense">
      {!appearform && (<button type="button" onClick={()=>{Setappearform(true)}}>Add Expense</button>)}
      {appearform && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={()=>{Setappearform(false)}}/>)}
    </div>
  );
};

export default NewExpense;
