// Write your code at relevant places in the code below:

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
const [title , setTitle] = useState("");
const [date , setdate] = useState("");
const [amount , setamount] = useState("");

  
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setdate(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setamount(event.target.value);
  };

 function handleformSubmit(event){
   event.preventDefault();
   const obj={
     title:title,
     date:new Date(date),
     amount:amount
   }
   console.log(obj);
   setTitle("");
   setdate("");
   setamount("");
 }
  
  return (
    <form onSubmit={handleformSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount"  value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
