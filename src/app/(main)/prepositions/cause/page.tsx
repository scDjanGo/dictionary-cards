import Prepositions_Of_Cause_Interactive from "@/pages-components/prepositions/cause/Prepositions_Of_Cause_Interactive";
const prepositionsData = [
  {
    preposition: "because of",
    meaning: "из-за, по причине",
    usage: "Указывает на прямую причину или причинно-следственную связь",
    examples: [
      "The game was canceled because of rain.",
      "He succeeded because of hard work.",
      "We were late because of traffic.",
      "She cried because of the sad movie.",
    ],
    questions: [
      "Was the flight delayed because of weather?",
      "Did you choose this because of me?",
      "Are you happy because of the news?",
    ],
    negatives: [
      "It didn't happen because of you.",
      "We're not here because of the money.",
      "The problem isn't because of technology.",
    ],
  },
  {
    preposition: "due to",
    meaning: "вследствие, из-за, благодаря",
    usage: "Более формальный вариант, часто используется в письменной речи",
    examples: [
      "The delay was due to technical problems.",
      "His success is due to perseverance.",
      "The accident was due to careless driving.",
      "The cancellation is due to bad weather.",
    ],
    questions: [
      "Is the failure due to lack of preparation?",
      "Was the success due to teamwork?",
      "Is this situation due to misunderstanding?",
    ],
    negatives: [
      "The mistake wasn't due to inexperience.",
      "The loss wasn't due to poor performance.",
      "It's not due to financial problems.",
    ],
  },
  {
    preposition: "thanks to",
    meaning: "благодаря (положительная причина)",
    usage: "Указывает на положительную причину или благодарность",
    examples: [
      "We won thanks to your help.",
      "Thanks to technology, we can work remotely.",
      "She recovered quickly thanks to good doctors.",
      "Thanks to your advice, I avoided trouble.",
    ],
    questions: [
      "Did you succeed thanks to their support?",
      "Is this possible thanks to new methods?",
      "Are we safe thanks to security measures?",
    ],
    negatives: [
      "We didn't succeed thanks to luck.",
      "It wasn't solved thanks to him.",
      "The improvement isn't thanks to this method.",
    ],
  },
  {
    preposition: "on account of",
    meaning: "из-за, по причине",
    usage: "Формальный вариант, похож на 'because of'",
    examples: [
      "The event was postponed on account of rain.",
      "On account of his age, he couldn't participate.",
      "We left early on account of the storm.",
      "On account of illness, she couldn't come.",
    ],
    questions: [
      "Was the change made on account of complaints?",
      "Did they cancel on account of safety concerns?",
      "Is this necessary on account of regulations?",
    ],
    negatives: [
      "It wasn't changed on account of price.",
      "We didn't refuse on account of difficulty.",
      "The decision wasn't on account of personal reasons.",
    ],
  },
  {
    preposition: "owing to",
    meaning: "ввиду, вследствие",
    usage: "Очень формальный, используется в официальных документах",
    examples: [
      "Owing to circumstances beyond our control...",
      "The meeting was canceled owing to bad weather.",
      "Owing to high demand, tickets sold out quickly.",
      "Owing to technical issues, the service is down.",
    ],
    questions: [
      "Was the project delayed owing to funding?",
      "Is this happening owing to market conditions?",
      "Are prices high owing to inflation?",
    ],
    negatives: [
      "It wasn't postponed owing to lack of interest.",
      "The problem isn't owing to equipment failure.",
      "We're not struggling owing to competition.",
    ],
  },
  {
    preposition: "as a result of",
    meaning: "в результате",
    usage: "Подчеркивает последствие или результат причины",
    examples: [
      "As a result of the storm, many trees fell.",
      "He improved as a result of practice.",
      "As a result of your help, we finished early.",
      "Prices rose as a result of increased demand.",
    ],
    questions: [
      "Did things change as a result of the meeting?",
      "Was progress made as a result of cooperation?",
      "Are there benefits as a result of this policy?",
    ],
    negatives: [
      "No improvements came as a result of the changes.",
      "It didn't happen as a result of our actions.",
      "We didn't benefit as a result of the deal.",
    ],
  },
];

const commonExpressions = [
  { english: "because of", russian: "из-за, по причине" },
  { english: "due to", russian: "вследствие, благодаря" },
  { english: "owing to", russian: "из-за, по причине" },
  { english: "on account of", russian: "из-за, по причине" },
  { english: "thanks to", russian: "благодаря" },
  { english: "as a result of", russian: "в результате" },
  { english: "by virtue of", russian: "в силу, на основании" },
  { english: "in view of", russian: "ввиду, учитывая" },
  { english: "for fear of", russian: "из страха перед" },
  { english: "for lack of", russian: "из-за отсутствия" },
  { english: "out of", russian: "из, по причине" },
  { english: "from", russian: "от, из-за" },
  { english: "through", russian: "из-за, по причине" },
  { english: "over", russian: "из-за, по поводу" },
  { english: "at", russian: "при, от (выражает реакцию)" },
  { english: "with", russian: "от, из-за (с чувствами)" },
];

const causeEffectPairs = [
  {
    cause: "Heavy rain",
    causeTranslation: "Сильный дождь",
    effect: "Flooding",
    effectTranslation: "Наводнение",
    preposition: "because of",
    prepositionTranslation: "из-за",
    example: "Flooding occurred because of heavy rain.",
    exampleTranslation: "Наводнение произошло из-за сильного дождя.",
  },
  {
    cause: "Hard work",
    causeTranslation: "Упорный труд",
    effect: "Success",
    effectTranslation: "Успех",
    preposition: "thanks to",
    prepositionTranslation: "благодаря",
    example: "Success came thanks to hard work.",
    exampleTranslation: "Успех пришел благодаря упорному труду.",
  },
  {
    cause: "Technical issues",
    causeTranslation: "Технические проблемы",
    effect: "Delay",
    effectTranslation: "Задержка",
    preposition: "due to",
    prepositionTranslation: "из-за, вследствие",
    example: "The delay was due to technical issues.",
    exampleTranslation: "Задержка произошла из-за технических проблем.",
  },
  {
    cause: "New technology",
    causeTranslation: "Новые технологии",
    effect: "Progress",
    effectTranslation: "Прогресс",
    preposition: "as a result of",
    prepositionTranslation: "в результате",
    example: "Progress was made as a result of new technology.",
    exampleTranslation: "Прогресс был достигнут в результате новых технологий.",
  },
];

const formalityLevels = [
  {
    level: "Неформальный",
    prepositions: ["because of"],
    context: "Разговорная речь, повседневное общение",
  },
  {
    level: "Нейтральный",
    prepositions: ["thanks to", "as a result of"],
    context: "Деловая переписка, формальное общение",
  },
  {
    level: "Формальный",
    prepositions: ["due to", "on account of", "owing to"],
    context: "Официальные документы, академические тексты",
  },
];

export default function PrepositionsOfCausePage() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[6px_0_12px]">
      <div className=" mx-auto ">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions of Cause - Предлоги Причины
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите предлоги, которые выражают причину, основание и
            причинно-следственные связи в английском языке.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги причины?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги причины (Prepositions of Cause)</strong> - это
              слова, которые показывают причину, основание или мотив действия.
              Они отвечают на вопросы "Почему?", "Из-за чего?" и "По какой
              причине?".
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Эти предлоги помогают установить причинно-следственные связи и
              объяснить, почему произошло то или иное событие. Разные предлоги
              используются в зависимости от контекста и уровня формальности.
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги причины
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
                    причина
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  <strong>Значение:</strong> {prep.meaning}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  {prep.usage}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 text-sm">
                      Примеры:
                    </h4>
                    {prep.examples.slice(0, 2).map((example, i) => (
                      <p
                        key={i}
                        className="text-xs text-gray-600 dark:text-gray-400 mb-1"
                      >
                        • {example}
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
            Причинно-следственные связи
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {causeEffectPairs.map((pair, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-red-500 font-bold text-sm">
                    {pair.cause}
                    <div className="text-xs font-normal text-gray-600 dark:text-gray-400 mt-1">
                      {pair.causeTranslation}
                    </div>
                  </div>
                  <div className="text-blueCl text-lg">→</div>
                  <div className="text-green-500 font-bold text-sm">
                    {pair.effect}
                    <div className="text-xs font-normal text-gray-600 dark:text-gray-400 mt-1">
                      {pair.effectTranslation}
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                  <strong>{pair.preposition}</strong>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    {pair.prepositionTranslation}
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
                  {pair.example}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center italic">
                  {pair.exampleTranslation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Formality Levels */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Уровни формальности
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formalityLevels.map((level, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg border-2 ${
                  index === 0
                    ? "border-green-200 dark:border-green-800"
                    : index === 1
                    ? "border-blue-200 dark:border-blue-800"
                    : "border-purple-200 dark:border-purple-800"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-3 ${
                    index === 0
                      ? "text-green-600 dark:text-green-400"
                      : index === 1
                      ? "text-blueCl dark:text-blue-300"
                      : "text-purple-600 dark:text-purple-400"
                  }`}
                >
                  {level.level}
                </h3>
                <div className="space-y-2 mb-3">
                  {level.prepositions.map((prep, i) => (
                    <div
                      key={i}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {prep}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {level.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Предлоги причины
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Выражают причину или основание действия
          </p>
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

        {/* Usage Rules */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Правила использования
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                BECAUSE OF vs DUE TO
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>BECAUSE OF</strong> - более разговорный вариант
                </li>
                <li>
                  <strong>DUE TO</strong> - более формальный вариант
                </li>
                <li>
                  We were late <strong>because of</strong> traffic
                </li>
                <li>
                  The delay was <strong>due to</strong> technical issues
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                THANKS TO vs BECAUSE OF
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>THANKS TO</strong> - для положительных причин
                </li>
                <li>
                  <strong>BECAUSE OF</strong> - для любых причин
                </li>
                <li>
                  We won <strong>thanks to</strong> your help
                </li>
                <li>
                  We lost <strong>because of</strong> mistakes
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Interactive Component */}
        <Prepositions_Of_Cause_Interactive />
      </div>
    </div>
  );
}
