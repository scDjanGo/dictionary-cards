"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "She is afraid ___ spiders.",
    answer: "of",
    hint: "Чувство страха",
  },
  {
    sentence: "He is very good ___ mathematics.", 
    answer: "at",
    hint: "Умения и навыки",
  },
  {
    sentence: "I'm interested ___ learning languages.",
    answer: "in",
    hint: "Интересы и увлечения",
  },
  {
    sentence: "They are proud ___ their children.",
    answer: "of",
    hint: "Чувство гордости",
  },
  {
    sentence: "She is married ___ a doctor.",
    answer: "to",
    hint: "Отношения и связи",
  },
  {
    sentence: "He is responsible ___ the project.",
    answer: "for",
    hint: "Ответственность",
  },
];

const quizQuestions = [
  {
    question: "Какой предлог используется с 'afraid'?",
    options: ["about", "of", "with"],
    correct: 1,
    explanation: "AFRAID OF - бояться чего-либо"
  },
  {
    question: "Какой предлог используется с 'good' для умений?",
    options: ["in", "at", "for"],
    correct: 1, 
    explanation: "GOOD AT - хороший в чем-то (навыки)"
  },
  {
    question: "Какой предлог используется с 'interested'?",
    options: ["about", "in", "for"],
    correct: 1,
    explanation: "INTERESTED IN - интересующийся чем-либо"
  },
  {
    question: "Какой предлог используется с 'angry'?",
    options: ["about", "with", "at"],
    correct: 1,
    explanation: "ANGRY WITH - сердитый на кого-то"
  },
  {
    question: "Какой предлог используется с 'famous'?",
    options: ["for", "about", "with"],
    correct: 0,
    explanation: "FAMOUS FOR - известный чем-либо"
  }
];

const matchingExercises = [
  {
    adjective: "capable",
    correctPreposition: "of",
    options: ["of", "for", "with"]
  },
  {
    adjective: "addicted",
    correctPreposition: "to",
    options: ["to", "for", "with"]
  },
  {
    adjective: "eligible",
    correctPreposition: "for",
    options: ["for", "to", "of"]
  },
  {
    adjective: "acquainted",
    correctPreposition: "with",
    options: ["with", "to", "of"]
  },
  {
    adjective: "allergic",
    correctPreposition: "to",
    options: ["to", "for", "with"]
  },
  {
    adjective: "conscious",
    correctPreposition: "of",
    options: ["of", "about", "with"]
  }
];

export default function Prepositions_With_Adjectives_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "matching">("practice");
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMatch, setSelectedMatch] = useState<{ [key: string]: string }>({});

  const currentQuiz = quizQuestions[currentIndex % quizQuestions.length];
  const currentPractice = practiceSentences[currentIndex % practiceSentences.length];
  const currentMatching = matchingExercises[currentIndex % matchingExercises.length];

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

  const handleMatchingSelect = (adjective: string, preposition: string) => {
    setSelectedMatch(prev => ({
      ...prev,
      [adjective]: preposition
    }));
  };

  const handleMatchingCheck = () => {
    const correct = selectedMatch[currentMatching.adjective] === currentMatching.correctPreposition;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswer("");
    setSelectedMatch({});
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика предлогов с прилагательными
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
          Тест
        </button>
        <button
          onClick={() => setActiveTab("matching")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "matching"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Соответствия
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
            Выберите правильный предлог
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
                className={`p-4 rounded-lg border-2 text-center transition-all ${
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

      {/* Matching Tab */}
      {activeTab === "matching" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Подберите предлог к прилагательному
          </h3>
          <div className="text-center mb-6">
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 font-medium">
              Выберите правильный предлог для прилагательного:
            </p>
            <div className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
              {currentMatching.adjective}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
            {currentMatching.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleMatchingSelect(currentMatching.adjective, option)}
                disabled={showResult}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  selectedMatch[currentMatching.adjective] === option
                    ? "bg-blueCl text-white border-blueCl"
                    : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="text-center">
            {!showResult ? (
              <button
                onClick={handleMatchingCheck}
                disabled={!selectedMatch[currentMatching.adjective]}
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
                <p className="text-sm">
                  Правильный ответ: <strong className="text-green-600 dark:text-green-400">{currentMatching.correctPreposition}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}