import "../components/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../components/Card";

function ExpenseItem(props) {
  console.log("expenseItem props -->> " + JSON.stringify(props));
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
      </div>
      <div>{props.name}</div>
    </Card>
  );
}
export default ExpenseItem;
