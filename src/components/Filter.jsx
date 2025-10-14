import React from "react";
import { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {

  const [searchItem, setSearchItem] = useState("");

  function handleChange(e) {
    setSearchItem(e.target.value);
    onSearchChange(e);
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." 
        value={searchItem}
        onChange={handleChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;