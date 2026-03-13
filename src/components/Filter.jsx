function Filter({ setFilter }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>Filter by category:</label>
      <select
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: '8px' }}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default Filter;
