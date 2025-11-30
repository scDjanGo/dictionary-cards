"use client";

import { useState, useEffect } from "react";

type State = {
  id: number;
  sentence: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: null | boolean;
  hint: string;
};

const Mixed_Conditionals_Practice = () => {
  const [exercises, setExercises] = useState<State[]>([
    {
      id: 1,
      sentence: "If I ___ (study) medicine, I ___ (be) a doctor now.",
      correctAnswer: "had studied, would be",
      userAnswer: "",
      isCorrect: null,
      hint: "Mixed conditional: Past condition (3rd) + Present result (2nd) - If + Past Perfect, would + infinitive",
    },
    {
      id: 2,
      sentence: "If she ___ (not miss) the train, she ___ (be) here now.",
      correctAnswer: "hadn't missed, would be",
      userAnswer: "",
      isCorrect: null,
      hint: "Прошлое действие влияет на настоящее состояние",
    },
    {
      id: 3,
      sentence: "He ___ (speak) better English if he ___ (practice) more in school.",
      correctAnswer: "would speak, had practiced",
      userAnswer: "",
      isCorrect: null,
      hint: "Порядок может меняться: Present result (2nd) + Past condition (3rd)",
    },
    {
      id: 4,
      sentence: "If I ___ (not eat) so much yesterday, I ___ (not feel) sick today.",
      correctAnswer: "hadn't eaten, wouldn't feel",
      userAnswer: "",
      isCorrect: null,
      hint: "Действие в прошлом вызывает результат в настоящем",
    },
    {
      id: 5,
      sentence: "We ___ (have) more money now if we ___ (not buy) that expensive car.",
      correctAnswer: "would have, hadn't bought",
      userAnswer: "",
      isCorrect: null,
      hint: "Смешанный тип: прошлое решение влияет на текущее финансовое состояние",
    },
    {
      id: 6,
      sentence: "If you ___ (listen) to my advice, you ___ (not have) these problems now.",
      correctAnswer: "had listened, wouldn't have",
      userAnswer: "",
      isCorrect: null,
      hint: "Past Perfect в условии, would + infinitive в результате",
    },
    {
      id: 7,
      sentence: "She ___ (be) happier if she ___ (marry) someone else.",
      correctAnswer: "would be, had married",
      userAnswer: "",
      isCorrect: null,
      hint: "Прошлый выбор влияет на настоящее эмоциональное состояние",
    },
    {
      id: 8,
      sentence: "If they ___ (invest) in that company, they ___ (be) millionaires today.",
      correctAnswer: "had invested, would be",
      userAnswer: "",
      isCorrect: null,
      hint: "Упущенная возможность в прошлом влияет на текущее состояние",
    },
    {
      id: 9,
      sentence: "I ___ (not be) so tired if I ___ (go) to bed earlier last night.",
      correctAnswer: "wouldn't be, had gone",
      userAnswer: "",
      isCorrect: null,
      hint: "Вчерашнее действие влияет на сегодняшнее самочувствие",
    },
    {
      id: 10,
      sentence: "If he ___ (take) the job in London, he ___ (live) there now.",
      correctAnswer: "had taken, would be living",
      userAnswer: "",
      isCorrect: null,
      hint: "Continuous форма для подчеркивания текущей ситуации",
    },
  ]);

  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleAnswerChange = (id: number, answer: string) => {
    setExercises((prev) =>
      prev.map((ex) =>
        ex.id === id ? { ...ex, userAnswer: answer.trim() } : ex
      )
    );
  };

  const checkAnswer = (id: number) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id === id) {
          const isCorrect =
            ex.userAnswer.toLowerCase() === ex.correctAnswer.toLowerCase();
          return { ...ex, isCorrect };
        }
        return ex;
      })
    );
    setIsChecked(true);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise((prev) => prev + 1);
      setIsChecked(false);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correctCount = exercises.filter(
      (ex) => ex.userAnswer.toLowerCase() === ex.correctAnswer.toLowerCase()
    ).length;
    setScore(correctCount);
  };

  const resetPractice = () => {
    setExercises((prev) =>
      prev.map((ex) => ({
        ...ex,
        userAnswer: "",
        isCorrect: null,
      }))
    );
    setScore(0);
    setShowResults(false);
    setCurrentExercise(0);
    setIsChecked(false);
  };

  const checkAllAnswers = () => {
    exercises.forEach((ex) => checkAnswer(ex.id));
    calculateScore();
    setShowResults(true);
  };

  const currentEx = exercises[currentExercise];

  return (
    <div className=" bg-bgLight dark:bg-bgDark py-8 transition-colors duration-200">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Mixed Conditionals Practice
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
            Тренировка смешанных условных предложений
          </p>
          <div className="bg-white/60 dark:bg-bgItem rounded-lg p-4 shadow-md inline-block border border-slate-200 dark:border-slate-700 max-w-2xl">
            <p className="text-sm text-slate-800 dark:text-slate-200 mb-2">
              <strong>Mixed Conditionals</strong> используются, когда время в условии и результате различается
            </p>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                <strong>Тип 1:</strong>{" "}
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  If + Past Perfect, would + infinitive
                </code>
                <br />
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  (Past condition + Present result)
                </span>
              </p>
              <p>
                <strong>Тип 2:</strong>{" "}
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  If + Past Simple, would have + Past Participle
                </code>
                <br />
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  (Present condition + Past result)
                </span>
              </p>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              Пример: If I had studied medicine, I would be a doctor now.
            </p>
          </div>
        </div>

        {!showResults ? (
          <div className="bg-white/60 dark:bg-bgItem rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Упражнение {currentExercise + 1} из {exercises.length}
              </h2>
              <div className="flex gap-2">
                {exercises.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentExercise
                        ? "bg-[var(--color-blueCl)]"
                        : exercises[index].userAnswer
                        ? "bg-green-500"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xl text-slate-900 dark:text-slate-100 mb-4 text-center">
                  {currentEx.sentence}
                </p>
                
                <div className="flex flex-col items-center space-y-4">
                  <input
                    type="text"
                    value={currentEx.userAnswer}
                    onChange={(e) =>
                      handleAnswerChange(currentEx.id, e.target.value)
                    }
                    className="w-full max-w-md px-4 py-3 border-2 border-[var(--color-blueCl)] rounded-lg focus:border-[var(--color-blueCl)] focus:outline-none text-center font-medium bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="введите оба глагола через запятую (например: had studied, would be)"
                  />
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    Введите оба пропущенных глагола через запятую
                    <br />
                    <span className="text-xs">
                      Обратите внимание на время - условие и результат могут быть в разных временах
                    </span>
                  </p>
                </div>

                {isChecked && (
                  <div
                    className={`p-4 rounded-lg mt-4 border ${
                      currentEx.isCorrect
                        ? "bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-800"
                        : "bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-800"
                    }`}
                  >
                    <p
                      className={`font-semibold ${
                        currentEx.isCorrect
                          ? "text-green-800 dark:text-green-300"
                          : "text-red-800 dark:text-red-300"
                      }`}
                    >
                      {currentEx.isCorrect ? "✓ Правильно!" : "✗ Неправильно"}
                    </p>
                    {!currentEx.isCorrect && (
                      <p className="text-red-700 dark:text-red-400 mt-2">
                        Правильный ответ:{" "}
                        <strong>{currentEx.correctAnswer}</strong>
                      </p>
                    )}
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                      {currentEx.hint}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => checkAnswer(currentEx.id)}
                  disabled={!currentEx.userAnswer}
                  className="flex-1 bg-[var(--color-blueCl)] hover:bg-[#1565C0] disabled:bg-slate-400 dark:disabled:bg-slate-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Проверить ответ
                </button>

                <button
                  onClick={nextExercise}
                  disabled={!isChecked}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  {currentExercise < exercises.length - 1
                    ? "Следующее →"
                    : "Завершить"}
                </button>
              </div>

              <button
                onClick={checkAllAnswers}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Проверить все ответы
              </button>
            </div>
          </div>
        ) : (
          /* Results Section */
          <div className="bg-white/60 dark:bg-bgItem rounded-2xl shadow-lg p-8 text-center border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Результаты практики
            </h2>

            <div className="bg-gradient-to-r from-[var(--color-blueCl)] to-purple-600 rounded-2xl p-8 text-white mb-8">
              <div className="text-6xl font-bold mb-2">
                {score}/{exercises.length}
              </div>
              <div className="text-2xl">
                {score === exercises.length
                  ? "🎉 Идеально!"
                  : score >= exercises.length * 0.7
                  ? "👍 Хорошо!"
                  : "💪 Продолжайте тренироваться!"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className={`p-4 rounded-lg border-2 ${
                    exercise.isCorrect
                      ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
                      : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
                  }`}
                >
                  <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {exercise.sentence}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-700 dark:text-slate-300">
                        Ваш ответ:
                      </span>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">
                        {exercise.userAnswer || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 dark:text-slate-300">
                        Правильно:
                      </span>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">
                        {exercise.correctAnswer}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    {exercise.hint}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={resetPractice}
              className="bg-[var(--color-blueCl)] hover:bg-[#1565C0] text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Начать заново
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {!showResults && (
          <div className="mt-8 bg-white/60 dark:bg-bgItem rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Прогресс
              </span>
              <span className="text-[var(--color-blueCl)] font-bold">
                {Math.round(((currentExercise + 1) / exercises.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
              <div
                className="bg-[var(--color-blueCl)] h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentExercise + 1) / exercises.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mixed_Conditionals_Practice;