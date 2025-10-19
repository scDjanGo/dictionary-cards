"use client";

import { useState } from "react";

export default function Practice_Past_Perfect() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      q: "I ___ finished my homework before dinner.",
      options: ["had", "have", "has"],
      correct: "had",
    },
    {
      q: "She ___ already left when I arrived.",
      options: ["had", "have", "has"],
      correct: "had",
    },
    {
      q: "They ___ eaten lunch before the meeting started.",
      options: ["had", "have", "was"],
      correct: "had",
    },
    {
      q: "We ___ seen that movie before last night.",
      options: ["had", "has", "have"],
      correct: "had",
    },
    {
      q: "He ___ read the book before the exam.",
      options: ["had", "has", "have"],
      correct: "had",
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
        ✍️ Практика — Past Perfect
      </h2>
      <p className="dark:text-bgLight/70 mb-4">
        Выбери правильную форму <b>had</b> для времени <b>Past Perfect</b>:
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
              const isIncorrect = isSelected && opt !== q.correct && showAnswers;

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
