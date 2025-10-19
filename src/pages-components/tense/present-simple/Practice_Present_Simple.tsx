"use client";

import { useState } from "react";

export default function Practice_Present_Simple() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      q: "He ___ to school every day.",
      options: ["go", "goes", "going"],
      correct: "goes",
    },
    {
      q: "They ___ coffee in the morning.",
      options: ["drink", "drinks", "drinking"],
      correct: "drink",
    },
    {
      q: "My cat ___ milk.",
      options: ["like", "likes", "liking"],
      correct: "likes",
    },
  ];

  const handleAnswer = (index: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [index]: option }));
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-blueCl">
        ✍️ Практика
      </h2>
      <p className="dark:text-bgLight/70 mb-4">Выбери правильный вариант:</p>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="mb-2">
            {i + 1}. {q.q}
          </p>
          <div className="flex gap-3 flex-wrap">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(i, opt)}
                className={`px-3 py-1 rounded-lg border transition ${
                  answers[i] === opt
                    ? "bg-blueCl text-white"
                    : "bg-gray-200 dark:bg-bgDark hover:bg-blueCl hover:text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="mt-4 bg-blueCl text-bgLight px-4 py-2 rounded-xl hover:opacity-90 transition"
      >
        Показать ответы
      </button>

      {showAnswers && (
        <div className="mt-4 bg-blueCl/10 dark:bg-white/10 p-4 rounded-xl space-y-1">
          {questions.map((q, i) => (
            <p key={i}>
              {i + 1}. {q.correct}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
