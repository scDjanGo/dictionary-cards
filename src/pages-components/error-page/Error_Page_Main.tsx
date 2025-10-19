

import Link from "next/link";

export default function Error_Page_Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f8] px-4 text-center">
      {/* Код ошибки */}
      <h1 className="text-6xl sm:text-7xl font-bold text-gray-800">500</h1>
      <p className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-700">
        Внутренняя ошибка сервера
      </p>

      {/* SVG Панда с отверткой */}
      <div className="max-w-[280px] sm:max-w-[340px] mt-8">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <circle cx="200" cy="200" r="200" fill="#fdfdfd" />
          <circle cx="140" cy="140" r="35" fill="#1a1a1a" />
          <circle cx="260" cy="140" r="35" fill="#1a1a1a" />
          <circle
            cx="200"
            cy="200"
            r="90"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="4"
          />
          <ellipse cx="170" cy="190" rx="18" ry="25" fill="#1a1a1a" />
          <ellipse cx="230" cy="190" rx="18" ry="25" fill="#1a1a1a" />
          <circle cx="200" cy="220" r="6" fill="#1a1a1a" />
          {/* Грустная мордочка */}
          <path
            d="M160 265 Q200 235 240 265"
            stroke="#1a1a1a"
            strokeWidth="5"
            fill="none"
          />
          {/* Лапа с отверткой */}
          <path
            d="M240 270 Q310 280 340 270 Q335 250 320 250 Q300 250 260 260 Z"
            fill="#1a1a1a"
          />
          <rect x="330" y="240" width="10" height="40" rx="3" fill="#666" />
          <polygon points="325,240 345,240 335,220" fill="#444" />
          {/* Восклицательный знак */}
          <text
            x="200"
            y="80"
            textAnchor="middle"
            fontSize="60"
            fontWeight="bold"
            fill="#1a1a1a"
          >
            !
          </text>
        </svg>
      </div>

      {/* Кнопка "На главную" */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-lg font-medium text-white bg-black rounded-2xl shadow-md hover:bg-gray-800 active:scale-95 transition-all"
      >
        На главную
      </Link>

      <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-[300px]">
        Панда пыталась починить сервер, но что-то пошло не так ⚙️🐼
      </p>
    </div>
  );
}
