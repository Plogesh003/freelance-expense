function ExpenseItem({ expense, deleteExpense, id }) {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee'
    }}>
      <span>
        {expense.title} - ₹{expense.amount} - {expense.category}
      </span>
      <button
        onClick={() => deleteExpense(id)}
        style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
      >
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;
