"use client";

import { useState } from "react";

const practiceSentences = [
  {
    sentence: "I need to listen ___ the teacher.",
    answer: "to",
    hint: "Направленность восприятия",
  },
  {
    sentence: "She is waiting ___ her friend.", 
    answer: "for",
    hint: "Ожидание кого-то/чего-то",
  },
  {
    sentence: "They are talking ___ the weather.",
    answer: "about",
    hint: "Тема разговора",
  },
  {
    sentence: "I agree ___ your opinion.",
    answer: "with",
    hint: "Согласие с кем-то",
  },
  {
    sentence: "He is thinking ___ buying a car.",
    answer: "about",
    hint: "Размышления о чем-то",
  },
  {
    sentence: "The success depends ___ your efforts.",
    answer: "on",
    hint: "Зависимость от чего-то",
  },
];

const quizQuestions = [
  {
    question: "Какой предлог используется с 'listen'?",
    options: ["for", "to", "at"],
    correct: 1,
    explanation: "LISTEN TO - слушать что-либо/кого-либо"
  },
  {
    question: "Какой предлог используется с 'wait'?",
    options: ["to", "for", "at"],
    correct: 1, 
    explanation: "WAIT FOR - ждать кого-либо/чего-либо"
  },
  {
    question: "Какой предлог используется с 'agree' при согласии с мнением?",
    options: ["to", "with", "about"],
    correct: 1,
    explanation: "AGREE WITH - соглашаться с мнением/человеком"
  },
  {
    question: "Какой предлог используется с 'depend'?",
    options: ["of", "on", "from"],
    correct: 1,
    explanation: "DEPEND ON - зависеть от чего-либо"
  },
  {
    question: "Какой предлог используется с 'belong'?",
    options: ["for", "to", "with"],
    correct: 1,
    explanation: "BELONG TO - принадлежать кому-либо"
  }
];

const sentenceCompletion = [
  {
    sentence: "Can you please look ___ my cat while I'm away?",
    answer: "after",
    options: ["after", "for", "at"],
    translation: "Не мог бы ты присмотреть за моим котом, пока меня нет?"
  },
  {
    sentence: "I'm really looking forward ___ our vacation.",
    answer: "to",
    options: ["to", "for", "at"],
    translation: "Я очень жду нашего отпуска."
  },
  {
    sentence: "She takes ___ her mother in appearance.",
    answer: "after",
    options: ["after", "like", "from"],
    translation: "Она похожа на свою мать внешностью."
  },
  {
    sentence: "We need to come ___ with a better solution.",
    answer: "up",
    options: ["up", "out", "in"],
    translation: "Нам нужно придумать лучшее решение."
  }
];

const verbPrepositionPairs = [
  { verb: "listen", preposition: "to" },
  { verb: "wait", preposition: "for" },
  { verb: "talk", preposition: "about" },
  { verb: "agree", preposition: "with" },
  { verb: "depend", preposition: "on" },
  { verb: "belong", preposition: "to" },
  { verb: "look", preposition: "at" },
  { verb: "pay", preposition: "for" },
  { verb: "think", preposition: "about" },
  { verb: "apologize", preposition: "to" }
];

export default function Prepositions_With_Verbs_Interactive() {
  const [activeTab, setActiveTab] = useState<"practice" | "quiz" | "pairs" | "phrasal">("practice");
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPairs, setSelectedPairs] = useState<{ [key: string]: string }>({});

  const currentQuiz = quizQuestions[currentIndex % quizQuestions.length];
  const currentPractice = practiceSentences[currentIndex % practiceSentences.length];
  const currentCompletion = sentenceCompletion[currentIndex % sentenceCompletion.length];

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

  const handleCompletionCheck = () => {
    const correct = userAnswer.toLowerCase().trim() === currentCompletion.answer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handlePairSelect = (verb: string, preposition: string) => {
    setSelectedPairs(prev => ({
      ...prev,
      [verb]: preposition
    }));
  };

  const handlePairsCheck = () => {
    const allCorrect = verbPrepositionPairs.every(pair => 
      selectedPairs[pair.verb] === pair.preposition
    );
    setIsCorrect(allCorrect);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswer("");
    setCurrentIndex((prev) => prev + 1);
  };

  const handleResetPairs = () => {
    setSelectedPairs({});
    setShowResult(false);
  };

  return (
    <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8 border-2 border-blueCl dark:border-blue-800 mt-[22px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blueCl dark:text-blue-300">
        Практика глаголов с предлогами
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
          Базовые предлоги
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
          onClick={() => setActiveTab("pairs")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "pairs"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Соответствия
        </button>
        <button
          onClick={() => setActiveTab("phrasal")}
          className={`px-4 py-2 rounded-lg transition-all border-2 ${
            activeTab === "phrasal"
              ? "bg-blueCl text-white border-blueCl font-bold"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          }`}
        >
          Фразовые глаголы
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

      {/* Pairs Tab */}
      {activeTab === "pairs" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Соотнесите глаголы с предлогами
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-blueCl dark:text-blue-300 mb-3 text-center">Глаголы</h4>
              <div className="space-y-2">
                {verbPrepositionPairs.map((pair, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                    <span className="font-medium text-gray-800 dark:text-white">
                      {pair.verb}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-3 text-center">Предлоги</h4>
              <div className="grid grid-cols-2 gap-2">
                {["to", "for", "about", "with", "on", "at", "of", "from"].map((prep) => (
                  <button
                    key={prep}
                    onClick={() => {
                      // For demonstration, select random verb
                      const randomVerb = verbPrepositionPairs[Math.floor(Math.random() * verbPrepositionPairs.length)].verb;
                      handlePairSelect(randomVerb, prep);
                    }}
                    className="p-3 bg-white dark:bg-gray-700 rounded border-2 border-gray-300 dark:border-gray-600 hover:border-blueCl text-gray-800 dark:text-white"
                  >
                    {prep}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex gap-2 justify-center">
              <button
                onClick={handlePairsCheck}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Проверить
              </button>
              <button
                onClick={handleResetPairs}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Сбросить
              </button>
            </div>

            {showResult && (
              <div
                className={`text-center p-4 rounded-lg border-2 ${
                  isCorrect
                    ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 border-red-400 text-red-700 dark:text-red-400"
                }`}
              >
                <p className="font-bold text-lg">
                  {isCorrect ? "✅ Все верно!" : "❌ Есть ошибки!"}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Phrasal Verbs Tab */}
      {activeTab === "phrasal" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Фразовые глаголы
          </h3>
          <div className="text-center mb-6">
            <p className="text-lg mb-3 text-gray-700 dark:text-gray-300 font-medium">
              {currentCompletion.sentence}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {currentCompletion.translation}
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <select
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium focus:border-blueCl focus:outline-none"
              disabled={showResult}
            >
              <option value="">Выберите предлог</option>
              {currentCompletion.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {!showResult ? (
              <button
                onClick={handleCompletionCheck}
                disabled={!userAnswer}
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
                  Правильный ответ: <strong className="text-green-600 dark:text-green-400">{currentCompletion.answer}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}