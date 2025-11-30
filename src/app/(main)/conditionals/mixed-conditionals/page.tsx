import Mixed_Conditionals_Practice from "@/pages-components/conditionals/mixed-conditional/Mixed_Conditionals_Practice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mixed Conditionals: Полное руководство с примерами | Смешанные условные предложения",
  description:
    "Изучите Mixed Conditionals в английском языке. Комбинации разных времен в условных предложениях, сложные гипотетические ситуации, связь прошлого с настоящим.",
  keywords:
    "mixed conditionals, conditional sentences, английская грамматика, смешанные условные предложения, if had would",
};

const mixedConditionalsData = [
  {
    type: "Тип 1: Прошлое условие → Настоящий результат",
    structure: "If + Past Perfect, + would + Infinitive",
    meaning: "Прошлое условие влияет на настоящее",
    usage: "Нереальное прошлое условие с результатом в настоящем",
    examples: [
      "If I had studied harder, I would have a better job now.",
      "If you had saved money, you wouldn't be in debt today.",
      "If she had taken that job, she would live in London now.",
    ],
  },
  {
    type: "Тип 2: Настоящее условие → Прошлый результат",
    structure: "If + Past Simple, + would have + Past Participle",
    meaning: "Настоящее условие влияет на прошлое",
    usage: "Нереальное настоящее условие с результатом в прошлом",
    examples: [
      "If I were smarter, I would have made better decisions.",
      "If you liked traveling, you would have visited more countries.",
      "If he were more careful, he wouldn't have had that accident.",
    ],
  },
];

const usageTypes = [
  {
    type: "Сожаления о прошлом",
    icon: "😔",
    description: "Как прошлые решения влияют на настоящее",
    examples: [
      "If I had learned English earlier, I would have more opportunities now.",
      "If we had bought that house, we would be rich today.",
      "If you had listened to me, you wouldn't be in this situation.",
    ],
  },
  {
    type: "Постоянные качества",
    icon: "🎭",
    description: "Как личные качества влияли на прошлые решения",
    examples: [
      "If I were more confident, I would have asked for a promotion.",
      "If she were less stubborn, she would have accepted help.",
      "If they were more adventurous, they would have traveled more.",
    ],
  },
  {
    type: "Альтернативные настоящие",
    icon: "🔄",
    description: "Как изменилось бы настоящее при других прошлых решениях",
    examples: [
      "If I had married him, I would live in France now.",
      "If you had chosen art school, you would be an artist today.",
      "If we had invested in Apple, we would be millionaires now.",
    ],
  },
  {
    type: "Гипотетические прошлые",
    icon: "📜",
    description: "Как изменилось бы прошлое при других настоящих качествах",
    examples: [
      "If I knew how to cook, I would have prepared dinner.",
      "If you spoke Chinese, you would have gotten that job.",
      "If they were rich, they would have donated more money.",
    ],
  },
];

const structureDetails = [
  {
    type: "Past Condition → Present Result",
    condition: "If + Past Perfect",
    result: "would + Infinitive",
    explanation: "Прошлое условие влияет на настоящее положение",
    examples: [
      "If I had gone to university, I would be a doctor now.",
      "If you had practiced more, you would speak better English.",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "Present Condition → Past Result",
    condition: "If + Past Simple",
    result: "would have + Past Participle",
    explanation: "Настоящее качество влияет на прошлое решение",
    examples: [
      "If I were taller, I would have played basketball.",
      "If you liked science, you would have studied physics.",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
];

const commonPatterns = [
  {
    pattern: "Past Perfect → would + be",
    usage: "Описание текущего состояния из-за прошлого решения",
    examples: [
      "If I had taken that job, I would be the manager now.",
      "If we had left earlier, we would be there by now.",
    ],
    translation: [
      "Если бы я взял ту работу, я был бы менеджером сейчас.",
      "Если бы мы уехали раньше, мы были бы там уже.",
    ],
  },
  {
    pattern: "Past Simple → would have + V3",
    usage: "Описание прошлого решения из-за текущего качества",
    examples: [
      "If I were braver, I would have started my own business.",
      "If she were more patient, she would have finished the project.",
    ],
    translation: [
      "Если бы я был смелее, я бы начал свой бизнес.",
      "Если бы она была терпеливее, она бы закончила проект.",
    ],
  },
  {
    pattern: "Past Perfect → would + have",
    usage: "Описание текущего владения из-за прошлого действия",
    examples: [
      "If I had saved money, I would have a car now.",
      "If you had invested, you would have more savings.",
    ],
    translation: [
      "Если бы я копил деньги, у меня была бы машина сейчас.",
      "Если бы ты инвестировал, у тебя было бы больше сбережений.",
    ],
  },
];

const realLifeScenarios = [
  {
    situation: "Карьерные решения",
    context: "Как прошлые карьерные выборы влияют на настоящее",
    examples: [
      "If I had accepted that job offer, I would be living in New York now.",
      "If you had started your business earlier, you would be retired by now.",
      "If she had studied computer science, she would work at Google today.",
    ],
  },
  {
    situation: "Личные отношения",
    context: "Как прошлые отношения влияют на текущую жизнь",
    examples: [
      "If I had married her, I would have children now.",
      "If we had stayed together, we would be celebrating our anniversary.",
      "If you had forgiven him, you would still be friends.",
    ],
  },
  {
    situation: "Финансовые решения",
    context: "Как прошлые финансовые выборы влияют на текущее состояние",
    examples: [
      "If I had bought Bitcoin in 2010, I would be a millionaire now.",
      "If you had invested in real estate, you would own property today.",
      "If they had saved more, they wouldn't be struggling now.",
    ],
  },
  {
    situation: "Образовательные выборы",
    context: "Как прошлое образование влияет на текущие возможности",
    examples: [
      "If I had learned programming, I would have a better job now.",
      "If you had studied medicine, you would be a doctor today.",
      "If we had taken that course, we would know how to do this.",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "If I would have studied, I would have a good job.",
    correction: "If I had studied, I would have a good job.",
    explanation:
      "В условии (if clause) используется Past Perfect, а не would have",
  },
  {
    mistake: "If I was richer, I would have bought that house.",
    correction: "If I were richer, I would have bought that house.",
    explanation:
      "С глаголом be в нереальных ситуациях используем were для всех лиц",
  },
  {
    mistake: "If I had known, I will help you.",
    correction: "If I had known, I would help you.",
    explanation:
      "В Mixed Conditional с прошлым условием используем would в настоящем",
  },
];

const practiceExercises = [
  {
    question:
      "Если бы я учился усерднее в школе, я ________ в хорошем университете сейчас.",
    options: ["study", "would study", "would be studying", "studied"],
    correct: "would be studying",
    explanation:
      "If I had studied harder in school, I would be studying at a good university now.",
  },
  {
    question: "Если бы ты был более уверенным, ты ________ эту возможность.",
    options: ["take", "would take", "would have taken", "took"],
    correct: "would have taken",
    explanation:
      "If you were more confident, you would have taken this opportunity.",
  },
  {
    question: "Если бы они купили те акции, они ________ сейчас богаты.",
    options: ["are", "would be", "would have been", "were"],
    correct: "would be",
    explanation: "If they had bought those stocks, they would be rich now.",
  },
];

const comparisonTable = [
  {
    type: "Third Conditional",
    structure: "If + Past Perfect, would have + V3",
    time: "Прошлое → Прошлое",
    example: "If I had studied, I would have passed.",
    translation: "Если бы я учился, я бы сдал.",
  },
  {
    type: "Mixed Type 1",
    structure: "If + Past Perfect, would + V1",
    time: "Прошлое → Настоящее",
    example: "If I had studied, I would have a degree.",
    translation: "Если бы я учился, у меня была бы степень.",
  },
  {
    type: "Mixed Type 2",
    structure: "If + Past Simple, would have + V3",
    time: "Настоящее → Прошлое",
    example: "If I were smart, I would have studied.",
    translation: "Если бы я был умным, я бы учился.",
  },
];

const advancedExamples = [
  {
    scenario: "Сожаления о неиспользованных возможностях",
    examples: [
      "If I had taken that risk, my life would be completely different now.",
      "If we had trusted our instincts, we wouldn't be in this mess today.",
      "If you had followed your passion, you would be much happier now.",
    ],
  },
  {
    scenario: "Воображаемые альтернативные жизни",
    examples: [
      "If I had been born in another country, I would speak a different language.",
      "If my parents had stayed together, I would have had a normal childhood.",
      "If I had chosen art over business, I would be a famous painter now.",
    ],
  },
  {
    scenario: "Гипотетические профессиональные пути",
    examples: [
      "If I had pursued acting, I would be in Hollywood by now.",
      "If you had continued with sports, you would have been a champion.",
      "If she had stayed in research, she would have made important discoveries.",
    ],
  },
];

export default function page() {
  return (
    <div className="">
      <div className="">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Mixed Conditionals
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mixed Conditionals — это условные конструкции, которые соединяют
            разные временные планы, показывая, как события прошлого могут влиять
            на настоящее, или наоборот.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏪</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Прошлое → Настоящее
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              If + Past Perfect,
              <br />
              would + Infinitive
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-indigo-200 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏩</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Настоящее → Прошлое
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              If + Past Simple,
              <br />
              would have + V3
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-pink-200 dark:border-pink-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Сложные связи
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Связываем разные
              <br />
              временные периоды
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Introduction */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h2 className="text-4xl max-895px:text-2xl font-bold text-gray-900 dark:text-white">
                Что такое Mixed Conditionals?
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed">
                <strong className="text-purple-600 dark:text-purple-400">
                  Mixed Conditionals
                </strong>{" "}
                — это условные предложения, в которых условие и результат
                относятся к <strong>разным временным периодам</strong>. Они
                позволяют выражать сложные гипотетические ситуации, где прошлые
                решения влияют на настоящее или настоящие качества влияли на
                прошлые решения.
              </p>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-8 my-8 text-center shadow-lg">
                <p className="text-2xl font-semibold leading-relaxed">
                  "Mixed Conditionals связывают то, что было, с тем, что есть,{" "}
                  <br />и показывают, как все могло бы быть иначе"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3 text-lg">
                    🎯 Когда использовать?
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Сожаления о прошлых решениях</li>
                    <li>• Альтернативные настоящие реальности</li>
                    <li>• Влияние качеств на прошлые решения</li>
                    <li>• Сложные гипотетические сценарии</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-3 text-lg">
                    ⚡ Особенности
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Комбинации разных времен</li>
                    <li>• Более выразительные конструкции</li>
                    <li>• Сложные причинно-следственные связи</li>
                    <li>• Продвинутый уровень английского</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Main Types */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🏗️ Основные типы Mixed Conditionals
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {mixedConditionalsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-2xl hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                    {item.type}
                  </h3>

                  <div className="bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl p-4 mb-4">
                    <p className="font-mono text-lg text-center text-purple-600 dark:text-purple-400 font-bold">
                      {item.structure}
                    </p>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Значение:</strong> {item.meaning}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {item.usage}
                  </p>

                  <div className="space-y-3">
                    {item.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 border border-purple-100 dark:border-gray-600"
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

          {/* Structure Details */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              📐 Детали структур
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {structureDetails.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.type}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4 max-595px:grid-cols-1">
                    <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <p className="text-sm opacity-90 mb-2">Условие</p>
                      <p className="font-mono text-lg font-bold">
                        {item.condition}
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <p className="text-sm opacity-90 mb-2">Результат</p>
                      <p className="font-mono text-lg font-bold">
                        {item.result}
                      </p>
                    </div>
                  </div>

                  <p className="text-purple-100 text-sm mb-4 italic">
                    {item.explanation}
                  </p>

                  <div className="space-y-3">
                    {item.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                      >
                        <p className="text-sm font-medium">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Patterns */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl max-895px:text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
              🎯 Распространенные паттерны
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {commonPatterns.map((pattern, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-indigo-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                    {pattern.pattern}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {pattern.usage}
                  </p>

                  <div className="space-y-3">
                    {pattern.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-3"
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                          {example}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs italic">
                          {pattern.translation[i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real Life Scenarios */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🌍 Примеры из реальной жизни
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {realLifeScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-purple-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    {scenario.situation}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 italic">
                    {scenario.context}
                  </p>
                  <div className="space-y-3">
                    {scenario.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 border border-purple-100 dark:border-gray-600"
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

          {/* Comparison Table */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              📊 Сравнение с Third Conditional
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {comparisonTable.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-6 text-white shadow-2xl ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : index === 1
                      ? "bg-gradient-to-br from-purple-500 to-purple-600"
                      : "bg-gradient-to-br from-indigo-500 to-indigo-600"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">{item.type}</h3>
                  <div className="bg-white/20 rounded-xl p-3 mb-3 backdrop-blur-sm">
                    <p className="font-mono text-sm text-center">
                      {item.structure}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 mb-3">
                    <p className="text-sm font-semibold mb-1">Время:</p>
                    <p className="text-sm opacity-90">{item.time}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm italic mb-1">"{item.example}"</p>
                    <p className="text-xs opacity-75">{item.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Examples */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400 mb-12">
              💫 Продвинутые примеры
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {advancedExamples.map((advanced, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-pink-200 dark:border-gray-600 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-4">
                    {advanced.scenario}
                  </h3>
                  <div className="space-y-3">
                    {advanced.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-3"
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
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
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">🎉 Поздравляем!</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Теперь вы владеете самыми сложными и выразительными условными
            конструкциями в английском языке, которые открывают новые
            возможности для описания гипотетических ситуаций.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🎯 Ключевые правила</h3>
              <ul className="space-y-2 text-purple-100 text-left">
                <li>• Past Perfect → would + Infinitive</li>
                <li>• Past Simple → would have + V3</li>
                <li>• Следите за согласованием времен</li>
                <li>• Were для всех лиц с глаголом be</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🚀 Следующие шаги</h3>
              <ul className="space-y-2 text-purple-100 text-left">
                <li>• Практикуйтесь в разговорной речи</li>
                <li>• Анализируйте примеры в контексте</li>
                <li>• Читайте художественную литературу</li>
                <li>• Используйте в письменной практике</li>
              </ul>
            </div>
          </div>
        </section>

        <Mixed_Conditionals_Practice />
      </div>
    </div>
  );
}
