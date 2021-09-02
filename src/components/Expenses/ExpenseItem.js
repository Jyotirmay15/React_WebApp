import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const expenseAmount = props.amount;

  const [expenseTitle, setexpenseTitle] = useState(props.title);

  const clickHandler = () => {
    console.log('clicked');
    setexpenseTitle("Updated");
};


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
