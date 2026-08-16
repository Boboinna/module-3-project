function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <label className="form-group">
      Category
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Soda">Sodas</option>
        <option value="Beer">Beers</option>
        <option value="Juice">Juices</option>
      </select>
    </label>
  );
}

export default CategoryFilter;