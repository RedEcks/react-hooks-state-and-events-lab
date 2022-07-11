import React, { useState } from "react";



function Item({ name, category }) {

  const [items, setItems] = useState(false)
  const itemClass = items ? "" : "add"
  const item = items ? "Remove From Cart" : "Add to Cart"

  function itemChange(){
    return setItems(!items)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemClass} onClick={itemChange}>{item}</button>
    </li>
  );
}

export default Item;
