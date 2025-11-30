import Second_Conditional_Practice from "@/pages-components/conditionals/second-conditional/Seond_Conditional_Practice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Second Conditional: Полное руководство с примерами | Нереальные ситуации в английском",
  description:
    "Изучите Second Conditional в английском языке. Нереальные ситуации в настоящем и будущем, советы, мечты и гипотетические сценарии. Условные предложения второго типа.",
  keywords:
    "second conditional, conditional sentences, английская грамматика, if would, unreal present, hypothetical situations",
};

const usageTypes = [
  {
    type: "Нереальные ситуации",
    icon: "🌈",
    description: "Гипотетические сценарии в настоящем или будущем",
    examples: [
      "If I had superpowers, I would help people.",
      "If I lived in Paris, I would learn French.",
      "If I were taller, I would play basketball.",
    ],
  },
  {
    type: "Советы",
    icon: "💡",
    description: "Рекомендации и предложения",
    examples: [
      "If I were you, I would see a doctor.",
      "If you asked me, I would suggest waiting.",
      "If she were here, she would know what to do.",
    ],
  },
  {
    type: "Мечты и желания",
    icon: "⭐",
    description: "Выражение желаний и фантазий",
    examples: [
      "If I had more time, I would write a book.",
      "If money grew on trees, we would all be rich.",
      "If I could fly, I would visit every country.",
    ],
  },
  {
    type: "Вежливые просьбы",
    icon: "🙏",
    description: "Косвенные и вежливые вопросы",
    examples: [
      "If you had a moment, I would appreciate your help.",
      "If it weren't too much trouble, would you help me?",
      "If you could, would you pass me the salt?",
    ],
  },
];

const structureDetails = [
  {
    part: "If Clause (Условие)",
    structure: "If + Past Simple",
    examples: ["If I had money", "If you called", "If they knew"],
    translation:
      "Если бы у меня были деньги, Если бы ты позвонил, Если бы они знали",
    color: "from-purple-500 to-purple-600",
    explanation: "Нереальное условие в настоящем",
  },
  {
    part: "Main Clause (Результат)",
    structure: "would + Infinitive",
    examples: ["I would buy a car", "I would answer", "they would help"],
    translation: "я купил бы машину, я ответил бы, они помогли бы",
    color: "from-pink-500 to-pink-600",
    explanation: "Гипотетический результат",
  },
];

const formulaVariations = [
  {
    formula: "If + Past Simple, + would + Infinitive",
    example: "If I had time, I would help you.",
    translation: "Если бы у меня было время, я бы помог тебе.",
    usage: "Стандартная форма",
    emphasis: "Наиболее распространенная",
  },
  {
    formula: "Would + Infinitive + if + Past Simple",
    example: "I would help you if I had time.",
    translation: "Я бы помог тебе, если бы у меня было время.",
    usage: "Обратный порядок",
    emphasis: "Без запятой",
  },
  {
    formula: "If + were + would + Infinitive",
    example: "If I were rich, I would buy a castle.",
    translation: "Если бы я был богат, я бы купил замок.",
    usage: "С глаголом be",
    emphasis: "Were для всех лиц",
  },
];

const hypotheticalScenarios = [
  {
    situation: "Изменение жизни",
    context: "Что бы вы сделали, если бы могли изменить свою жизнь",
    examples: [
      "If I could start over, I would study medicine.",
      "If I had known then what I know now, I would have made different choices.",
      "If I were 20 again, I would travel more.",
    ],
  },
  {
    situation: "Нереальные способности",
    context: "Что бы вы делали с необычными способностями",
    examples: [
      "If I could read minds, I would understand people better.",
      "If I were invisible, I would prank my friends.",
      "If I could time travel, I would visit ancient Rome.",
    ],
  },
  {
    situation: "Идеальный мир",
    context: "Как бы изменился мир в идеальных условиях",
    examples: [
      "If there were no wars, the world would be peaceful.",
      "If everyone were kind, there would be no suffering.",
      "If money didn't exist, people would be happier.",
    ],
  },
  {
    situation: "Личные решения",
    context: "Гипотетические жизненные выборы",
    examples: [
      "If I weren't afraid, I would start my own business.",
      "If I had more confidence, I would speak in public.",
      "If I could choose any job, I would be a photographer.",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "If I would have money, I will buy a car.",
    correction: "If I had money, I would buy a car.",
    explanation:
      "В условии (if clause) НЕ используется would, только в результате (main clause)",
  },
  {
    mistake: "If I was you, I would study more.",
    correction: "If I were you, I would study more.",
    explanation:
      "С глаголом be используем were для всех лиц в нереальных ситуациях",
  },
  {
    mistake: "If I have time, I would help you.",
    correction: "If I had time, I would help you.",
    explanation: "В Second Conditional условие всегда в Past Simple",
  },
];

const comparisonWithFirst = [
  {
    type: "First Conditional",
    usage: "Реальные будущие ситуации",
    probability: "Высокая вероятность",
    example: "If it rains, I will take an umbrella.",
    translation: "Если пойдет дождь, я возьму зонт.",
  },
  {
    type: "Second Conditional",
    usage: "Нереальные или маловероятные ситуации",
    probability: "Низкая вероятность",
    example: "If I won the lottery, I would buy a house.",
    translation: "Если бы я выиграл в лотерею, я бы купил дом.",
  },
];

const specialCases = [
  {
    case: "Глагол be",
    rule: "Используем were для всех лиц",
    examples: [
      "If I were rich... (NOT: If I was rich...)",
      "If he were here... (NOT: If he was here...)",
      "If we were younger...",
    ],
  },
  {
    case: "Could в условии",
    rule: "Could используется для способности",
    examples: [
      "If I could speak French, I would live in Paris.",
      "If you could choose, where would you go?",
      "If we could help, we would.",
    ],
  },
  {
    case: "Would like / Would love",
    rule: "Выражение желаний в результате",
    examples: [
      "If I had time, I would like to travel.",
      "If it were possible, I would love to help.",
      "If you asked, I would be happy to come.",
    ],
  },
];

export default function SecondConditionalPage() {
  return (
    <div className="">
      <div className="">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Second Conditional
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Second Conditional - Используется для нереальных, маловероятных или
            воображаемых ситуаций в настоящем или будущем.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Структура
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              If + Past Simple,
              <br />
              would + Infinitive
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-pink-200 dark:border-pink-800 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
              Использование
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Нереальные ситуации,
              <br />
              советы, мечты
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
              Were для всех лиц
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Что такое Second Conditional?
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed">
                <strong className="text-purple-600 dark:text-purple-400">
                  Second Conditional
                </strong>{" "}
                — это грамматическая конструкция, которая используется для
                описания
                <strong>
                  {" "}
                  нереальных, гипотетических или маловероятных ситуаций
                </strong>{" "}
                в настоящем или будущем.
              </p>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-8 my-8 text-center shadow-lg">
                <p className="text-2xl font-semibold leading-relaxed">
                  "Если бы условие A было истинно (что маловероятно или
                  невозможно), <br />
                  то результат B произошел бы"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3 text-lg">
                    🎯 Когда использовать?
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Нереальные ситуации в настоящем</li>
                    <li>• Советы и рекомендации</li>
                    <li>• Мечты и фантазии</li>
                    <li>• Вежливые просьбы</li>
                  </ul>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-800">
                  <h4 className="font-bold text-pink-600 dark:text-pink-400 mb-3 text-lg">
                    ⚡ Особенности
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Ситуация маловероятна или невозможна</li>
                    <li>• Were вместо was для всех лиц</li>
                    <li>• Would в основной части</li>
                    <li>• Выражает сожаление или желание</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Structure */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🏗️ Структура Second Conditional
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
                If + Past Simple, + would + Infinitive
              </code>
              <div className="bg-purple-500/20 rounded-2xl p-4 inline-block">
                <p className="text-purple-200 text-lg">
                  Нереальное условие → Гипотетический результат
                </p>
              </div>
            </div>
          </section>

          {/* Usage Types */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              💼 Когда использовать Second Conditional?
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
                        className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-4 border border-purple-200 dark:border-purple-800"
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
                  <div className="bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl p-4 mb-4">
                    <p className="font-mono text-sm text-purple-600 dark:text-purple-400 font-bold">
                      {variation.formula}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-3 italic leading-relaxed">
                    "{variation.example}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {variation.translation}
                  </p>
                  <div className="bg-pink-100 dark:bg-pink-900/30 rounded-xl p-3">
                    <p className="text-pink-700 dark:text-pink-300 text-sm font-semibold">
                      {variation.usage}
                    </p>
                    <p className="text-pink-600 dark:text-pink-400 text-xs mt-1">
                      {variation.emphasis}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hypothetical Scenarios */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🌈 Примеры гипотетических сценариев
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {hypotheticalScenarios.map((scenario, index) => (
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

          {/* Comparison with First Conditional */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              🔄 Сравнение с First Conditional
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {comparisonWithFirst.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-8 text-white shadow-2xl ${
                    index === 0
                      ? "bg-gradient-to-br from-orange-500 to-orange-600"
                      : "bg-gradient-to-br from-purple-500 to-purple-600"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.type}</h3>
                  <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                    <p className="text-lg font-semibold">{item.usage}</p>
                    <p className="text-sm opacity-90 mt-1">
                      Вероятность: {item.probability}
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

          {/* Special Cases */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
              💫 Особые случаи
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {specialCases.map((special, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 border border-indigo-200 dark:border-gray-600 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                    {special.case}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {special.rule}
                  </p>
                  <div className="space-y-2">
                    {special.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-3"
                      >
                        <p className="text-gray-600 dark:text-gray-400 text-xs font-mono">
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
        <section className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">🎉 Поздравляем!</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Теперь вы можете свободно говорить о нереальных ситуациях, давать
            советы и выражать свои мечты с помощью Second Conditional.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🎯 Ключевые правила</h3>
              <ul className="space-y-2 text-indigo-100 text-left">
                <li>• If + Past Simple (условие)</li>
                <li>• Would + Infinitive (результат)</li>
                <li>• Were для всех лиц с глаголом be</li>
                <li>• No would в if-clause!</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🚀 Следующие шаги</h3>
              <ul className="space-y-2 text-indigo-100 text-left">
                <li>• Практикуйтесь в воображаемых ситуациях</li>
                <li>• Составляйте гипотетические сценарии</li>
                <li>• Изучите Third Conditional</li>
                <li>• Используйте для вежливых просьб</li>
              </ul>
            </div>
          </div>
        </section>

        <Second_Conditional_Practice />
      </div>
    </div>
  );
}
