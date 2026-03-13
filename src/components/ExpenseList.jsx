import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses List</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              id={index}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
