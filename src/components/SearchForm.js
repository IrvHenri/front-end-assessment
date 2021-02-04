import React from "react";

function SearchForm({ inputName, setInputName }) {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        className="search-field"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
    </div>
  );
}

export default SearchForm;
