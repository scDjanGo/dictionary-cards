"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  intlName: string;
}

export default function CategoryAccordion() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expanded, setExpanded] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("my-categories");
    if (stored) {
      setCategories(JSON.parse(stored));
    }
  }, []);

  // Автоматическое закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-full mx-auto mt-1" ref={accordionRef}>
      <div
        className="border border-blueCl dark:border-bgLight  rounded-lg overflow-hidden"
        style={{ borderRadius: "8px" }}
      >
        {/* Header */}
        <button
          className="flex items-center justify-between w-full pl-[8.5px] pr-4 py-2 bg-blue-100 dark:bg-bgItem  font-semibold focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-blueCl dark:fill-bgLight"
                d="M3 4a1 1 0 011-1h7l2 2h8a1 1 0 011 1v2H3V4z"
              />
              <path
                className="fill-blueCl dark:fill-bgLight"
                fillRule="evenodd"
                d="M3 8h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h8a1 1 0 100-2H8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-blueCl dark:text-bgLight">Мои категории</span>
          </div>
          {/* Expand Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-200 stroke-blueCl dark:stroke-bgLight ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Details */}
        <div
        style={{
          scrollbarWidth: "none"
        }}
          className={`transition-all duration-300 overflow-hidden ${
            expanded ? "max-h-96 p-2 overflow-y-auto" : "max-h-0 p-0"
          } bg-bgLight dark:bg-bgItem`}
        >
          {categories.length === 0 ? (
            <div className="text-gray-600">
              <p>Категории отсутствуют</p>
              <br />
              <Link
                href={`/create-category`}
                className="text-blueCl dark:text-bgLight"
              >
                Create / Добавить
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/my-cards/${cat.id}`}
                    className="flex items-center px-2 py-2 text-blueCl dark:text-bgLight  hover:bg-blue-50 dark:hover:bg-gray-600 rounded"
                  >
                    {/* Folder Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 min-w-5 min-h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 4a1 1 0 011-1h7l2 2h8a1 1 0 011 1v2H3V4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 8h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h8a1 1 0 100-2H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="line-clamp-2">
                      {cat.intlName} / {cat.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

