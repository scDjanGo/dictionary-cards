"use client";

import Link from "next/link";

export default function Back_To_Tense() {
  return (
    <div className="text-center">
      <Link href="/tense" className="text-blueCl dark:text-bgLight hover:underline">
        ← Вернуться ко всем временам
      </Link>
    </div>
  );
}
