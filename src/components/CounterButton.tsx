import { useState } from "react";

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center bg-gray-1 px-2 py-4 gap-6 ">
      <button
        onClick={() => setCount((prev) => Math.max(1, prev - 1))}
        className="text-gray-500  hover:text-primary px-2 rounded hover:cursor-pointer"
      >
        -
      </button>
      <span className="text-black font-semibold">{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="text-gray-500  hover:text-primary px-2 rounded hover:cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
