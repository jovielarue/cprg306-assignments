"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  };

  const decrement = () => {
    setQuantity(quantity > 0 ? quantity - 1 : quantity);
  };

  return (
    <div className="flex gap-3 justify-around items-center w-[20vw] bg-text overflow-clip">
      <button
        className="px-3 py-2 bg-pink text-2xl w-[5vw] h-[5vw]"
        onClick={decrement}
      >
        -
      </button>
      <div className="w-full text-center bg-text text-blue font-bold text-xl">
        {quantity}
      </div>
      <button
        className="px-3 py-2 bg-pink text-2xl w-[5vw] h-[5vw]"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
