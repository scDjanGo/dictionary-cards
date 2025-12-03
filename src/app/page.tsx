import Link from "next/link";
import { PAGES_LINKS } from "@/data/pages-links";
import { clsx } from "clsx";

export default function HomePage() {
  return (
    <main className="relative">
      <div className=" flex flex-col gap-3">
        {PAGES_LINKS.filter((item) => item.link !== "/").map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={clsx(
              "w-full group relative overflow-hidden rounded-xl bg-blueCl dark:bg-white/10",
              "backdrop-blur-xl border border-white/30 dark:border-white/20",
              "shadow-2xl shadow-black/10",
              "transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:shadow-black/20",
              "active:scale-100"
            )}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-2 py-4 text-center">
              <span className="text-2xl font-bold text-bgLight dark:text-white">
                {item.name_en}
              </span>

              <div className="my-2 h-px w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

              <span className="text-lg font-medium text-bgLight/90 dark:text-gray-300">
                {item.name_ru}
              </span>
            </div>

            {item.icon && (
              <div className="absolute bottom-4 right-4 text-4xl opacity-80">
                {item.icon()}
              </div>
            )}
          </Link>
        ))}
      </div>

    </main>
  );
}
