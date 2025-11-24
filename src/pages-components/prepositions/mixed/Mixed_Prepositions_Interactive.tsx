"use client";

import { useState } from "react";

const mixedExercises = [
  {
    type: "time_place",
    sentence: "I'll meet you ___ the cafe ___ 3 PM.",
    answers: ["at", "at"],
    hints: ["место встречи", "время встречи"],
    explanation: "AT для конкретного места и точного времени"
  },
  {
    type: "direction_reason",
    sentence: "She went ___ the store ___ some milk.",
    answers: ["to", "for"],
    hints: ["направление движения", "цель посещения"],
    explanation: "TO для направления, FOR для цели"
  },
  {
    type: "instrument_agent",
    sentence: "The letter was written ___ John ___ a pen.",
    answers: ["by", "with"],
    hints: ["исполнитель действия", "инструмент написания"],
    explanation: "BY для исполнителя, WITH для инструмента"
  },
  {
    type: "time_duration",
    sentence: "I've lived here ___ 2020 ___ three years.",
    answers: ["since", "for"],
    hints: ["начало периода", "продолжительность"],
    explanation: "SINCE для начала периода, FOR для продолжительности"
  },
  {
    type: "place_topic",
    sentence: "We talked ___ the park ___ our future plans.",
    answers: ["in", "about"],
    hints: ["место разговора", "тема разговора"],
    explanation: "IN для места, ABOUT для темы"
  },
  {
    type: "means_purpose",
    sentence: "He traveled ___ train ___ a business meeting.",
    answers: ["by", "for"],
    hints: ["способ передвижения", "цель поездки"],
    explanation: "BY для способа, FOR для цели"
  }
];

const contextScenarios = [
  {
    scenario: "Путешествие на самолете",
    sentences: [
      "We arrived ___ the airport ___ time.",
      "Our flight leaves ___ 6 PM ___ New York.",
      "We'll be staying ___ a hotel ___ five days.",
      "I'm excited ___ our vacation ___ the beach."
    ],
    answers: ["at", "on", "at", "for", "in", "for", "about", "at"]
  },
  {
    scenario: "Рабочий день в офисе",
    sentences: [
      "I start work ___ 9 AM ___ weekdays.",
      "My office is ___ the third floor ___ the building.",
      "I have a meeting ___ my boss ___ 11 AM.",
      "We're working ___ a new project ___ our team."
    ],
    answers: ["at", "on", "on", "of", "with", "at", "on", "with"]
  },
  {
    scenario: "Учеба в университете",
    sentences: [
      "Classes start ___ September ___ Monday.",
      "I'm good ___ mathematics but bad ___ languages.",
      "I study ___ the library ___ two hours every day.",
      "I'm interested ___ learning ___ new cultures."
    ],
    answers: ["in", "on", "at", "at", "in", "for", "in", "about"]
  }
];

const prepositionSelection = [
  {
    category: "Выберите правильный предлог времени",
    questions: [
      {
        sentence: "I'll see you ___ Friday.",
        options: ["in", "on", "at"],
        answer: 1
      },
      {
        sentence: "We usually eat lunch ___ noon.",
        options: ["in", "on", "at"],
        answer: 2
      },
      {
        sentence: "She was born ___ 1990.",
        options: ["in", "on", "at"],
        answer: 0
      }
    ]
  },
  {
    category: "Выберите правильный предлог места",
    questions: [
      {
        sentence: "The book is ___ the table.",
        options: ["in", "on", "at"],
        answer: 1
      },
      {
        sentence: "He lives ___ London.",
        options: ["in", "on", "at"],
        answer: 0
      },
      {
        sentence: "We'll meet ___ the cinema.",
        options: ["in", "on", "at"],
        answer: 2
      }
    ]
  },
  {
    category: "Выберите правильный предлог направления",
    questions: [
      {
        sentence: "She walked ___ the park.",
        options: ["to", "at", "in"],
        answer: 0
      },
      {
        sentence: "He came ___ work.",
        options: ["from", "of", "by"],
        answer: 0
      },
      {
        sentence: "They jumped ___ the pool.",
        options: ["into", "on", "at"],
        answer: 0
      }
    ]
  }
];

export default function Mixed_Prepositions_Interactive() {
  const [activeTab, setActiveTab] = useState<"mixed" | "context" | "selection">("mixed");
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const currentExercise = mixedExercises[currentIndex % mixedExercises.length];
  const currentScenario = contextScenarios[currentIndex % contextScenarios.length];
  const currentSelection = prepositionSelection[currentIndex % prepositionSelection.length];

  const handleMixedCheck = () => {
    const answers = userAnswers.map(ans => ans.toLowerCase().trim());
    const correct = answers.every((answer, index) => answer === currentExercise.answers[index]);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleContextCheck = () => {
    const answers = userAnswers.map(ans => ans.toLowerCase().trim());
    const correct = answers.every((answer, index) => answer === currentScenario.answers[index]);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSelectionCheck = () => {
    const correct = selectedOptions.every((selected, index) => 
      selected === currentSelection.questions[index].answer
    );
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswers([]);
    setSelectedOptions([]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newSelections = [...selectedOptions];
    newSelections[questionIndex] = optionIndex;
    setSelectedOptions(newSelections);
  };

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика смешанных предлогов
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setActiveTab("mixed")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "mixed"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Двойные пропуски
        </button>
        <button
          onClick={() => setActiveTab("context")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "context"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Контекстные сценарии
        </button>
        <button
          onClick={() => setActiveTab("selection")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "selection"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Выбор предлога
        </button>
      </div>

      {/* Mixed Tab */}
      {activeTab === "mixed" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Заполните двойные пропуски
          </h3>
          <div className="text-center mb-6">
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 font-medium">
              {currentExercise.sentence}
            </p>
            <div className="flex gap-4 justify-center mb-4">
              {currentExercise.answers.map((_, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Подсказка: {currentExercise.hints[index]}
                  </p>
                  <input
                    type="text"
                    value={userAnswers[index] || ""}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    placeholder="предлог"
                    className="px-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-20 text-center font-medium focus:border-blueCl focus:outline-none"
                    disabled={showResult}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            {!showResult ? (
              <button
                onClick={handleMixedCheck}
                disabled={userAnswers.length < currentExercise.answers.length || userAnswers.some(a => !a)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              className={`text-center p-4 rounded-lg border-2 mt-4 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 border-red-400 text-red-700 dark:text-red-400"
              }`}
            >
              <p className="font-bold text-lg mb-2">
                {isCorrect ? "✅ Правильно!" : "❌ Неправильно!"}
              </p>
              {!isCorrect && (
                <div>
                  <p className="text-sm mb-2">
                    Правильные ответы: <strong className="text-green-600 dark:text-green-400">
                      {currentExercise.answers.join(" и ")}
                    </strong>
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {currentExercise.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Context Tab */}
      {activeTab === "context" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            {currentScenario.scenario}
          </h3>
          <div className="space-y-4 mb-6">
            {currentScenario.sentences.map((sentence, index) => (
              <div key={index} className="text-center">
                <p className="text-lg mb-2 text-gray-700 dark:text-gray-300 font-medium">
                  {sentence}
                </p>
                <input
                  type="text"
                  value={userAnswers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  placeholder="предлог"
                  className="px-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-20 text-center font-medium focus:border-blueCl focus:outline-none"
                  disabled={showResult}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            {!showResult ? (
              <button
                onClick={handleContextCheck}
                disabled={userAnswers.length < currentScenario.answers.length || userAnswers.some(a => !a)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              className={`text-center p-4 rounded-lg border-2 mt-4 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 border-red-400 text-red-700 dark:text-red-400"
              }`}
            >
              <p className="font-bold text-lg mb-2">
                {isCorrect ? "✅ Все верно!" : "❌ Есть ошибки!"}
              </p>
              {!isCorrect && (
                <div className="text-sm">
                  <p className="mb-2">Правильные ответы:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {currentScenario.answers.map((answer, index) => (
                      <div key={index} className="text-center">
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {answer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Selection Tab */}
      {activeTab === "selection" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            {currentSelection.category}
          </h3>
          <div className="space-y-6 mb-6">
            {currentSelection.questions.map((question, qIndex) => (
              <div key={qIndex} className="bg-white dark:bg-gray-700 rounded-lg p-4">
                <p className="text-lg mb-3 text-gray-800 dark:text-white text-center">
                  {question.sentence}
                </p>
                <div className="flex gap-3 justify-center">
                  {question.options.map((option, oIndex) => (
                    <button
                      key={oIndex}
                      onClick={() => handleOptionSelect(qIndex, oIndex)}
                      disabled={showResult}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedOptions[qIndex] === oIndex
                          ? "bg-blueCl text-white border-blueCl"
                          : "bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            {!showResult ? (
              <button
                onClick={handleSelectionCheck}
                disabled={selectedOptions.length < currentSelection.questions.length}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              className={`text-center p-4 rounded-lg border-2 mt-4 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 border-red-400 text-red-700 dark:text-red-400"
              }`}
            >
              <p className="font-bold text-lg mb-2">
                {isCorrect ? "✅ Отлично!" : "❌ Попробуйте еще раз!"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}