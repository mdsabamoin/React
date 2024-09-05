import ExpenseItem from "./component/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <p>I am Learning React</p>
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price="50"
        location="Bangalore"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
        location="Delhi"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
        location="Hyderabad"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price="200"
        location="Mumbai"
      ></ExpenseItem>
    </div>
  );
}

export default App;
