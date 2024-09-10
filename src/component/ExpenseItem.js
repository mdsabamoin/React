import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js"
import React , {useState} from "react";
import Card from "./Card"
function ExpenseItem(props) {
  const [title , setTitle] = useState(props.title);
  function handlebutton(event){
    setTitle("New Title");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button  width="20"onClick={handlebutton}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
