import Link from "next/link";
import { PREPOSITIONS } from "@/data/prepositions";

export default function Prepositions_Navbar() {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-full flex justify-start gap-3 rounded-md overflow-x-auto mb-[16px]"
    >
      {PREPOSITIONS.map((category) => (
        <Link
          key={category.link}
          href={category.link}
          className="px-4 py-3 rounded-xl text-[14px] text-nowrap bg-blueCl dark:bg-bgItem text-white font-medium hover:bg-blue-700 dark:hover:bg-gray-700 transition-transform hover:scale-105 active:scale-95 shadow-md"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
