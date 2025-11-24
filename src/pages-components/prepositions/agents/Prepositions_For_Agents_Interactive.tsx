"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "Hamlet was written ___ Shakespeare.",
    answer: "by",
    hint: "Исполнитель действия",
  },
  {
    sentence: "She cut the paper ___ scissors.", 
    answer: "with",
    hint: "Инструмент",
  },
  {
    sentence: "I heard the news ___ a friend.",
    answer: "through",
    hint: "Посредник",
  },
  {
    sentence: "The building was designed ___ a famous architect.",
    answer: "by",
    hint: "Кто создал?",
  },
  {
    sentence: "He opened the door ___ a key.",
    answer: "with",
    hint: "С помощью чего?",
  },
  {
    sentence: "We met ___ mutual friends.",
    answer: "through",
    hint: "Канал знакомства",
  },
];

const quizQuestions = [
  {
    question: "Какой предлог указывает на исполнителя действия?",
    options: ["with", "through", "by"],
    correct: 2,
    explanation: "BY показывает, кто выполняет действие"
  },
  {
    question: "Какой предлог указывает на инструмент?",
    options: ["by", "with", "through"],
    correct: 1, 
    explanation: "WITH показывает орудие или средство"
  },
  {
    question: "Какой предлог указывает на посредника?",
    options: ["by", "with", "through"],
    correct: 2,
    explanation: "THROUGH показывает канал или посредника"
  },
  {
    question: "'The song was performed ___ a famous singer.'",
    options: ["with", "by", "through"],
    correct: 1,
    explanation: "BY - исполнитель действия (певец)"
  },
  {
    question: "'She wrote the letter ___ a pen.'",
    options: ["by", "through", "with"],
    correct: 2,
    explanation: "WITH - инструмент написания (ручка)"
  }
];

const transformationExercises = [
  {
    active: "The chef cooked the meal.",
    passive: "The meal was cooked ___ the chef.",
    answer: "by"
  },
  {
    active: "Mary sent the message.",
    passive: "The message was sent ___ Mary.", 
    answer: "by"
  },
  {
    active: "He cut the bread with a knife.",
    passive: "The bread was cut ___ a knife.",
    answer: "with"
  },
  {
    active: "They built the house with modern tools.",
    passive: "The house was built ___ modern tools.",
    answer: "with"
  }
];

export default function Prepositions_For_Agents_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "transform">("practice");
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuiz = quizQuestions[currentIndex % quizQuestions.length];
  const currentPractice = practiceSentences[currentIndex % practiceSentences.length];
  const currentTransform = transformationExercises[currentIndex % transformationExercises.length];

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

  const handleTransformCheck = () => {
    const correct = userAnswer.toLowerCase().trim() === currentTransform.answer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswer("");
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика предлогов для исполнителей
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
          Теория
        </button>
        <button
          onClick={() => setActiveTab("transform")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "transform"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Трансформация
        </button>
      </div>

      {/* Practice Tab */}
      {activeTab === "practice" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Заполните пропуск предлогом
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
            Проверьте знания теории
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

      {/* Transform Tab */}
      {activeTab === "transform" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Трансформация в пассивный залог
          </h3>
          <div className="text-center mb-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4 border-2 border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Активный залог:</p>
              <p className="text-lg text-gray-800 dark:text-white font-medium">{currentTransform.active}</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Пассивный залог:</p>
              <p className="text-lg text-gray-800 dark:text-white font-medium">{currentTransform.passive}</p>
            </div>
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
                onClick={handleTransformCheck}
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
                  Правильный ответ: <strong className="text-green-600 dark:text-green-400">{currentTransform.answer}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}