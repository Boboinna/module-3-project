import { useId } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const searchId = useId();

  return (
    <label htmlFor={searchId} className="form-group">
      Search drinks
      <input
        id={searchId}
        type="search"
        value={searchTerm}
        placeholder="Search by name"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;