"use client";

import { useCallback, useReducer } from "react";

type Action = "increment" | "decrement";

function countReducer(state: number, action: Action): number {
  switch (action) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

export default function Page() {
  const [count, dispatch] = useReducer(countReducer, 0);

  const decrement = useCallback(() => {
    dispatch("decrement");
  }, []);

  const increment = useCallback(() => {
    dispatch("increment");
  }, []);

  return (
    <div>
      <h1>Use Reducer</h1>
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
