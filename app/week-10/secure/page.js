"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import React from "react";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";

export default function ShoppingListPage({ user }) {
  const [items, setItems] = useState([
    {
      id: "1h2GJKH12gkHG31h1H",
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      id: "1h2GJKH12gkHG31h1H",
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
  ]);
  const [selectedItemName, setSelectedItemName] = useState("chicken");

  const loadItems = async () => {
    setItems([
      {
        id: "1h2GJKH12gkHG31h1H",
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      },
    ]);
    //setItems(await getItems(user.uid));
  };

  useEffect(() => {
    loadItems();
  }, []);

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
    addItem(item);
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
