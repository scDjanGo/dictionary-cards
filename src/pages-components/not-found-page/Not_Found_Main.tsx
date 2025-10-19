"use client";

import Link from "next/link";

export default function Not_Found_Main() {
  return (
    <>
      <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blueCl dark:text-bgLight ">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-bgItem dark:text-bgLight sm:text-7xl">
            Страница не найдена
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Извините, мы не смогли найти страницу, которую вы ищете.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blueCl dark:bg-bgItem dark:border-[1px] dark:border-bgLight px-3.5 py-2.5 text-sm font-semibold text-bgLight shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Вернись домой
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
