import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const date = new Date().toLocaleString();
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
        date={date}
        expenseTitle={"Car Insurance"}
        expensePrice={294.67}
      />
      <ExpenseItem
        date={date}
        expenseTitle={"Bike Insurance"}
        expensePrice={123.79}
      />
      <ExpenseItem
        date={date}
        expenseTitle={"Health Insurance"}
        expensePrice={98.78}
      />
    </div>
  );
}

export default App;
