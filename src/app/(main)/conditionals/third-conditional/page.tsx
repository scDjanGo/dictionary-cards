import Third_Conditional_Practice from "@/pages-components/conditionals/third-conditional/Third_Conditional_Practice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Third Conditional: Полное руководство с примерами | Нереальные ситуации в прошлом",
  description:
    "Изучите Third Conditional в английском языке. Нереальные ситуации в прошлом, сожаления, критика и гипотетические результаты. Условные предложения третьего типа.",
  keywords:
    "third conditional, conditional sentences, английская грамматика, if had would have, unreal past, hypothetical past",
};

const thirdConditionalData = [
  {
    structure: "If + Past Perfect, + would have + Past Participle",
    meaning: "для нереальных ситуаций в прошлом",
    usage: "Сожаления, критика, гипотетические результаты прошлых событий",
    examples: [
      "If I had studied harder, I would have passed the exam.",
      "If you had told me, I would have helped you.",
      "If they had left earlier, they wouldn't have missed the flight.",
    ],
  },
];

const usageTypes = [
  {
    type: "Сожаления",
    icon: "😔",
    description: "Выражение сожалений о прошлых действиях",
    examples: [
      "If I had known, I would have come to your party.",
      "If she had taken the job, she would have been happy.",
      "If we had saved money, we could have bought a house.",
    ],
  },
  {
    type: "Критика",
    icon: "👎",
    description: "Критика прошлых решений и действий",
    examples: [
      "If you had listened to me, this wouldn't have happened.",
      "If he had been more careful, he wouldn't have broken it.",
      "If they had planned better, they would have succeeded.",
    ],
  },
  {
    type: "Гипотетические результаты",
    icon: "🕰️",
    description: "Альтернативные результаты прошлых событий",
    examples: [
      "If I had won the lottery, I would have traveled the world.",
      "If you had called me, I would have picked you up.",
      "If it had snowed, we would have gone skiing.",
    ],
  },
  {
    type: "Объяснения",
    icon: "💬",
    description: "Объяснение причин прошлых событий",
    examples: [
      "I would have called if I had known your number.",
      "She would have come if she hadn't been sick.",
      "We would have stayed if the weather had been better.",
    ],
  },
];

const structureDetails = [
  {
    part: "If Clause (Условие)",
    structure: "If + Past Perfect",
    examples: ["If I had known", "If you had asked", "If they had come"],
    translation: "Если бы я знал, Если бы ты спросил, Если бы они пришли",
    color: "from-blue-500 to-blue-600",
    explanation: "Нереальное условие в прошлом",
  },
  {
    part: "Main Clause (Результат)",
    structure: "would have + Past Participle",
    examples: [
      "I would have helped",
      "I would have said yes",
      "I would have been happy",
    ],
    translation: "я бы помог, я бы сказал да, я бы был счастлив",
    color: "from-teal-500 to-teal-600",
    explanation: "Гипотетический результат в прошлом",
  },
];

const formulaVariations = [
  {
    formula: "If + Past Perfect, + would have + Past Participle",
    example: "If I had seen him, I would have told him.",
    translation: "Если бы я видел его, я бы сказал ему.",
    usage: "Стандартная форма",
    emphasis: "Наиболее распространенная",
  },
  {
    formula: "Would have + Past Participle + if + Past Perfect",
    example: "I would have told him if I had seen him.",
    translation: "Я бы сказал ему, если бы видел его.",
    usage: "Обратный порядок",
    emphasis: "Без запятой",
  },
  {
    formula: "Could/Might have + Past Participle",
    example: "If I had tried, I could have succeeded.",
    translation: "Если бы я попытался, я мог бы преуспеть.",
    usage: "Альтернативные модальные глаголы",
    emphasis: "Возможность вместо уверенности",
  },
];

const pastScenarios = [
  {
    situation: "Образовательные решения",
    context: "Сожаления об учебных решениях в прошлом",
    examples: [
      "If I had chosen a different major, I would have had more opportunities.",
      "If she had studied abroad, she would have learned another language.",
      "If we had taken that course, we would have better jobs now.",
    ],
  },
  {
    situation: "Карьерные возможности",
    context: "Упущенные профессиональные возможности",
    examples: [
      "If I had accepted the job offer, I would have moved to New York.",
      "If you had started earlier, you would have been promoted by now.",
      "If they had invested in that company, they would be millionaires.",
    ],
  },
  {
    situation: "Личные отношения",
    context: "Сожаления в личной жизни",
    examples: [
      "If I had apologized, we would still be friends.",
      "If he had been honest, she wouldn't have left him.",
      "If we had communicated better, we wouldn't have argued.",
    ],
  },
  {
    situation: "Финансовые решения",
    context: "Финансовые сожаления и упущенные возможности",
    examples: [
      "If I had bought Bitcoin earlier, I would be rich now.",
      "If you had saved more money, you could have bought a house.",
      "If they hadn't spent so much, they would have retirement savings.",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "If I would have known, I would have come.",
    correction: "If I had known, I would have come.",
    explanation:
      "В условии (if clause) НЕ используется would have, только в результате (main clause)",
  },
  {
    mistake: "If I had knew, I would have told you.",
    correction: "If I had known, I would have told you.",
    explanation:
      "После had используется Past Participle (третья форма глагола)",
  },
  {
    mistake: "If she would have studied, she will have passed.",
    correction: "If she had studied, she would have passed.",
    explanation: "Would have только в основной части, will не используется",
  },
];

const practiceExercises = [
  {
    question: "Если бы ты позвонил мне, я ________ тебе.",
    options: ["help", "would help", "would have helped", "helped"],
    correct: "would have helped",
    explanation: "If you had called me, I would have helped you.",
  },
  {
    question: "Если бы они уехали раньше, они ________ опоздали.",
    options: ["not", "wouldn't", "wouldn't have", "hadn't"],
    correct: "wouldn't have",
    explanation: "If they had left earlier, they wouldn't have been late.",
  },
  {
    question: "Если бы я знал ответ, я ________ его.",
    options: ["tell", "would tell", "would have told", "told"],
    correct: "would have told",
    explanation: "If I had known the answer, I would have told you.",
  },
];

const comparisonWithOthers = [
  {
    type: "First Conditional",
    time: "Будущее",
    reality: "Реальная ситуация",
    example: "If it rains, I will take an umbrella.",
    translation: "Если пойдет дождь, я возьму зонт.",
  },
  {
    type: "Second Conditional",
    time: "Настоящее/Будущее",
    reality: "Нереальная/маловероятная",
    example: "If I won the lottery, I would travel.",
    translation: "Если бы я выиграл в лотерею, я бы путешествовал.",
  },
  {
    type: "Third Conditional",
    time: "Прошлое",
    reality: "Нереальная (уже не изменить)",
    example: "If I had studied, I would have passed.",
    translation: "Если бы я учился, я бы сдал экзамен.",
  },
];

const modalVariations = [
  {
    modal: "would have",
    usage: "Уверенность в результате",
    example: "If I had known, I would have come.",
    translation: "Если бы я знал, я бы пришел.",
  },
  {
    modal: "could have",
    usage: "Возможность в прошлом",
    example: "If I had tried, I could have succeeded.",
    translation: "Если бы я попытался, я мог бы преуспеть.",
  },
  {
    modal: "might have",
    usage: "Вероятность в прошлом",
    example: "If he had been there, he might have seen it.",
    translation: "Если бы он был там, он, возможно, видел бы это.",
  },
  {
    modal: "should have",
    usage: "Ожидание/рекомендация",
    example: "If you had asked, I should have helped.",
    translation: "Если бы ты спросил, мне следовало бы помочь.",
  },
];

export default function page() {
  return (
    <div className="">
      <div className="">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
            Third Conditional
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Third conditional (третье условное предложение) используется, чтобы
            говорить о гипотетических ситуациях в прошлом, которые не случились,
            и о том, что произошло бы если бы они произошли.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Структура
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              If + Past Perfect,
              <br />
              would have + V3
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-teal-200 dark:border-teal-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Использование
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Сожаления о прошлом,
              <br />
              гипотетические результаты
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-indigo-200 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Ключевое правило
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Had + V3 в условии
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Introduction */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border max-895px:p-3 border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Что такое Third Conditional?
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed">
                <strong className="text-blue-600 dark:text-blue-400">
                  Third Conditional
                </strong>{" "}
                — это грамматическая конструкция, которая используется для
                описания
                <strong> нереальных ситуаций в прошлом</strong> и их
                гипотетических последствий, которые уже невозможно изменить.
              </p>

              <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-2xl p-8 my-8 text-center shadow-lg">
                <p className="text-2xl font-semibold leading-relaxed">
                  "Если бы условие A произошло в прошлом (но оно не произошло),{" "}
                  <br />
                  то результат B случился бы (но он не случился)"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-lg">
                    🎯 Когда использовать?
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Сожаления о прошлых решениях</li>
                    <li>• Критика прошлых действий</li>
                    <li>• Гипотетические результаты</li>
                    <li>• Объяснения прошлых событий</li>
                  </ul>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-800">
                  <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-3 text-lg">
                    ⚡ Особенности
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Ситуация уже произошла (или не произошла)</li>
                    <li>• Результат невозможно изменить</li>
                    <li>• Выражает сожаление или критику</li>
                    <li>• Часто используется для размышлений</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Structure */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🏗️ Структура Third Conditional
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {structureDetails.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.part}</h3>
                  <div className="bg-white/20 rounded-2xl p-6 mb-4 backdrop-blur-sm">
                    <p className="font-mono text-xl text-center font-bold">
                      {item.structure}
                    </p>
                  </div>
                  <p className="text-blue-100 text-sm mb-4 italic">
                    {item.explanation}
                  </p>
                  <div className="space-y-3">
                    {item.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                      >
                        <p className="text-sm font-medium">{example}</p>
                        <p className="text-xs opacity-75 mt-1">
                          {item.translation.split(", ")[i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Formula */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6">
                🎯 Основная формула
              </h3>
              <code className="text-3xl md:text-4xl font-mono text-white bg-transparent block mb-6 font-bold">
                If + Past Perfect, + would have + Past Participle
              </code>
              <div className="bg-blue-500/20 rounded-2xl p-4 inline-block">
                <p className="text-blue-200 text-lg">
                  Нереальное прошлое условие → Гипотетический прошлый результат
                </p>
              </div>
            </div>
          </section>

          {/* Usage Types */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              💼 Когда использовать Third Conditional?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {usageTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 max-895px:p-3 border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{type.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {type.type}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="space-y-4">
                    {type.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800"
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Formula Variations */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🔄 Вариации построения
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {formulaVariations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 text-center border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl p-4 mb-4">
                    <p className="font-mono text-sm text-blue-600 dark:text-blue-400 font-bold">
                      {variation.formula}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-3 italic leading-relaxed">
                    "{variation.example}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {variation.translation}
                  </p>
                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-xl p-3">
                    <p className="text-teal-700 dark:text-teal-300 text-sm font-semibold">
                      {variation.usage}
                    </p>
                    <p className="text-teal-600 dark:text-teal-400 text-xs mt-1">
                      {variation.emphasis}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Scenarios */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🕰️ Примеры сожалений о прошлом
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {pastScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-blue-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {scenario.situation}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 italic">
                    {scenario.context}
                  </p>
                  <div className="space-y-3">
                    {scenario.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 border border-blue-100 dark:border-gray-600"
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison with Other Conditionals */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🔄 Сравнение с другими Conditional
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {comparisonWithOthers.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-6 text-white shadow-2xl ${
                    index === 0
                      ? "bg-gradient-to-br from-orange-500 to-orange-600"
                      : index === 1
                      ? "bg-gradient-to-br from-purple-500 to-purple-600"
                      : "bg-gradient-to-br from-blue-500 to-blue-600"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">{item.type}</h3>
                  <div className="bg-white/20 rounded-xl p-3 mb-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold">Время: {item.time}</p>
                    <p className="text-xs opacity-90 mt-1">
                      Реальность: {item.reality}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 mb-3">
                    <p className="text-sm italic mb-1">"{item.example}"</p>
                    <p className="text-xs opacity-75">{item.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modal Variations */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12">
              💫 Вариации с модальными глаголами
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {modalVariations.map((modal, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-teal-200 dark:border-gray-600 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-3">
                    {modal.modal}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {modal.usage}
                  </p>
                  <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-2">
                      "{modal.example}"
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      {modal.translation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8  max-895px:p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl max-895px:text-2xl font-bold text-center text-red-600 dark:text-red-400 mb-12">
              ⚠️ Распространенные ошибки
            </h2>

            <div className="space-y-6">
              {commonMistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="bg-red-50 dark:bg-red-900/20 rounded-3xl p-6 border-l-4 border-red-500 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-red-700 dark:text-red-300 text-xl line-through mb-3 font-medium">
                        ❌ {mistake.mistake}
                      </p>
                      <p className="text-green-700 dark:text-green-300 text-xl font-bold">
                        ✅ {mistake.correction}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl p-4">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {mistake.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Final Summary */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-teal-700 text-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">🎉 Поздравляем!</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Теперь вы можете выражать сожаления о прошлом, критиковать прошлые
            решения и обсуждать гипотетические результаты с помощью Third
            Conditional.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🎯 Ключевые правила</h3>
              <ul className="space-y-2 text-blue-100 text-left">
                <li>• If + Past Perfect (условие)</li>
                <li>• Would have + Past Participle (результат)</li>
                <li>• Had + V3 в if-clause</li>
                <li>• No would have в if-clause!</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🚀 Следующие шаги</h3>
              <ul className="space-y-2 text-blue-100 text-left">
                <li>• Практикуйтесь в выражении сожалений</li>
                <li>• Анализируйте прошлые решения</li>
                <li>• Изучите Mixed Conditionals</li>
                <li>• Используйте в разговорной практике</li>
              </ul>
            </div>
          </div>
        </section>

        <Third_Conditional_Practice />
      </div>
    </div>
  );
}
