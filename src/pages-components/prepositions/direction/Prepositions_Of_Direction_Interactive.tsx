"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "I go ___ school every day.",
    answer: "to",
    hint: "Направление к месту",
  },
  {
    sentence: "She comes ___ London.",
    answer: "from", 
    hint: "Происхождение",
  },
  {
    sentence: "He walked ___ the room.",
    answer: "into",
    hint: "Движение внутрь",
  },
  {
    sentence: "Get ___ the car quickly!",
    answer: "out of",
    hint: "Выход наружу",
  },
  {
    sentence: "We drove ___ the tunnel.",
    answer: "through",
    hint: "Прохождение через",
  },
  {
    sentence: "Don't run ___ the road.",
    answer: "across",
    hint: "Через поверхность",
  },
];

const quizQuestions = [
  {
    question: "Как сказать 'идти в школу'?",
    options: ["go in school", "go to school", "go at school"],
    correct: 1,
    explanation: "TO показывает направление движения к месту"
  },
  {
    question: "Как сказать 'выходить из машины'?",
    options: ["get out of car", "get from car", "get to car"],
    correct: 0, 
    explanation: "OUT OF показывает движение изнутри наружу"
  },
  {
    question: "Как сказать 'проходить через лес'?",
    options: ["walk across forest", "walk through forest", "walk over forest"],
    correct: 1,
    explanation: "THROUGH - через объемное пространство"
  },
  {
    question: "Как сказать 'прыгать через забор'?",
    options: ["jump across fence", "jump through fence", "jump over fence"],
    correct: 2,
    explanation: "OVER - перемещение над препятствием"
  },
  {
    question: "Как сказать 'приходить с работы'?",
    options: ["come to work", "come from work", "come into work"],
    correct: 1,
    explanation: "FROM - начальная точка движения"
  }
];

export default function Prepositions_Of_Direction_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "map">("practice");
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

  const directionExamples = [
    {
      action: "Walk",
      preposition: "to",
      place: "the park",
      translation: "Идти в парк"
    },
    {
      action: "Come", 
      preposition: "from",
      place: "work",
      translation: "Приходить с работы"
    },
    {
      action: "Jump",
      preposition: "into",
      place: "the water",
      translation: "Прыгать в воду"
    },
    {
      action: "Get",
      preposition: "out of",
      place: "the car",
      translation: "Выходить из машины"
    },
    {
      action: "Drive",
      preposition: "through",
      place: "the city",
      translation: "Ехать через город"
    },
    {
      action: "Run",
      preposition: "across",
      place: "the field",
      translation: "Бежать через поле"
    }
  ];

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика предлогов направления
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
          onClick={() => setActiveTab("map")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "map"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Примеры направлений
        </button>
      </div>

      {/* Practice Tab */}
      {activeTab === "practice" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Заполните пропуск предлогом направления
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

      {/* Map Tab */}
      {activeTab === "map" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Примеры направлений движения
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {directionExamples.map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-600">
                <div className="text-center mb-2">
                  <span className="text-lg font-bold text-blueCl dark:text-blue-300">
                    {example.action} {example.preposition} {example.place}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {example.translation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}