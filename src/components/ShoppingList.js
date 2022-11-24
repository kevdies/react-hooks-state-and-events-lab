import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // console.log(items);
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleCategoryChange(event) {
    // event.target.value will be the value selected by the user
    setSelectedCategory(event.target.value);
  }

  // we want to filter the items to only display the ones based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;//if so it will display all items below//when using this filter remember to take new const variable  arr somewhere to display the selected item/s

    return item.category === selectedCategory;

  });
  console.log(itemsToDisplay);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
