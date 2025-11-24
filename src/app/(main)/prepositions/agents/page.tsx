import Prepositions_For_Agents_Interactive from "@/pages-components/prepositions/agents/Prepositions_For_Agents_Interactive";

const prepositionsData = [
  {
    preposition: "by",
    meaning: "кем-то/чем-то (исполнитель действия)",
    usage:
      "Указывает на лицо или силу, которое выполняет действие, особенно в пассивном залоге",
    examples: [
      "The book was written by Tolstoy.",
      "The song was performed by a famous singer.",
      "The building was designed by a famous architect.",
      "The decision was made by the committee.",
    ],
    questions: [
      "Was this painting created by Picasso?",
      "Is this song sung by your favorite artist?",
      "Will the project be completed by your team?",
    ],
    negatives: [
      "This wasn't done by me.",
      "The letter wasn't sent by John.",
      "The work won't be finished by them.",
    ],
  },
  {
    preposition: "with",
    meaning: "с помощью (инструмент, средство)",
    usage:
      "Указывает на инструмент, орудие или средство, с помощью которого выполняется действие",
    examples: [
      "He cut the paper with scissors.",
      "She wrote the letter with a pen.",
      "They built the house with modern tools.",
      "I opened the door with this key.",
    ],
    questions: [
      "Did you write this with a pencil?",
      "Can you cut it with a knife?",
      "Will you fix it with these tools?",
    ],
    negatives: [
      "Don't cut it with that knife.",
      "I didn't write it with a pen.",
      "It can't be opened with this key.",
    ],
  },
  {
    preposition: "through",
    meaning: "через (посредник, канал)",
    usage:
      "Указывает на посредника или канал, через который передается действие или информация",
    examples: [
      "I learned about it through a friend.",
      "The message was sent through email.",
      "We met through mutual acquaintances.",
      "The news spread through social media.",
    ],
    questions: [
      "Did you hear about it through the news?",
      "Was the information received through proper channels?",
      "Did you get the job through an agency?",
    ],
    negatives: [
      "I didn't find out through official sources.",
      "The message wasn't delivered through email.",
      "We didn't meet through work.",
    ],
  },
];

const passiveVoiceExamples = [
  {
    active: "Shakespeare wrote Hamlet.",
    passive: "Hamlet was written by Shakespeare.",
    explanation: "BY показывает исполнителя в пассивном залоге",
  },
  {
    active: "The chef cooked the meal.",
    passive: "The meal was cooked by the chef.",
    explanation: "Действие выполняется конкретным человеком",
  },
  {
    active: "The storm destroyed the house.",
    passive: "The house was destroyed by the storm.",
    explanation: "BY может указывать на природную силу",
  },
];

const toolVsAgent = [
  {
    sentence: "The letter was written BY John.",
    meaning: "Джон - исполнитель действия (агент)",
    type: "agent",
  },
  {
    sentence: "The letter was written WITH a pen.",
    meaning: "Ручка - инструмент выполнения действия",
    type: "tool",
  },
  {
    sentence: "The message was sent BY the secretary.",
    meaning: "Секретарь - отправитель сообщения",
    type: "agent",
  },
  {
    sentence: "The message was sent THROUGH email.",
    meaning: "Email - канал передачи",
    type: "channel",
  },
];

const usageContexts = [
  {
    context: "Пассивный залог",
    preposition: "by",
    example: "The novel was written by Dickens.",
    explanation: "Указывает исполнителя действия",
  },
  {
    context: "Инструменты",
    preposition: "with",
    example: "She painted with watercolors.",
    explanation: "Указывает орудие или средство",
  },
  {
    context: "Посредники",
    preposition: "through",
    example: "We met through friends.",
    explanation: "Указывает канал или посредника",
  },
];

const commonExpressions = [
  { english: "written by", russian: "написанный (кем-то)" },
  { english: "painted by", russian: "нарисованный (кем-то)" },
  { english: "designed by", russian: "спроектированный (кем-то)" },
  { english: "created by", russian: "созданный (кем-то)" },
  { english: "cut with", russian: "разрезанный (чем-то)" },
  { english: "written with", russian: "написанный (чем-то)" },
  { english: "built with", russian: "построенный (из чего-то)" },
  { english: "opened with", russian: "открытый (чем-то)" },
  { english: "learned through", russian: "узнанный через" },
  { english: "sent through", russian: "отправленный через" },
  { english: "met through", russian: "познакомились через" },
  { english: "spread through", russian: "распространенный через" },
  { english: "made by hand", russian: "сделанный вручную" },
  { english: "painted with oil", russian: "нарисованный маслом" },
  { english: "communicated through", russian: "общались через" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg py-8">
      <div className="mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions for Agents - Предлоги для Исполнителей
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите предлоги, которые указывают на исполнителей действий,
            инструменты и посредников в английском языке.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги для исполнителей?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>
                Предлоги для исполнителей (Prepositions for Agents)
              </strong>{" "}
              - это слова, которые показывают, кем или чем выполняется действие.
              Они отвечают на вопросы "Кем?", "Чем?", "С помощью чего?" и "Через
              кого?".
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Эти предлоги особенно важны в пассивном залоге, где акцент
              смещается с исполнителя действия на само действие и его объект.
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги для исполнителей
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
                    исполнитель
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
                    {prep.examples.slice(0, 3).map((example, i) => (
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

        {/* Passive Voice Examples */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Пассивный залог с предлогом BY
          </h2>
          <div className="space-y-4">
            {passiveVoiceExamples.map((example, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Активный залог
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {example.active}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Пассивный залог
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {example.passive}
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-blueCl dark:text-blue-300">
                  {example.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BY vs WITH vs THROUGH */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Сравнение BY, WITH и THROUGH
          </h2>
          <div className="space-y-4">
            {toolVsAgent.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  item.type === "agent"
                    ? "border-green-200 dark:border-green-800"
                    : item.type === "tool"
                    ? "border-blue-200 dark:border-blue-800"
                    : "border-purple-200 dark:border-purple-800"
                }`}
              >
                <p className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-white">
                  {item.sentence}
                </p>
                <p
                  className={`text-center text-sm ${
                    item.type === "agent"
                      ? "text-green-600 dark:text-green-400"
                      : item.type === "tool"
                      ? "text-blueCl dark:text-blue-300"
                      : "text-purple-600 dark:text-purple-400"
                  }`}
                >
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Contexts */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Контексты использования
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usageContexts.map((context, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="text-lg font-bold text-blueCl dark:text-blue-300 mb-2">
                  {context.context}
                </h3>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {context.preposition}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {context.example}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {context.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Устойчивые выражения с предлогами образа действия
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
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

        {/* Rules Section */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Правила использования
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                BY vs WITH
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>BY</strong> - кто выполняет действие
                </li>
                <li>
                  <strong>WITH</strong> - с помощью чего выполняется
                </li>
                <li>
                  The cake was made <strong>by</strong> my mother
                </li>
                <li>
                  The cake was cut <strong>with</strong> a knife
                </li>
                <li>
                  Paintings are created <strong>by</strong> artists
                </li>
                <li>
                  Paintings are created <strong>with</strong> brushes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Особые случаи
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>BY</strong> для природных явлений
                </li>
                <li>
                  The tree was struck <strong>by</strong> lightning
                </li>
                <li>
                  <strong>THROUGH</strong> для каналов связи
                </li>
                <li>
                  I found out <strong>through</strong> a newspaper
                </li>
                <li>
                  <strong>WITH</strong> для частей тела
                </li>
                <li>
                  She pointed <strong>with</strong> her finger
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Interactive Component */}
        <Prepositions_For_Agents_Interactive />
      </div>
    </div>
  );
}
