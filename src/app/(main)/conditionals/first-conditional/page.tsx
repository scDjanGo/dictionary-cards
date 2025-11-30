import First_Conditional_Practice from "@/pages-components/conditionals/first-conditional/First_Conditional_Practice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "First Conditional: Полное руководство с примерами | Условные предложения в английском",
  description:
    "Изучите First Conditional в английском языке. Реальные ситуации в будущем, правила использования, примеры и практические упражнения. Условные предложения первого типа.",
  keywords:
    "first conditional, conditional sentences, английская грамматика, if will, future real conditional",
};

const usageTypes = [
  {
    type: "Предсказания",
    icon: "🔮",
    description: "Прогнозы о будущих событиях",
    examples: [
      "If you don't hurry, you will be late.",
      "If it snows, the roads will be dangerous.",
      "If we leave now, we will arrive on time.",
    ],
  },
  {
    type: "Обещания",
    icon: "🤝",
    description: "Обещания и обязательства",
    examples: [
      "If you need help, I will be there.",
      "If you call me, I will answer.",
      "If you come, I will be happy.",
    ],
  },
  {
    type: "Предупреждения",
    icon: "⚠️",
    description: "Предостережения о возможных последствиях",
    examples: [
      "If you touch that, you will burn yourself.",
      "If you don't study, you will fail.",
      "If you drive too fast, you will have an accident.",
    ],
  },
  {
    type: "Переговоры",
    icon: "💬",
    description: "Условия и соглашения",
    examples: [
      "If you finish your work, we will go out.",
      "If you pay now, you will get a discount.",
      "If you agree, we will start tomorrow.",
    ],
  },
];

const structureDetails = [
  {
    part: "If Clause (Условие)",
    structure: "If + Present Simple",
    examples: ["If it rains", "If you call", "If they agree"],
    translation: "Если пойдет дождь, Если ты позвонишь, Если они согласятся",
    color: "from-orange-500 to-orange-600",
    explanation: "Реальное условие в настоящем",
  },
  {
    part: "Main Clause (Результат)",
    structure: "will + Infinitive",
    examples: ["we will stay home", "I will answer", "we will start"],
    translation: "мы останемся дома, я отвечу, мы начнем",
    color: "from-green-500 to-green-600",
    explanation: "Будущий результат условия",
  },
];

const formulaVariations = [
  {
    formula: "If + Present Simple, + will + Infinitive",
    example: "If it rains, I will take an umbrella.",
    translation: "Если пойдет дождь, я возьму зонт.",
    usage: "Стандартная форма",
    emphasis: "Наиболее распространенная",
  },
  {
    formula: "Present Simple + if + will + Infinitive",
    example: "I will take an umbrella if it rains.",
    translation: "Я возьму зонт, если пойдет дождь.",
    usage: "Обратный порядок",
    emphasis: "Без запятой",
  },
  {
    formula: "Unless + Present Simple, + will + Infinitive",
    example: "Unless it rains, we will go hiking.",
    translation: "Если только не пойдет дождь, мы пойдем в поход.",
    usage: "Отрицательное условие",
    emphasis: "Unless = if not",
  },
];

const realLifeScenarios = [
  {
    situation: "Планы на выходные",
    context: "Обсуждение планов в зависимости от погоды",
    examples: [
      "If the weather is good, we will have a picnic.",
      "If it rains, we will go to the cinema.",
      "If my friends come, we will play games.",
    ],
  },
  {
    situation: "Работа и карьера",
    context: "Профессиональные решения и последствия",
    examples: [
      "If I get this job, I will move to London.",
      "If the meeting finishes early, I will call you.",
      "If we get the contract, we will celebrate.",
    ],
  },
  {
    situation: "Здоровье и образ жизни",
    context: "Решения, влияющие на здоровье",
    examples: [
      "If you exercise regularly, you will feel better.",
      "If I have time, I will go to the gym.",
      "If you eat healthy food, you will have more energy.",
    ],
  },
  {
    situation: "Путешествия",
    context: "Планы поездок и возможные изменения",
    examples: [
      "If the flight is cheap, I will visit Spain.",
      "If I save enough money, I will travel to Japan.",
      "If you come with me, it will be more fun.",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "If it will rain, we cancel the trip.",
    correction: "If it rains, we will cancel the trip.",
    explanation:
      "В условии (if clause) НЕ используется will, только в результате (main clause)",
  },
  {
    mistake: "If you will call me, I answer.",
    correction: "If you call me, I will answer.",
    explanation: "Will используется только в основной части предложения",
  },
  {
    mistake: "If she will come, we will happy.",
    correction: "If she comes, we will be happy.",
    explanation: "После will нужен глагол в инфинитиве (be)",
  },
];

const comparisonWithZero = [
  {
    type: "Zero Conditional",
    usage: "Факты и общие истины",
    time: "Настоящее (всегда)",
    example: "If you heat ice, it melts.",
    translation: "Если нагреть лед, он тает.",
  },
  {
    type: "First Conditional",
    usage: "Реальные будущие ситуации",
    time: "Будущее (вероятное)",
    example: "If it rains, I will take an umbrella.",
    translation: "Если пойдет дождь, я возьму зонт.",
  },
];

export default function page() {
  return (
    <div className=" py-8">
      <div className="">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            First Conditional
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            First Conditional - используется, когда мы говорим о реальных,
            возможных ситуациях в будущем — то есть о том, что может реально
            произойти, если выполнится условие.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Структура
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              If + Present Simple,
              <br />
              will + Infinitive
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Использование
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Реальные будущие
              <br />
              ситуации
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Ключевое правило
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No will in if-clause
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Introduction */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Что такое First Conditional?
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed">
                <strong className="text-orange-600 dark:text-orange-400">
                  First Conditional
                </strong>{" "}
                — это грамматическая конструкция, которая используется для
                описания
                <strong> реальных и вероятных ситуаций в будущем</strong> и их
                возможных последствий.
              </p>

              <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-2xl p-8 my-8 text-center shadow-lg">
                <p className="text-2xl font-semibold leading-relaxed">
                  "Если условие A произойдет (что вполне вероятно), <br />
                  то результат B случится в будущем"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-lg">
                    🎯 Когда использовать?
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Предсказания о будущем</li>
                    <li>• Обещания и предупреждения</li>
                    <li>• Переговоры и условия</li>
                    <li>• Реальные планы</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-3 text-lg">
                    ⚡ Особенности
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Условие реально и выполнимо</li>
                    <li>• Результат вероятен</li>
                    <li>• Время — ближайшее будущее</li>
                    <li>• Ситуация конкретна</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Structure */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🏗️ Структура First Conditional
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
                  <p className="text-orange-100 text-sm mb-4 italic">
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
                If + Present Simple, + will + Infinitive
              </code>
              <div className="bg-orange-500/20 rounded-2xl p-4 inline-block">
                <p className="text-orange-200 text-lg">
                  Реальное условие в настоящем → Вероятный результат в будущем
                </p>
              </div>
            </div>
          </section>

          {/* Usage Types */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              💼 Когда использовать First Conditional?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {usageTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300"
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
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🔄 Вариации построения
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {formulaVariations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 text-center border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-orange-500/10 dark:bg-orange-500/20 rounded-2xl p-4 mb-4">
                    <p className="font-mono text-sm text-orange-600 dark:text-orange-400 font-bold">
                      {variation.formula}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-3 italic leading-relaxed">
                    "{variation.example}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {variation.translation}
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-3">
                    <p className="text-green-700 dark:text-green-300 text-sm font-semibold">
                      {variation.usage}
                    </p>
                    <p className="text-green-600 dark:text-green-400 text-xs mt-1">
                      {variation.emphasis}
                    </p>
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
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-blue-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all"
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

          {/* Comparison with Zero Conditional */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🔄 Сравнение с Zero Conditional
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {comparisonWithZero.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-8 text-white shadow-2xl ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.type}</h3>
                  <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                    <p className="text-lg font-semibold">{item.usage}</p>
                    <p className="text-sm opacity-90 mt-1">
                      Время: {item.time}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 mb-4">
                    <p className="text-lg italic mb-2">"{item.example}"</p>
                    <p className="text-sm opacity-75">{item.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-red-600 dark:text-red-400 mb-12">
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
            Теперь вы знаете, как использовать First Conditional для описания
            реальных будущих ситуаций и их вероятных последствий.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🎯 Ключевые правила</h3>
              <ul className="space-y-2 text-purple-100 text-left">
                <li>• If + Present Simple (условие)</li>
                <li>• Will + Infinitive (результат)</li>
                <li>• No will в if-clause!</li>
                <li>• Запятая при начале с if</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🚀 Следующие шаги</h3>
              <ul className="space-y-2 text-purple-100 text-left">
                <li>• Практикуйтесь в речи</li>
                <li>• Составляйте свои примеры</li>
                <li>• Изучите Second Conditional</li>
                <li>• Используйте в реальных ситуациях</li>
              </ul>
            </div>
          </div>
        </section>

        <First_Conditional_Practice />
      </div>
    </div>
  );
}
