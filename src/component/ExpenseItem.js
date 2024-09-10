import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js"
import Card from "./Card"
function ExpenseItem(props) {
  function handlebutton(event){
    console.log("Button clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={handlebutton}></button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
