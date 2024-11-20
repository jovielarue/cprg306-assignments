"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import React from "react";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("chicken");

  const handleItemSelect = (item) => {
    const itemNameCleaned = item.name.replace(
      /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g,
      "",
    );

    setSelectedItemName(itemNameCleaned);
  };

  // set items to an array that contains all of the ...items objects and the new item
  // it must be an array since it needs to be sorted in item-list.js
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-text text-4xl font-bold">shopping list</h1>
      <NewItem handleAddItem={handleAddItem} />
      <ItemList onItemSelect={handleItemSelect} items={items} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
