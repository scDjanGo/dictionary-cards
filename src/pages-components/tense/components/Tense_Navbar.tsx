"use client";

import { useRouter } from "next/navigation";

export default function Tense_Navbar() {
  const router = useRouter();

  const tenses = [
    { name: "Present Simple", path: "/tense/present-simple" },
    { name: "Past Simple", path: "/tense/past-simple" },
    { name: "Future Simple", path: "/tense/future-simple" },
    { name: "Present Continuous", path: "/tense/present-continuous" },
    { name: "Past Continuous", path: "/tense/past-continuous" },
    { name: "Future Continuous", path: "/tense/future-continuous" },
    { name: "Present Perfect", path: "/tense/present-perfect" },
    { name: "Past Perfect", path: "/tense/past-perfect" },
    { name: "Future Perfect", path: "/tense/future-perfect" },
    {
      name: "Present Perfect Continuous",
      path: "/tense/present-perfect-continuous",
    },
    { name: "Past Perfect Continuous", path: "/tense/past-perfect-continuous" },
    {
      name: "Future Perfect Continuous",
      path: "/tense/future-perfect-continuous",
    },
  ];

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-full flex  justify-start gap-4  rounded-md overflow-x-auto mb-[16px]"
    >
      {tenses.map((tense) => (
        <button
          key={tense.path}
          onClick={() => router.push(tense.path)}
          className="px-6 py-3 rounded-xl text-[14px] text-nowrap bg-blueCl dark:bg-bgItem  text-bgLight font-medium hover:bg-gray-800 transition-transform hover:scale-105 active:scale-95 shadow-md"
        >
          {tense.name}
        </button>
      ))}
    </div>
  );
}
