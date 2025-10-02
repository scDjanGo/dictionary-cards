"use client";

type RadioOptionProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  icon?: React.ReactNode;
};

export default function Custom_Radio({
  label,
  value,
  checked,
  onChange,
  icon,
}: RadioOptionProps) {
  return (
    <div
      onClick={onChange}
      className={`flex items-center gap-2 cursor-pointer select-none text-xl px-3 py-2 rounded-lg border-2 transition 
        ${
          checked
            ? "border-blueCl  dark:border-bgLight bg-blueCl dark:bg-bgDark text-bgLight"
            : "border-gray-400 dark:border-gray-600 bg-transparent dark:text-bgLight"
        }
      `}
    >
      {icon && <span className="w-6 h-6">{icon}</span>}
      {label}
    </div>
  );
}
