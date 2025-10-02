"use client"
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
};

export default function Custom_Button({ children, onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 text-lg px-6 py-3 rounded-lg font-bold shadow-md
        bg-blueCl text-bgLight hover:bg-blue-700 transition dark:bg-bgItem dark:text-bgLight dark:border dark:border-bgLight dark:hover:bg-bgLight dark:hover:text-bgItem"
    >
      {children}
      {icon}
    </button>
  );
}