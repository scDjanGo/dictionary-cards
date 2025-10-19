"use client";

import { useState } from "react";

export default function Practice_Past_Continuous() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      q: "I ___ reading a book yesterday evening.",
      options: ["was", "were"],
      correct: "was",
    },
    {
      q: "She ___ watching TV at 8 pm last night.",
      options: ["was", "were"],
      correct: "was",
    },
    {
      q: "They ___ playing football outside yesterday.",
      options: ["was", "were"],
      correct: "were",
    },
    {
      q: "We ___ studying for the test at 7 pm yesterday.",
      options: ["was", "were"],
      correct: "were",
    },
    {
      q: "He ___ talking on the phone when I called.",
      options: ["was", "were"],
      correct: "was",
    },
  ];

  const handleAnswer = (index: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [index]: option }));
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const reset = () => {
    setShowAnswers(false);
    setAnswers({});
  };

  const getCorrectCount = () =>
    questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-blueCl">
        ✍️ Практика — Past Continuous
      </h2>
      <p className="dark:text-bgLight/70 mb-4">
        Выбери правильную форму глагола <b>to be</b> для времени{" "}
        <b>Past Continuous</b>:
      </p>

      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="mb-2 dark:text-bgLight/80">
            {i + 1}. {q.q}
          </p>

          <div className="flex gap-3 flex-wrap">
            {q.options.map((opt) => {
              const isSelected = answers[i] === opt;
              const isCorrect = q.correct === opt;
              const isIncorrect =
                isSelected && opt !== q.correct && showAnswers;

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(i, opt)}
                  disabled={showAnswers}
                  className={`px-3 py-1 rounded-lg border transition ${
                    showAnswers
                      ? isCorrect
                        ? "bg-green-500 text-white border-green-600"
                        : isIncorrect
                        ? "bg-red-500 text-white border-red-600"
                        : "bg-gray-200 dark:bg-bgDark"
                      : isSelected
                      ? "bg-blueCl text-white border-blueCl"
                      : "bg-gray-200 dark:bg-bgDark hover:bg-blueCl hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!showAnswers ? (
        <button
          onClick={checkAnswers}
          className="mt-4 bg-blueCl text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
        >
          Проверить ответы
        </button>
      ) : (
        <button
          onClick={reset}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
        >
          Пройти заново
        </button>
      )}

      {showAnswers && (
        <div className="mt-4 bg-blueCl/10 dark:bg-white/10 p-4 rounded-xl space-y-1">
          <p className="font-medium">
            ✅ Правильные ответы ({getCorrectCount()} из {questions.length})
          </p>
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
