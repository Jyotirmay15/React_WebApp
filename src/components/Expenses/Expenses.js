import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className = "expenses">
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      />
      <ExpenseItem
        title={props[1].title}
        amount={props[1].amount}
        date={props[1].date}
      />
      <ExpenseItem
        title={props[2].title}
        amount={props[2].amount}
        date={props[2].date}
      />
    </Card>
  );
}

export default Expenses;
