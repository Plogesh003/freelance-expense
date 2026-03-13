import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense, index) => index !== id));
  };

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter(expense => expense.category === filter);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <Filter setFilter={setFilter} />
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />
      <h3>Total Spent: ₹{expenses.reduce((total, expense) => total + parseInt(expense.amount), 0)}</h3>
    </div>
  );
}

export default App;
