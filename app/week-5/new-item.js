"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(
      `Current state of name is ${name}\nCurrent state of quantity is ${quantity}\nCurrent state of category is ${category}`,
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  return (
    <>
      <div className="flex flex-col gap-5 w-1/2">
        <div className="flex flex-col gap-2">
          <label for="productLabel" className="text-text font-bold">
            enter product name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 bg-pink text-text border-4 border-text"
            name="productLabel"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text font-bold">enter quantity</label>
          <div className="flex gap-3 justify-around items-center min-w-[20vw] max-w-[50vw] bg-text overflow-clip">
            <button
              className="flex justify-center px-5 py-2 bg-pink text-2xl min-w-[5vw] min-h-[5vw]"
              onClick={decrement}
            >
              -
            </button>
            <div className="w-full text-center bg-text text-blue font-bold text-xl">
              {quantity}
            </div>
            <button
              className="flex justify-center px-5 py-2 bg-pink text-2xl min-w-[5vw] min-h-[5vw]"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label for="productSelect" className="text-text font-bold">
            select category
          </label>
          <select
            name="productSelect"
            value={category}
            className="p-2 bg-pink"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">produce</option>
            <option value="dairy">dairy</option>
            <option value="bakery">bakery</option>
            <option value="meat">meat</option>
            <option value="frozen foods">frozen foods</option>
            <option value="canned goods">canned goods</option>
            <option value="dry goods">dry goods</option>
            <option value="beverages">beverages</option>
            <option value="snacks">snacks</option>
            <option value="household">household</option>
            <option value="other">other</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="self-center px-2 py-2 bg-text text-pink  hover:bg-pink hover:text-text font-bold w-1/2"
        >
          submit
        </button>
      </div>
    </>
  );
}
