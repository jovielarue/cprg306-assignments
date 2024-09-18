"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  return (
    <div className="flex gap-3 justify-around items-center min-w-[20%] max-w-[50%] bg-text overflow-clip">
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
  );
}
