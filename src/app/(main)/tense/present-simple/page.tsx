"use client";

import { useState } from "react";

export default function PresentSimplePage() {
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
    <div className="min-h-screen bg-bgLight dark:bg-bgItem text-bgDark dark:text-bgLight p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Заголовок */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-color-blueCl">
            Present Simple (Настоящее простое время)
          </h1>
          <p className="text-lg dark:text-bgLight/70">
            Время <b>Present Simple</b> описывает действия, которые происходят
            регулярно, постоянно или выражают факты.
          </p>
        </section>

        {/* Основной смысл */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            🎯 Основная идея
          </h2>
          <p className="dark:text-bgLight/70">Present Simple используется:</p>
          <ul className="list-disc ml-6 space-y-2 dark:text-bgLight/70">
            <li>Для регулярных действий: I go to work every day.</li>
            <li>Для фактов: The sun rises in the east.</li>
            <li>Для постоянных состояний: She works in a hospital.</li>
            <li>Для расписаний: The train leaves at 7 a.m.</li>
          </ul>
        </section>

        {/* Формы */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            🧱 Формы глаголов
          </h2>
          <div className="space-y-4 dark:text-bgLight/70">
            <p>
              <b>Утвердительная форма:</b> Subject + Verb (V1) <br />
              He/She/It → добавляем -s/-es
            </p>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-bgDark">
              <p>I work.</p>
              <p>He works.</p>
              <p>She goes.</p>
            </div>

            <p>
              <b>Отрицательная форма:</b> Subject + do/does not + Verb <br />
              (doesn't/don't)
            </p>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-bgDark">
              <p>I don’t like pizza.</p>
              <p>He doesn’t play football.</p>
            </div>

            <p>
              <b>Вопросительная форма:</b> Do/Does + Subject + Verb?
            </p>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-bgDark">
              <p>Do you study English?</p>
              <p>Does she live here?</p>
            </div>
          </div>
        </section>

        {/* Примеры */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            🗣 Примеры предложений
          </h2>
          <ul className="list-disc ml-6 space-y-2 dark:text-bgLight/70">
            <li>I read books every evening.</li>
            <li>My father drives to work.</li>
            <li>The shop opens at 9 a.m.</li>
            <li>They don’t eat meat.</li>
            <li>Does your sister play the piano?</li>
          </ul>
        </section>

        {/* Ключевые слова */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            🔑 Сигнальные слова
          </h2>
          <p className="dark:text-bgLight/70">
            always, usually, often, sometimes, rarely, never, every day, once a
            week, on Mondays
          </p>
        </section>

        {/* Советы и ошибки */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            ⚠️ Советы и частые ошибки
          </h2>
          <ul className="list-disc ml-6 space-y-2 dark:text-bgLight/70">
            <li>После he/she/it добавляем -s/-es: He plays football.</li>
            <li>
              В отрицаниях и вопросах глагол без окончания: does not play / Do
              you play?
            </li>
            <li>
              Не путать с Present Continuous: I read every day ≠ I am reading
              now.
            </li>
            <li>
              Не использовать am/is/are перед глаголом: ❌ I am go → ✅ I go.
            </li>
          </ul>
        </section>

        {/* Мини-тест */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            ✍️ Практика
          </h2>
          <p className="dark:text-bgLight/70 mb-4">
            Выбери правильный вариант:
          </p>
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
                        ? "bg-color-blueCl text-white"
                        : "bg-gray-200 dark:bg-bgDark hover:bg-color-blueCl hover:text-white"
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
            className="mt-4 bg-color-blueCl text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            Показать ответы
          </button>

          {showAnswers && (
            <div className="mt-4 bg-color-blueCl/10 dark:bg-white/10 p-4 rounded-xl space-y-1">
              {questions.map((q, i) => (
                <p key={i}>
                  {i + 1}. {q.correct}
                </p>
              ))}
            </div>
          )}
        </section>

        {/* Итоги */}
        <section className="bg-color-blueCl/10 dark:bg-white/10 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2 text-color-blueCl">
            📌 Итоги
          </h2>
          <ul className="list-disc ml-6 space-y-2 dark:text-bgLight/70">
            <li>Present Simple — регулярные действия, факты, расписания.</li>
            <li>Ключевые слова: always, usually, every day, sometimes.</li>
            <li>Утвердительные предложения: добавляем -s/-es для 3 лица.</li>
            <li>Отрицания и вопросы: используем do/does + V1.</li>
            <li>Не путать с Present Continuous.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
