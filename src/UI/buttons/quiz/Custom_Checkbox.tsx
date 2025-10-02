"use client"

import { Shuffle } from "lucide-react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  icon?: React.ReactNode;
};

export default function Custom_Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <div
      onClick={onChange}
      className={`flex items-center gap-2 cursor-pointer select-none text-xl px-3 py-2 rounded-lg border-2 transition 
        ${
          checked
            ? "border-blueCl dark:border-bgLight  bg-blueCl dark:bg-bgDark text-bgLight  "
            : "border-gray-400 dark:border-gray-600 bg-transparent dark:text-bgLight"
        }
      `}
    >
      <Shuffle
        className={`w-7 h-7 text-[#000000] dark:text-bgLight ${
          checked ? "!text-bgLight" : ""
        }`}
      />
      {label}
    </div>
  );
}