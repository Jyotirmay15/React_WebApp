import { useState } from 'react/cjs/react.development';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expneses = [
  { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "Life Insurance", amount: 394.67, date: new Date(2021, 2, 29) },
  { id: 'e3', title: "Health Insurance", amount: 594.67, date: new Date(2021, 2, 30) },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expneses);

  const addExpenseDataHandler = (newExpenseData) => {
    setExpenses(prevExpenses => {
      return [newExpenseData, ...prevExpenses];
    });
  }


  return (
    <div>
      <NewExpense onaddExpenseData = {addExpenseDataHandler}/> 
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
