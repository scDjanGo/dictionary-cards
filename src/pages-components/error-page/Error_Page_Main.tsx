import Link from "next/link";

export default function Error_Page_Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 text-center">
      {/* Код ошибки */}
      <h1 className="text-6xl sm:text-7xl font-bold text-blueCl dark:text-bgLight">
        500
      </h1>
      <p className="text-2xl sm:text-3xl font-semibold mt-2 text-blueCl dark:text-bgLight">
        Внутренняя ошибка сервера
      </p>

      {/* SVG Панда с отверткой */}

      {/* Кнопка "На главную" */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-lg font-medium text-bgLight bg-blueCl dark:bg-bgItem dark:border-[1px] dark:border-bgLight rounded-2xl shadow-md hover:bg-gray-800 active:scale-95 transition-all"
      >
        На главную
      </Link>

      <p className="mt-4 text-blueCl  dark:text-bgLight text-sm sm:text-base max-w-[300px]">
        Панда пыталась починить сервер, но что-то пошло не так ⚙️🐼
      </p>
    </div>
  );
}
