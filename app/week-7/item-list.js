"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  // function to sort items alphabetically by product category
  console.log("Items", items);
  items.sort((a, b) => {
    if (sortBy == "name") {
      const cat1 = a.name.toUpperCase();
      const cat2 = b.name.toUpperCase();
      return cat1 < cat2 ? -1 : cat1 > cat2 ? 1 : 0;
    } else if (sortBy == "category") {
      const cat1 = a.category.toUpperCase();
      const cat2 = b.category.toUpperCase();
      return cat1 < cat2 ? -1 : cat1 > cat2 ? 1 : 0;
    }
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <p>sort by:</p>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={() => setSortBy("name")}
            className={`px-5 py-2 ${sortBy == "name" ? "bg-text text-pink" : "bg-pink text-text"}`}
          >
            name
          </button>
          <button
            type="button"
            onClick={() => setSortBy("category")}
            className={`px-5 py-2 ${sortBy == "name" ? "bg-pink text-text" : "bg-text text-pink"}`}
          >
            category
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {items.map((item, index) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}
