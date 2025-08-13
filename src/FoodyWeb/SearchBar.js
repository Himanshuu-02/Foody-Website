
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    onSearch(input); // ✅ search only when button is clicked
  };
  return (
    <div>
      <span className="bar">
        <input
          type="text"
          placeholder="Search Your Favourite Restaurant......"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
