// src/components/FormField.tsx
import React from "react";
import type { UseFormRegisterReturn,FieldError } from "react-hook-form";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type = "text",
  error,
  registration,
  className = "",
}) => {
  return (
    <label className={`flex flex-col ${className}`}>
      <div className="flex justify-between">
        <span className="label">{label}</span>
        {error && (
          <span role="alert" className="text-[#CD2C2C] text-xs mt-1">
            {error.message}
          </span>
        )}
      </div>

      <input
        {...registration}
        type={type}
        aria-invalid={error ? "true" : "false"}
        placeholder={placeholder}
        className={`mt-2 border px-3 py-3 rounded-md text-black text-[14px] font-bold placeholder-gray-400
          ${error ? "border-[#CD2C2C]" : "border-[#CFCFCF]"}
          focus:outline-none focus:border-primary focus:ring-0`}
      />
    </label>
  );
};

export default FormField;
