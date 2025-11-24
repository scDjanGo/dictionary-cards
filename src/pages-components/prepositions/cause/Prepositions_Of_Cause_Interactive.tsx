"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "The game was canceled ___ rain.",
    answer: "because of",
    hint: "Прямая причина",
  },
  {
    sentence: "His success is ___ hard work.", 
    answer: "due to",
    hint: "Формальная причина",
  },
  {
    sentence: "We won ___ your excellent strategy.",
    answer: "thanks to",
    hint: "Положительная причина",
  },
  {
    sentence: "The event was postponed ___ bad weather.",
    answer: "on account of",
    hint: "Формальный вариант",
  },
  {
    sentence: "___ technical problems, the service is down.",
    answer: "owing to",
    hint: "Очень формально",
  },
  {
    sentence: "___ your advice, I made the right decision.",
    answer: "as a result of",
    hint: "Результат причины",
  },
];

const quizQuestions = [
  {
    question: "Какой предлог использовать в разговорной речи?",
    options: ["owing to", "because of", "on account of"],
    correct: 1,
    explanation: "BECAUSE OF - самый распространенный в разговорной речи"
  },
  {
    question: "Какой предлог подходит для положительной причины?",
    options: ["due to", "thanks to", "owing to"],
    correct: 1, 
    explanation: "THANKS TO используется для положительных причин и благодарности"
  },
  {
    question: "Какой предлог самый формальный?",
    options: ["because of", "thanks to", "owing to"],
    correct: 2,
    explanation: "OWING TO - очень формальный, используется в официальных документах"
  },
  {
    question: "Как сказать 'из-за погоды' в деловой переписке?",
    options: ["because of weather", "due to weather", "thanks to weather"],
    correct: 1,
    explanation: "DUE TO - подходит для формального и делового общения"
  },
  {
    question: "Какой предлог подчеркивает результат?",
    options: ["as a result of", "on account of", "because of"],
    correct: 0,
    explanation: "AS A RESULT OF акцентирует внимание на последствии"
  }
];

const causeScenarios = [
  {
    situation: "Опоздание на встречу",
    causes: [
      { cause: "Пробки на дороге", preposition: "because of" },
      { cause: "Неисправность транспорта", preposition: "due to" },
      { cause: "Плохая погода", preposition: "on account of" }
    ]
  },
  {
    situation: "Успех в проекте", 
    causes: [
      { cause: "Хорошая команда", preposition: "thanks to" },
      { cause: "Тщательное планирование", preposition: "due to" },
      { cause: "Инновационные методы", preposition: "as a result of" }
    ]
  },
  {
    situation: "Отмена мероприятия",
    causes: [
      { cause: "Болезнь организатора", preposition: "because of" },
      { cause: "Технические неполадки", preposition: "due to" },
      { cause: "Неблагоприятные условия", preposition: "owing to" }
    ]
  }
];

export default function Prepositions_Of_Cause_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "scenarios">("practice");
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

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика предлогов причины
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
          onClick={() => setActiveTab("scenarios")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "scenarios"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Ситуации
        </button>
      </div>

      {/* Practice Tab */}
      {activeTab === "practice" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Заполните пропуск предлогом причины
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
              className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-40 text-center font-medium focus:border-blueCl focus:outline-none"
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

      {/* Scenarios Tab */}
      {activeTab === "scenarios" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Ситуации и причины
          </h3>
          <div className="space-y-6">
            {causeScenarios.map((scenario, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-lg text-blueCl dark:text-blue-300 mb-3 text-center">
                  {scenario.situation}
                </h4>
                <div className="grid gap-2">
                  {scenario.causes.map((cause, causeIndex) => (
                    <div key={causeIndex} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-600 rounded">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {cause.cause}
                      </span>
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">
                        {cause.preposition}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}