import React from "react";

type FloatingLabelProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  type?: string;
  id?: string;
  className?: string;
  autoComplete?: string;
};

const Floating_Input: React.FC<FloatingLabelProps> = ({
  label,
  name,
  value,
  onChange,
  error = false,
  helperText,
  type = "text",
  id,
  className = "",
  autoComplete = "off",
}) => {
  const inputId = id || name;

  return (
    <div className={`relative mb-0 group ${className}`}>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete={autoComplete}
        className={`peer w-full px-3 pt-5 pb-2 border rounded-md bg-light transition-colors duration-150 ease-out focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-[#1976D2] dark:focus:border-bgLight"
        } hover:border-gray-500 dark:hover:border-white dark:text-bgLight`}
      />

      <label
        htmlFor={inputId}
        className={`absolute left-3 z-10 origin-left transform transition-all duration-150 ease-out pointer-events-none bg-bgLight dark:bg-bgItem  px-[4px]
      text-xs 
      ${error ? "text-red-500" : "text-gray-500 dark:text-bgLight"}
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
      peer-focus:top-[-8px] peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1976D2] dark:peer-focus:text-bgLight group-hover:translate-y-[-8px]
      top-[-8px]
    `}
      >
        {label}
      </label>

      {helperText && (
        <p
          className={`mt-1 text-xs ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Floating_Input;
