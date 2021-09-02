import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Life Insurance", amount: 394.67, date: new Date(2021, 2, 29) },
    { title: "Health Insurance", amount: 594.67, date: new Date(2021, 2, 30) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses {...expenses} />
    </div>
  );
}

export default App;
