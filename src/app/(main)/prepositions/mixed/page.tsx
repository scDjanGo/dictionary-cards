import Mixed_Prepositions_Interactive from "@/pages-components/prepositions/mixed/Mixed_Prepositions_Interactive";

const mixedCategories = [
  {
    category: "Место и Направление",
    prepositions: ["in", "on", "at", "to", "from", "into", "out of", "through"],
    examples: [
      "The book is in the bag. (место)",
      "She walked to the park. (направление)",
      "He jumped into the pool. (движение)",
      "We drove through the tunnel. (прохождение)",
    ],
    rules:
      "IN - внутри, ON - на поверхности, AT - точка, TO - направление к, FROM - откуда",
  },
  {
    category: "Время и Причина",
    prepositions: [
      "at",
      "on",
      "in",
      "for",
      "since",
      "because of",
      "due to",
      "during",
    ],
    examples: [
      "Meet me at 5 PM. (точное время)",
      "We'll see you on Monday. (день)",
      "I lived there for 2 years. (продолжительность)",
      "It was canceled because of rain. (причина)",
    ],
    rules:
      "AT - точное время, ON - дни, IN - периоды, FOR - продолжительность, SINCE - начало",
  },
  {
    category: "Средства и Исполнители",
    prepositions: ["by", "with", "through", "using"],
    examples: [
      "The letter was sent by mail. (способ)",
      "She wrote with a pen. (инструмент)",
      "I learned through experience. (посредник)",
      "He fixed it using tools. (использование)",
    ],
    rules: "BY - исполнитель/способ, WITH - инструмент, THROUGH - посредник",
  },
  {
    category: "Отношения и Связи",
    prepositions: ["of", "for", "about", "with", "to"],
    examples: [
      "The capital of France. (принадлежность)",
      "This gift is for you. (назначение)",
      "We talked about the weather. (тема)",
      "She is married to a doctor. (отношения)",
    ],
    rules:
      "OF - принадлежность, FOR - цель, ABOUT - тема, WITH - связь, TO - отношение",
  },
];

const contextExamples = [
  {
    context: "В офисе",
    contextTranslation: "At the office",
    sentences: [
      {
        english: "I work at a big company.",
        russian: "Я работаю в большой компании.",
      },
      {
        english: "My desk is in the corner.",
        russian: "Мой стол стоит в углу.",
      },
      {
        english: "The meeting starts on time.",
        russian: "Совещание начинается вовремя.",
      },
      {
        english: "I'll be there for an hour.",
        russian: "Я буду там в течение часа.",
      },
    ],
  },
  {
    context: "В путешествии",
    contextTranslation: "Traveling",
    sentences: [
      {
        english: "We arrived at the hotel.",
        russian: "Мы прибыли в отель.",
      },
      {
        english: "Our room is on the third floor.",
        russian: "Наш номер на третьем этаже.",
      },
      {
        english: "We'll stay here for a week.",
        russian: "Мы останемся здесь на неделю.",
      },
      {
        english: "We traveled by plane.",
        russian: "Мы путешествовали на самолёте.",
      },
    ],
  },
  {
    context: "В ресторане",
    contextTranslation: "At the restaurant",
    sentences: [
      {
        english: "We made a reservation for two.",
        russian: "Мы забронировали столик на двоих.",
      },
      {
        english: "Our table is by the window.",
        russian: "Наш столик у окна.",
      },
      {
        english: "I'll pay with my credit card.",
        russian: "Я заплачу своей кредитной картой.",
      },
      {
        english: "The food was cooked by a chef.",
        russian: "Еда была приготовлена шеф-поваром.",
      },
    ],
  },
  {
    context: "В университете",
    contextTranslation: "At the university",
    sentences: [
      {
        english: "Classes start in September.",
        russian: "Занятия начинаются в сентябре.",
      },
      {
        english: "The exam is on Friday.",
        russian: "Экзамен в пятницу.",
      },
      {
        english: "I study from 9 to 5.",
        russian: "Я учусь с 9 до 5.",
      },
      {
        english: "I'm good at mathematics.",
        russian: "Я хорошо разбираюсь в математике.",
      },
    ],
  },
];

const commonConfusions = [
  {
    prepositions: ["in", "on", "at"],
    usage: "время",
    examples: [
      "at 3 PM (точное время)",
      "on Monday (день)",
      "in summer (период)",
    ],
    tip: "Запомните: AT для часов, ON для дней, IN для месяцев/лет",
  },
  {
    prepositions: ["to", "for"],
    usage: "цель",
    examples: [
      "I went to the store. (место)",
      "This is for you. (получатель)",
      "She studies to become a doctor. (цель действия)",
    ],
    tip: "TO - направление движения, FOR - цель/причина",
  },
  {
    prepositions: ["by", "with"],
    usage: "инструменты",
    examples: [
      "The book was written by Tolstoy. (исполнитель)",
      "She wrote with a pen. (инструмент)",
      "We traveled by car. (способ)",
    ],
    tip: "BY - кто сделал, WITH - с помощью чего",
  },
  {
    prepositions: ["since", "for"],
    usage: "время",
    examples: [
      "I have lived here since 2020. (начало)",
      "I have lived here for 3 years. (продолжительность)",
      "We've been waiting since morning.",
    ],
    tip: "SINCE + точка времени, FOR + период времени",
  },
];

const prepositionFunctions = [
  {
    function: "Местоположение",
    prepositions: ["in", "on", "at", "under", "above", "between"],
    examples: "in the room, on the table, at home",
  },
  {
    function: "Направление",
    prepositions: ["to", "from", "into", "out of", "through"],
    examples: "go to school, come from work, walk through the park",
  },
  {
    function: "Время",
    prepositions: ["at", "on", "in", "for", "since", "during"],
    examples: "at 5 PM, on Monday, in summer, for hours",
  },
  {
    function: "Причина",
    prepositions: ["because of", "due to", "thanks to", "on account of"],
    examples: "because of rain, due to circumstances, thanks to help",
  },
  {
    function: "Средства",
    prepositions: ["by", "with", "using", "through"],
    examples: "by car, with a knife, through hard work",
  },
  {
    function: "Отношения",
    prepositions: ["of", "for", "about", "with"],
    examples: "friend of mine, gift for you, story about life",
  },
];

const advancedUsage = [
  {
    topic: "Предлоги с разными значениями",
    examples: [
      {
        preposition: "over",
        meanings: [
          "above (над): The plane flew over the city.",
          "more than (более): It costs over $100.",
          "finished (закончено): The class is over.",
        ],
      },
      {
        preposition: "by",
        meanings: [
          "near (рядом): Sit by the window.",
          "before (до): Finish by Friday.",
          "method (способ): Send by email.",
        ],
      },
    ],
  },
  {
    topic: "Фразовые предлоги",
    examples: [
      "in front of (перед)",
      "next to (рядом с)",
      "because of (из-за)",
      "due to (вследствие)",
      "on behalf of (от имени)",
      "in spite of (несмотря на)",
    ],
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[6px_0_12px]">
      <div className="mx-auto ">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Mixed Prepositions - Смешанные Предлоги
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Комплексное изучение всех типов предлогов в различных контекстах и
            ситуациях.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое смешанные предлоги?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Смешанные предлоги</strong> - это практика использования
              разных типов предлогов в различных контекстах. Этот раздел поможет
              вам научиться правильно выбирать предлоги в реальных ситуациях
              общения.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Здесь мы объединяем знания о предлогах места, времени,
              направления, причины и других категорий для комплексного понимания
              их использования.
            </p>
          </div>
        </section>

        {/* Mixed Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Категории предлогов в контексте
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mixedCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-4">
                  {category.category}
                </h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                    Предлоги:
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.prepositions.map((prep, i) => (
                      <span
                        key={i}
                        className="bg-blueCl text-white px-3 py-1 rounded-full text-sm"
                      >
                        {prep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                    Примеры:
                  </h4>
                  <div className="space-y-2">
                    {category.examples.map((example, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        • {example}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                    Правила:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.rules}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Context Examples */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Предлоги в реальных ситуациях
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contextExamples.map((context, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <h3 className="font-bold text-lg text-center text-blueCl dark:text-blue-300 mb-3">
                  {context.context}
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
                    {context.contextTranslation}
                  </div>
                </h3>
                <div className="space-y-2">
                  {context.sentences.map((sentence, i) => (
                    <div
                      key={i}
                      className="text-center p-2 bg-white dark:bg-gray-700 rounded"
                    >
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
                        {sentence.english}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {sentence.russian}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Confusions */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Частые затруднения
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {commonConfusions.map((confusion, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  {confusion.prepositions.map((prep, i) => (
                    <span
                      key={i}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                    >
                      {prep}
                    </span>
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({confusion.usage})
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  {confusion.examples.map((example, i) => (
                    <p
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      • {example}
                    </p>
                  ))}
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    💡 {confusion.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preposition Functions */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Функции предлогов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepositionFunctions.map((func, index) => (
              <div
                key={index}
                className="text-center p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg"
              >
                <h3 className="text-lg font-bold text-blueCl dark:text-blue-300 mb-2">
                  {func.function}
                </h3>
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {func.prepositions.map((prep, i) => (
                    <span
                      key={i}
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                    >
                      {prep}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {func.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Component */}
        <Mixed_Prepositions_Interactive />
      </div>
    </div>
  );
}
