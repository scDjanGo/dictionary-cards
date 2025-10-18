"use client";

import { useState } from "react";

export default function Practice_PS() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    q1: "went",
    q2: "didn't see",
    q3: "did you like",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setAnswers({ ...answers, [key]: e.target.value });
  };

  const checkAnswer = (key: keyof typeof answers) => {
    const user = answers[key].trim().toLowerCase();
    const correct = correctAnswers[key].toLowerCase();
    return user === correct;
  };

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold text-color-blueCl">✍️ Практика</h2>
      <p className="dark:text-bgLight/70 mt-2">
        Впиши правильную форму глагола, а затем нажми «Проверить ответы».
      </p>

      <ul className="list-decimal list-inside dark:text-bgLight/70 mt-4 space-y-3">
        <li>
          I{" "}
          <input
            type="text"
            value={answers.q1}
            onChange={(e) => handleChange(e, "q1")}
            disabled={showResults}
            className={`border rounded-md max-w-[56px] px-2 py-1 mx-1 outline-none ${
              showResults
                ? checkAnswer("q1")
                  ? "border-green-500 bg-green-100/50"
                  : "border-red-500 bg-red-100/50"
                : "border-gray-400 focus:border-color-blueCl"
            }`}
          />{" "}
          to school yesterday.
        </li>

        <li>
          She{" "}
          <input
            type="text"
            value={answers.q2}
            onChange={(e) => handleChange(e, "q2")}
            disabled={showResults}
            className={`border max-w-[90px] rounded-md px-2 py-1 mx-1 outline-none ${
              showResults
                ? checkAnswer("q2")
                  ? "border-green-500 bg-green-100/50"
                  : "border-red-500 bg-red-100/50"
                : "border-gray-400 focus:border-color-blueCl"
            }`}
          />{" "}
          me last night.
        </li>

        <li>
          <input
            type="text"
            value={answers.q3}
            onChange={(e) => handleChange(e, "q3")}
            disabled={showResults}
            className={`border max-w-[100px] rounded-md px-2 py-1 mx-1 outline-none ${
              showResults
                ? checkAnswer("q3")
                  ? "border-green-500 bg-green-100/50"
                  : "border-red-500 bg-red-100/50"
                : "border-gray-400 focus:border-color-blueCl"
            }`}
          />{" "}
          the concert?
        </li>
      </ul>

      <button
        onClick={() => setShowResults(!showResults)}
        className="mt-5 bg-color-blueCl text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
      >
        {showResults ? "Сбросить" : "Проверить ответы"}
      </button>

      {showResults && (
        <div className="mt-4 bg-color-blueCl/10 dark:bg-white/10 p-4 rounded-xl">
          <p className="font-medium mb-2">✅ Правильные ответы:</p>
          <ul className="space-y-1">
            <li>1️⃣ went</li>
            <li>2️⃣ didn’t see</li>
            <li>3️⃣ Did you like</li>
          </ul>
        </div>
      )}
    </section>
  );
}
