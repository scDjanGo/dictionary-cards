"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 500);
    const timer2 = setTimeout(() => router.push("/categories"), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-bgLight dark:bg-bgDark transition-transform duration-400 ${
        animate ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mb-4 sm:mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 dark:text-bgLight">
          Welcome!
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-bgLight">
          Getting things ready for you...
        </p>
      </div>

      <div className="w-full mt-8 h-2 bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-blue-600 animate-loading"></div>
      </div>

      <style jsx>{`
        .animate-loading {
          animation: loading 5s linear forwards;
        }
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
