import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense({ title, amount, category });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      >
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit" style={{ padding: '8px 16px' }}>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
