import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCatagory, setSelectedCatagory] = useState("All")

  function handleCatagoryChange(event){
    console.log("event",event.target.value)
    setSelectedCatagory(event.target.value)
  }



  
  const results = items.filter((item)=>{
    if(selectedCatagory==="All")return true;
    return item.category===selectedCatagory

  })
  
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatagoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {results.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
