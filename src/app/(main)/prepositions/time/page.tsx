import Prepositions_Of_Time_Interactive from "@/pages-components/prepositions/time/Prepositions_Of_Time_Interactive";

const prepositionsData = [
  {
    preposition: "at",
    meaning: "в (точное время), в (праздники)",
    usage: "Точное время, короткие периоды, праздники",
    examples: ["at 3 PM", "at midnight", "at Christmas", "at the moment"],
    questions: [
      "Are you free at 5 o'clock?",
      "Do you eat at noon?",
      "Will you call at lunchtime?",
    ],
    negatives: [
      "The shop is not open at night.",
      "I don't work at weekends.",
      "We don't meet at that time.",
    ],
  },
  {
    preposition: "on",
    meaning: "в (дни недели), в (даты)",
    usage: "Конкретные дни и даты, особые дни",
    examples: [
      "on Monday",
      "on May 15th",
      "on Christmas Day",
      "on my birthday",
    ],
    questions: [
      "Is the meeting on Tuesday?",
      "Do you exercise on weekends?",
      "Are you busy on Friday?",
    ],
    negatives: [
      "The office is closed on Sundays.",
      "I don't work on holidays.",
      "We don't have class on that day.",
    ],
  },
  {
    preposition: "in",
    meaning: "в (месяцы, годы, века), через",
    usage: "Длительные периоды, месяцы, годы, века, времена года",
    examples: ["in 2024", "in summer", "in October", "in the 21st century"],
    questions: [
      "Do you travel in winter?",
      "Were you born in 1990?",
      "Will you finish in an hour?",
    ],
    negatives: [
      "I don't swim in winter.",
      "We didn't meet in January.",
      "It won't be ready in time.",
    ],
  },
  {
    preposition: "for",
    meaning: "в течение, для",
    usage: "Указывает продолжительность действия",
    examples: [
      "for three hours",
      "for a week",
      "for a long time",
      "for many years",
    ],
    questions: [
      "Will you stay for two days?",
      "Have you waited for long?",
      "Did you study for the exam?",
    ],
    negatives: [
      "I haven't seen him for ages.",
      "She won't be here for long.",
      "We didn't prepare for that.",
    ],
  },
  {
    preposition: "since",
    meaning: "с (какого-то времени)",
    usage: "Начало действия, которое продолжается",
    examples: [
      "since 2010",
      "since Monday",
      "since childhood",
      "since last year",
    ],
    questions: [
      "Have you lived here since 2020?",
      "Has it been raining since morning?",
      "Have you known him since school?",
    ],
    negatives: [
      "I haven't seen her since last week.",
      "He hasn't called since yesterday.",
      "We haven't met since then.",
    ],
  },
  {
    preposition: "during",
    meaning: "в течение, во время",
    usage: "Указывает на период, когда что-то происходит",
    examples: [
      "during the movie",
      "during summer",
      "during the meeting",
      "during the night",
    ],
    questions: [
      "Did you sleep during the flight?",
      "What happened during the storm?",
      "Were you here during the event?",
    ],
    negatives: [
      "I didn't talk during the lesson.",
      "Nothing happened during that time.",
      "We didn't meet during the holidays.",
    ],
  },
];

const commonExpressions = [
  { english: "at night", russian: "ночью" },
  { english: "at noon", russian: "в полдень" },
  { english: "at midnight", russian: "в полночь" },
  { english: "at sunrise", russian: "на рассвете" },
  { english: "on Monday", russian: "в понедельник" },
  { english: "on weekends", russian: "по выходным" },
  { english: "on holidays", russian: "в праздники" },
  { english: "on time", russian: "вовремя" },
  { english: "in the morning", russian: "утром" },
  { english: "in the afternoon", russian: "днём" },
  { english: "in the evening", russian: "вечером" },
  { english: "in summer", russian: "летом" },
  { english: "in winter", russian: "зимой" },
  { english: "in spring", russian: "весной" },
  { english: "in autumn", russian: "осенью" },
  { english: "for a while", russian: "ненадолго" },
  { english: "for now", russian: "пока что" },
  { english: "for ever", russian: "навсегда" },
  { english: "since then", russian: "с тех пор" },
  { english: "since when", russian: "с каких пор" },
  { english: "since last", russian: "с прошлого" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[6px_0_12px]">
      <div className=" mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions of Time - Предлоги Времени
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите правила использования предлогов времени в английском языке.
            Узнайте разницу между at, on, in и другими предлогами времени.
          </p>
        </header>

        {/* Interactive Component */}

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги времени?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги времени (Prepositions of Time)</strong> - это
              слова, которые указывают на время действия или события. Они
              отвечают на вопросы "Когда?" и "Как долго?".
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Правильное использование предлогов времени важно для точного
              выражения временных отношений в английском языке. Основное
              правило: <strong>at</strong> для точного времени,
              <strong> on</strong> для дней, <strong>in</strong> для длительных
              периодов.
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги времени
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepositionsData.map((prep, index) => (
              <div
                key={index}
                className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300">
                    {prep.preposition}
                  </h3>
                  <span className="text-sm bg-blueCl text-white px-2 py-1 rounded">
                    время
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Значение:</strong> {prep.meaning}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {prep.usage}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                      Примеры:
                    </h4>
                    {prep.examples.map((example, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                      >
                        • {example}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                      Вопросы:
                    </h4>
                    {prep.questions.slice(0, 2).map((question, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                      >
                        • {question}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                      Отрицания:
                    </h4>
                    {prep.negatives.slice(0, 2).map((negative, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                      >
                        • {negative}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Устойчивые выражения с предлогами времени
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {commonExpressions.map((expression, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <div className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">
                  {expression.english}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {expression.russian}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Сравнение AT, ON, IN
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border-2 border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
                AT
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Точное время, короткие периоды
              </p>
              <div className="space-y-1 text-left text-sm">
                <p className="text-gray-500 dark:text-bgLight/90">• at 3 PM (в 3 часа)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• at night (ночью)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• at Christmas (на Рождество)</p>
                <p className="text-gray-500 dark:text-bgLight/90">
                  • at the moment (в данный момент)
                </p>
              </div>
            </div>
            <div className="text-center p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-lg font-bold text-blueCl dark:text-blue-300 mb-3">
                ON
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Дни недели, даты, особые дни
              </p>
              <div className="space-y-1 text-left text-sm">
                <p className="text-gray-500 dark:text-bgLight/90">• on Monday (в понедельник)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• on May 15th (15 мая)</p>
                <p className="text-gray-500 dark:text-bgLight/90">
                  • on my birthday (в мой день рождения)
                </p>
                <p className="text-gray-500 dark:text-bgLight/90">• on time (вовремя)</p>
              </div>
            </div>
            <div className="text-center p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">
                IN
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Месяцы, годы, времена года, века
              </p>
              <div className="space-y-1 text-left text-sm">
                <p className="text-gray-500 dark:text-bgLight/90">• in summer (летом)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• in 2024 (в 2024 году)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• in the morning (утром)</p>
                <p className="text-gray-500 dark:text-bgLight/90">• in an hour (через час)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Основные правила использования
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                  FOR vs SINCE
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>FOR</strong> - продолжительность (for 2 hours)
                  </li>
                  <li>
                    <strong>SINCE</strong> - начало периода (since 2020)
                  </li>
                  <li>
                    I have lived here <strong>for</strong> 5 years
                  </li>
                  <li>
                    I have lived here <strong>since</strong> 2019
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                  DURING vs IN
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>DURING</strong> - во время события
                  </li>
                  <li>
                    <strong>IN</strong> - в течение периода
                  </li>
                  <li>
                    I fell asleep <strong>during</strong> the movie
                  </li>
                  <li>
                    I'll call you <strong>in</strong> an hour
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Prepositions_Of_Time_Interactive />
      </div>
    </div>
  );
}
