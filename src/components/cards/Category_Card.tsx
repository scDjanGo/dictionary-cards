import { CategoryType } from "@/lib/types/types";
import Link from "next/link";

export default function Category_Card({
  category,
  href,
}: {
  category: CategoryType;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="relative cursor-pointer group mb-4">
        <div
          style={{ scrollbarWidth: "none" }}
          className="max-w-full overflow-x-hidden  relative z-10 flex flex-col items-center gap-1 p-4 rounded-lg bg-blueCl dark:bg-bgItem dark:drop-shadow-nd text-white text-[17.6px] uppercase font-medium transition-all duration-300 transform group-hover:-translate-y-1 group-active:translate-y-0 shadow-md"
        >
          <span className="text-center">{category.name}</span>
          <span>------------</span>
          <span className="text-center">{category.intlName}</span>
        </div>

        <div className="absolute top-1 left-1 right-1 h-full bg-blue-700 dark:bg-bgItem/90 rounded-lg opacity-70 z-0" />

        <div className="absolute top-2 left-2 right-2 h-full bg-blue-700 dark:bg-bgItem/90 rounded-lg opacity-40 z-0" />
      </div>
    </Link>
  );
}
