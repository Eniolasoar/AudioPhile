// src/components/RadioOption.tsx
import React from "react";

interface RadioOptionProps {
  value: string;
  label: string;
  selected: string;
  register: any;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  value,
  label,
  selected,
  register,
}) => {
  const isSelected = selected === value;

  return (
    <label
      className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer ${
        isSelected ? "border-[var(--color-primary)]" : "border-[#CFCFCF]"
      }`}
    >
      <input
        {...register("paymentMethod")}
        type="radio"
        value={value}
        className="sr-only"
      />
      <span
        aria-hidden
        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
          isSelected ? "border-[var(--color-primary)]" : "border-[#CFCFCF]"
        }`}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            isSelected ? "bg-[var(--color-primary)]" : "bg-transparent"
          }`}
        />
      </span>
      <div>
        <div className="font-bold">{label}</div>
      </div>
    </label>
  );
};

export default RadioOption;

