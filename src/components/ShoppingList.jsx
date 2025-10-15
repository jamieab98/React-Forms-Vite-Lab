import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedCategory, setSearchedCategory] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemCat, setNewItemCat] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setSearchedCategory(event.target.value);
  }
  function handleNewName(event) {
    setNewItemName(event.target.value);
  }
  function handleNewItemCat(event) {
    setNewItemCat(event.target.value);
    console.log(newItemCat);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: items.length + 1,
      name: newItemName,
      category: newItemCat,
    };
    console.log(newItem)
    addNewItems(newItem)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchedCategory === "") return true;
    if (item.category === selectedCategory) return item.category;
    if (item.name.toLowerCase().includes(searchedCategory.toLowerCase())) return item.name;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemName={handleNewName} onItemCat={handleNewItemCat} handleSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;