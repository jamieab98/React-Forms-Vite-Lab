import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemName, onItemCat, handleSubmit}) {


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;