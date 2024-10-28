"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // set items to an array that contains all of the ...items objects and the new item
  // it must be an array since it needs to be sorted in item-list.js
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-text text-4xl font-bold">shopping list</h1>
      <NewItem handleAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
