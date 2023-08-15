"use client";

import { useCallback, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => {
    setCount((currCount) => currCount - 1);
  }, []);

  const increment = useCallback(() => {
    setCount((currCount) => currCount + 1);
  }, []);

  return (
    <div>
      <h1>Use State</h1>
      <div className="flex flex-row gap-4 items-center">
        <button
          className="rounded-full h-10 w-10 bg-purple-700 text-white"
          onClick={decrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="rounded-full h-10 w-10 bg-purple-700 text-white"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
