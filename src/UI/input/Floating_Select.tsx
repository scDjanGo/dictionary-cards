import { useState, useRef, useEffect } from "react";
import { CategoryType } from "@/lib/types/types";

type Props = {
  formData: { catId: string };
  errors: { catId?: boolean };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: CategoryType[];
  label?: string;
};

const Floating_Select: React.FC<Props> = ({
  formData,
  errors,
  handleChange,
  items,
  label = "Category / Категория",
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formData.catId && items.length > 0) {
      const fakeEvent = {
        target: { name: "catId", value: String(items[0].id) },
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(fakeEvent);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (id: number) => {
    const fakeEvent = {
      target: { name: "catId", value: String(id) },
    } as React.ChangeEvent<HTMLInputElement>;
    handleChange(fakeEvent);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full mb-0">
      <div
        className={`peer w-full px-3 pt-5 pb-3 border rounded-md bg-bgLight dark:bg-bgItem cursor-pointer flex justify-between items-center transition-colors duration-150 ease-out ${
          errors.catId
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-[#1976D2]"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span
          className={`${
            formData.catId ? "text-blueCl dark:text-bgLight" : "text-gray-400"
          }`}
        >
          {formData.catId
            ? items.find((i) => i.id === Number(formData.catId))?.name
            : ""}
        </span>

        <svg
          className={`w-6 h-6 ml-2 transform transition-transform duration-200 stroke-blueCl dark:stroke-bgLight ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Label */}
      <label
        className={`absolute left-3 z-10 origin-left transform transition-all duration-150 ease-out pointer-events-none text-xs px-[4px] bg-bgLight dark:bg-bgItem ${
          errors.catId ? "text-red-500" : "text-blueCl dark:text-bgLight"
        } ${
          formData.catId || open
            ? "top-[-8px] text-xs"
            : "top-1/2 -translate-y-1/2 text-base"
        }`}
      >
        {label}
      </label>

      {/* Dropdown */}
      <ul
        style={{
          scrollbarWidth: "none",
        }}
        className={`absolute w-full bg-bgLight dark:bg-bgItem  border border-blueCl dark:border-bgLight  rounded-md mt-1 max-h-60 overflow-auto shadow-md transition-all duration-200 ease-out z-20 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="px-3 py-2 text-blueCl dark:text-bgLight hover:bg-gray-100 dark:hover:bg-bgDark cursor-pointer"
          >
            {item.name} /{item.intlName}
          </li>
        ))}
      </ul>

      {/* Error message */}
      {errors.catId && (
        <p className="mt-1 text-xs text-red-500">Выберите категорию</p>
      )}
    </div>
  );
};

export default Floating_Select;
