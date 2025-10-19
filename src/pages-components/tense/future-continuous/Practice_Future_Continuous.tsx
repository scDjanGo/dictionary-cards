"use client";

import { useState } from "react";

export default function Practice_Future_Continuous() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      q: "I ___ working at 8 pm tomorrow.",
      options: ["will be", "will", "am"],
      correct: "will be",
    },
    {
      q: "She ___ watching TV at this time next week.",
      options: ["will be", "will", "is"],
      correct: "will be",
    },
    {
      q: "They ___ playing football at 5 pm tomorrow.",
      options: ["will be", "are", "will"],
      correct: "will be",
    },
    {
      q: "We ___ studying for the test at 7 pm next Monday.",
      options: ["will be", "are", "will"],
      correct: "will be",
    },
    {
      q: "He ___ talking on the phone at 9 am tomorrow.",
      options: ["will be", "is", "will"],
      correct: "will be",
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
        ✍️ Практика — Future Continuous
      </h2>
      <p className="dark:text-bgLight/70 mb-4">
        Выбери правильную форму глагола <b>to be</b> для времени{" "}
        <b>Future Continuous</b>:
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
