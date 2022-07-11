import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [onSwitch,setOnSwitch]=useState(false)

  const appClass = onSwitch ? "App dark" : "App light"

  function changeSwitch(){
    return setOnSwitch(!onSwitch)
  }

  const text = onSwitch ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeSwitch}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
