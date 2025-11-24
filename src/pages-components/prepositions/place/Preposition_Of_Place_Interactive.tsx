"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "The book is ___ the table.",
    answer: "on",
    hint: "На поверхности",
  },
  { sentence: "She lives ___ London.", answer: "in", hint: "Большой город" },
  {
    sentence: "We'll meet ___ the station.",
    answer: "at",
    hint: "Конкретное место",
  },
  { sentence: "The cat is ___ the bed.", answer: "under", hint: "Снизу" },
  {
    sentence: "The picture is ___ the wall.",
    answer: "on",
    hint: "Поверхность",
  },
  {
    sentence: "He's sitting ___ me and John.",
    answer: "between",
    hint: "Два человека",
  },
  { sentence: "The keys are ___ the drawer.", answer: "in", hint: "Внутри" },
  {
    sentence: "The bank is ___ to the post office.",
    answer: "next",
    hint: "Рядом (используйте next to)",
  },
];

const quizQuestions = [
  {
    question: "Где обычно находится книга?",
    options: ["in the table", "on the table", "at the table"],
    correct: 1,
    explanation: "Книга лежит НА столе (на поверхности)",
  },
  {
    question: "Где вы живете?",
    options: ["on London", "at London", "in London"],
    correct: 2,
    explanation: "Города и страны используют предлог IN",
  },
  {
    question: "Где встречаемся?",
    options: ["at the cinema", "on the cinema", "in the cinema"],
    correct: 0,
    explanation: "Конкретные места используют AT",
  },
  {
    question: "Где находится кошка?",
    options: ["under the table", "above the table", "between the table"],
    correct: 0,
    explanation: "UNDER - под чем-либо",
  },
  {
    question: "Где висит картина?",
    options: ["in the wall", "at the wall", "on the wall"],
    correct: 2,
    explanation: "ON the wall - на стене (поверхность)",
  },
];

export default function Prepositions_Of_Place_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "game">("practice");
  const [selectedPreposition, setSelectedPreposition] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuiz = quizQuestions[currentIndex % quizQuestions.length];
  const currentPractice = practiceSentences[currentIndex % practiceSentences.length];

  const handlePracticeCheck = () => {
    const correct = userAnswer.toLowerCase().trim() === currentPractice.answer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleQuizAnswer = (selectedIndex: number) => {
    const correct = selectedIndex === currentQuiz.correct;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswer("");
    setCurrentIndex((prev) => prev + 1);
  };

  const prepositionGame = [
    { position: "in", examples: ["the room", "the car", "the bag", "London"] },
    { position: "on", examples: ["the table", "the wall", "the bus", "Main Street"] },
    { position: "at", examples: ["home", "work", "school", "the party"] },
    { position: "under", examples: ["the bed", "the table", "the chair", "the tree"] },
    { position: "between", examples: ["you and me", "two buildings", "the trees"] },
  ];

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика предлогов места
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setActiveTab("practice")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "practice"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Заполнить пропуск
        </button>
        <button
          onClick={() => setActiveTab("quiz")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "quiz"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Выбрать ответ
        </button>
        <button
          onClick={() => setActiveTab("game")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "game"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Изучить примеры
        </button>
      </div>

      {/* Practice Tab */}
      {activeTab === "practice" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Заполните пропуск подходящим предлогом
          </h3>
          <div className="text-center mb-6">
            <p className="text-lg mb-3 text-gray-700 dark:text-gray-300 font-medium">
              {currentPractice.sentence}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Подсказка: {currentPractice.hint}
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Введите предлог..."
              className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-32 text-center font-medium focus:border-blueCl focus:outline-none"
              disabled={showResult}
            />
            {!showResult ? (
              <button
                onClick={handlePracticeCheck}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Проверить
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blueCl text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Далее
              </button>
            )}
          </div>

          {showResult && (
            <div
              className={`text-center p-4 rounded-lg border-2 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 border-red-400 text-red-700 dark:text-red-400"
              }`}
            >
              <p className="font-bold text-lg mb-2">
                {isCorrect ? "✅ Правильно!" : "❌ Неправильно!"}
              </p>
              {!isCorrect && (
                <p className="text-sm">
                  Правильный ответ: <strong className="text-green-600 dark:text-green-400">{currentPractice.answer}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Quiz Tab */}
      {activeTab === "quiz" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Выберите правильный вариант
          </h3>
          <div className="text-center mb-6">
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 font-medium">
              {currentQuiz.question}
            </p>
          </div>

          <div className="grid gap-3 max-w-md mx-auto mb-4">
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                disabled={showResult}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  showResult
                    ? index === currentQuiz.correct
                      ? "bg-green-100 dark:bg-green-900/30 border-green-400 text-green-800 dark:text-green-300"
                      : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                    : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blueCl"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
                <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                  {isCorrect ? "✅ Верный ответ!" : "❌ Попробуйте еще раз"}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  {currentQuiz.explanation}
                </p>
              </div>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blueCl text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Следующий вопрос
              </button>
            </div>
          )}
        </div>
      )}

      {/* Game Tab */}
      {activeTab === "game" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Изучите примеры использования предлогов
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Нажмите на предлог, чтобы увидеть примеры его использования
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {prepositionGame.map((prep) => (
              <button
                key={prep.position}
                onClick={() =>
                  setSelectedPreposition(
                    selectedPreposition === prep.position ? null : prep.position
                  )
                }
                className={`px-5 py-3 rounded-lg border-2 transition-all font-medium ${
                  selectedPreposition === prep.position
                    ? "bg-blueCl text-white border-blueCl scale-105"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {prep.position}
              </button>
            ))}
          </div>

          {selectedPreposition && (
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-center mb-4 text-lg text-blueCl dark:text-blue-300">
                Примеры с предлогом <span className="underline">{selectedPreposition}</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {prepositionGame
                  .find((p) => p.position === selectedPreposition)
                  ?.examples.map((example, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-500"
                    >
                      {selectedPreposition} {example}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}