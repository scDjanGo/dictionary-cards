import Zero_Conditional_Practice from "@/pages-components/conditionals/zero-conditional/Zero-Conditional_Practice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Zero Conditional: Полное руководство с примерами | Изучение английской грамматики",
  description:
    "Изучите Zero Conditional в английском языке. Полное руководство с примерами, правилами использования, упражнениями и таблицами. Условные предложения нулевого типа для описания фактов и научных истин.",
  keywords:
    "zero conditional, условные предложения, английская грамматика, английский язык, грамматика, if present simple, conditional sentences",
};

const usageTypes = [
  {
    type: "Научные факты",
    icon: "🔬",
    description: "Законы природы и научные истины",
    examples: [
      "If you heat water to 100°C, it boils.",
      "If you mix acid and base, you get salt.",
      "If there is no gravity, objects float.",
    ],
  },
  {
    type: "Общеизвестные истины",
    icon: "💡",
    description: "Факты, которые всегда верны в повседневной жизни",
    examples: [
      "If you don't eat, you get hungry.",
      "If you touch fire, you get burned.",
      "If you study hard, you get good grades.",
    ],
  },
  {
    type: "Инструкции и правила",
    icon: "📝",
    description: "Последовательности действий и процедуры",
    examples: [
      "If the light is red, you stop.",
      "If you feel sick, you see a doctor.",
      "If you finish work, you go home.",
    ],
  },
  {
    type: "Причинно-следственные связи",
    icon: "⚡",
    description: "Ситуации, где одно действие всегда приводит к результату",
    examples: [
      "If you save money, you can buy things.",
      "If you practice daily, you improve skills.",
      "If you read books, you learn new things.",
    ],
  },
];

const structureDetails = [
  {
    part: "If Clause (Условие)",
    structure: "If + Present Simple",
    examples: ["If it rains", "If you study", "If she calls"],
    translation: "Если идет дождь, Если ты учишься, Если она звонит",
    color: "from-blue-500 to-blue-600",
  },
  {
    part: "Main Clause (Результат)",
    structure: "Present Simple",
    examples: ["the ground gets wet", "you learn", "I answer"],
    translation: "земля становится мокрой, ты учишь, я отвечаю",
    color: "from-green-500 to-green-600",
  },
];

const formulaVariations = [
  {
    formula: "If + Present Simple, + Present Simple",
    example: "If it rains, the ground gets wet.",
    translation: "Если идет дождь, земля становится мокрой.",
    usage: "Стандартный порядок",
  },
  {
    formula: "Present Simple + if + Present Simple",
    example: "The ground gets wet if it rains.",
    translation: "Земля становится мокрой, если идет дождь.",
    usage: "Обратный порядок (без запятой)",
  },
  {
    formula: "When + Present Simple, + Present Simple",
    example: "When you heat ice, it melts.",
    translation: "Когда ты нагреваешь лед, он тает.",
    usage: "When вместо If",
  },
];

const interactiveExamples = [
  {
    condition: "you heat water to 100°C",
    result: "it boils",
    translation: "Если нагреть воду до 100°C, она закипает",
    category: "science",
  },
  {
    condition: "you don't water plants",
    result: "they die",
    translation: "Если не поливать растения, они погибают",
    category: "nature",
  },
  {
    condition: "you exercise regularly",
    result: "you stay healthy",
    translation: "Если регулярно заниматься спортом, остаешься здоровым",
    category: "health",
  },
  {
    condition: "you save money",
    result: "you can buy things",
    translation: "Если экономить деньги, можно покупать вещи",
    category: "life",
  },
];

const commonMistakes = [
  {
    mistake: "If it will rain, we cancel the trip.",
    correction: "If it rains, we cancel the trip.",
    explanation: "В Zero Conditional НЕ используется will/future tense",
  },
  {
    mistake: "If you heated ice, it melted.",
    correction: "If you heat ice, it melts.",
    explanation: "Всегда используйте Present Simple в обеих частях",
  },
  {
    mistake: "If she call, I answer.",
    correction: "If she calls, I answer.",
    explanation: "Не забывайте про -s в 3 лице единственного числа",
  },
];

const faqItems = [
  {
    question: "В чем разница между Zero и First Conditional?",
    answer:
      "Zero Conditional описывает ситуации, которые всегда истинны (факты), а First Conditional описывает реальные или вероятные ситуации в будущем.",
  },
  {
    question: "Можно ли использовать другие времена кроме Present Simple?",
    answer:
      "Нет, в Zero Conditional всегда используются только Present Simple в обеих частях предложения.",
  },
  {
    question: "Когда ставится запятая в Zero Conditional?",
    answer:
      "Запятая ставится только тогда, когда предложение начинается с If clause. Если предложение начинается с Main clause, запятая не нужна.",
  },
  {
    question: "Можно ли использовать When вместо If?",
    answer:
      "Да, в Zero Conditional слова If и When взаимозаменяемы, так как описывают ситуации, которые всегда происходят при определенных условиях.",
  },
];

export default function ZeroConditionalPage() {
  return (
    <div className="bg-lightBg dark:bg-darkBg py-8">
      <div className="">
        {/* Hero Section with Breadcrumbs */}
        {/* <nav className="mb-8" aria-label="Хлебные крошки">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-blueCl transition-colors">Главная</a>
            <span className="mx-2">/</span>
            <a href="/grammar" className="hover:text-blueCl transition-colors">Грамматика</a>
            <span className="mx-2">/</span>
            <span className="text-blueCl font-medium">Zero Conditional</span>
          </div>
        </nav> */}

        {/* Main Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Zero Conditional в Английском Языке
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Zero Conditional - используется, когда мы говорим о фактах, правилах,
            закономерностях, которые всегда верны. Это не фантазия, не будущее и
            не гипотетическая ситуация — это универсальная истина.
          </p>
        </header>

        {/* Quick Summary Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Структура
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              If + Present Simple,
              <br />
              Present Simple
            </p>
          </div>

          <div className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Использование
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Факты, научные истины,
              <br />
              причинные связи
            </p>
          </div>

          <div className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Особенности
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Всегда истинно,
              <br />
              Present Simple в обеих частях
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Introduction Section */}
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blueCl rounded-full flex items-center justify-center text-white text-lg mr-3">
                1
              </span>
              Что такое Zero Conditional?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                <strong className="text-blueCl">Zero Conditional</strong>{" "}
                (условные предложения нулевого типа) — это грамматическая
                конструкция в английском языке, которая используется для
                описания ситуаций, которые <strong>всегда истинны</strong> и не
                зависят от времени.
              </p>

              <div className="bg-gradient-to-r from-blueCl to-blue-600 text-white rounded-2xl p-6 my-6">
                <p className="text-lg font-semibold text-center text-bgLight">
                  "Если условие A происходит, то результат B происходит всегда,
                  без исключений"
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Эта конструкция идеально подходит для описания научных фактов,
                законов природы, общеизвестных истин и причинно-следственных
                связей, которые остаются неизменными.
              </p>
            </div>
          </section>

          {/* Structure Section */}
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Структура Zero Conditional
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {structureDetails.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-6 shadow-lg`}
                >
                  <h3 className="text-xl font-bold mb-4">{item.part}</h3>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-4">
                    <p className="font-mono text-lg text-center text-bgItem">
                      {item.structure}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="text-sm opacity-90">
                        <p>{example}</p>
                        <p className="text-xs opacity-75 italic">
                          {item.translation.split(", ")[i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Formula */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-4">
                Основная формула Zero Conditional
              </h3>
              <code className="text-2xl md:text-3xl font-mono text-white bg-transparent block mb-4">
                If + Present Simple, + Present Simple
              </code>
              <p className="text-gray-300 text-sm">
                Условие (If clause) + Результат (Main clause)
              </p>
            </div>
          </section>

          {/* Usage Types */}
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Когда использовать Zero Conditional?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {usageTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{type.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {type.type}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {type.description}
                  </p>

                  <div className="space-y-3">
                    {type.examples.map((example, i) => (
                      <div
                        key={i}
                        className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
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
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-blueCl dark:text-blue-300 mb-8 text-center">
              Вариации построения предложений
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {formulaVariations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blueCl bg-opacity-10 dark:bg-opacity-20 rounded-xl p-3 mb-4">
                    <p className="font-mono text-sm text-bgLight  font-bold">
                      {variation.formula}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 italic">
                    {variation.example}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                    {variation.translation}
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2">
                    <p className="text-green-700 dark:text-green-300 text-xs font-medium">
                      {variation.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Examples */}
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Примеры Zero Conditional в действии
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {interactiveExamples.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-blue-200 dark:border-gray-600 hover:border-blueCl dark:hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-red-500 font-bold text-lg">
                      If {item.condition}
                    </div>
                    <div className="text-blueCl text-2xl font-bold">→</div>
                    <div className="text-green-500 font-bold text-lg">
                      {item.result}
                    </div>
                  </div>
                  <p className="text-center text-gray-600 dark:text-gray-400 italic">
                    {item.translation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-8 text-center">
              ⚠️ Распространенные ошибки
            </h2>

            <div className="space-y-6">
              {commonMistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border-l-4 border-red-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                    <div className="mb-3 md:mb-0 md:flex-1">
                      <p className="text-red-700 dark:text-red-300 text-lg line-through mb-2">
                        ❌ {mistake.mistake}
                      </p>
                      <p className="text-green-700 dark:text-green-300 text-lg font-bold">
                        ✅ {mistake.correction}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {mistake.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gradient-to-r from-blueCl to-blue-600 text-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🎯 Ключевые выводы
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Основные правила:</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Всегда используйте Present Simple в обеих частях</li>
                  <li>• If и When взаимозаменяемы</li>
                  <li>• Запятая только при начале с If clause</li>
                  <li>• Порядок частей может меняться</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Когда использовать:</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Научные факты и законы природы</li>
                  <li>• Общеизвестные истины</li>
                  <li>• Инструкции и правила</li>
                  <li>• Причинно-следственные связи</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-xl text-center">
              <p className="text-lg font-semibold text-bgItem">
                Zero Conditional описывает универсальные истины, которые всегда
                актуальны и не меняются со временем.
              </p>
            </div>
          </section>
        </main>

        {/* FAQ Section */}
        <section className="mt-12 bg-white dark:bg-bgItem rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            ❓ Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            📚 Дополнительные ресурсы
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Рекомендуемые материалы
              </h3>
              <ul className="space-y-2 text-purple-100">
                <li>• First Conditional</li>
                <li>• Second Conditional</li>
                <li>• Third Conditional</li>
                <li>• Mixed Conditionals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Следующие шаги</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Практика с упражнениями</li>
                <li>• Чтение примеров в контексте</li>
                <li>• Составление собственных предложений</li>
                <li>• Изучение других типов условных предложений</li>
              </ul>
            </div>
          </div>
        </section>

        <Zero_Conditional_Practice />
      </div>
    </div>
  );
}
