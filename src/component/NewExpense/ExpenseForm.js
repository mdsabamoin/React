import React, { useState } from "react";
import "./ExpenseForm.css";
let obj={title:"",amount:"",date:""};
const ExpenseForm = () => {
  const [userInput, setuserInput] = useState(obj);
  const [amount, setAmount] = useState(0);
  const [date , setDate] = useState("2023-01-01")
  const titleChangeHandler = (event) => {
    setuserInput((prevState)=>{
      return{
        ...prevState , title:event.target.value
      }
    })
  };
  const AmountHandle = (event)=>{
    setuserInput((prevState)=>{
      return{
        ...prevState , amount:event.target.value
      }
    })
  }
  const DateHandle = (event) => {
    setuserInput((prevState)=>{
      return{
        ...prevState , date:event.target.value
      }
    })
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={AmountHandle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2023-01-01" max="2024-12-31" onChange={DateHandle} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
