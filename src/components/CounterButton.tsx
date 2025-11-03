// components/CounterButton.tsx
import React from "react";

interface CounterButtonProps {
  value: number;
  onChange: (value: number) => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ value, onChange }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <div className="flex items-center bg-gray-200 text-gray-700 rounded-md">
      <button
        onClick={decrement}
        className="px-3 py-2 text-gray-500 hover:text-white hover:bg-primary transition"
      >
        -
      </button>
      <span className="px-4 font-semibold">{value}</span>
      <button
        onClick={increment}
        className="px-3 py-2 text-gray-500 hover:text-white hover:bg-primary transition"
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
