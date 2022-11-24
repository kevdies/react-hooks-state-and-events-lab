import React, {useState} from "react";
/*
In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
*/
function Item({ name, category }) {
  const [addItem, setAddItem] = useState("false")
  const listClass = addItem ? "" : "in-cart";
  const cartButtonText = addItem ? "Add To Cart" : "Remove From Cart";
  const cartButtonClass = addItem ? "add" : "remove";
  function handleAddClick() {
    setAddItem((addItem) => !addItem);

  }

  return (
    <li className={listClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartButtonClass} onClick={handleAddClick}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
