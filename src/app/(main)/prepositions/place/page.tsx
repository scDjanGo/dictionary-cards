import Prepositions_Of_Place_Interactive from "@/pages-components/prepositions/place/Preposition_Of_Place_Interactive";
const prepositionsData = [
  {
    preposition: "in",
    meaning: "в (внутри помещения, территории, города, страны)",
    usage: "Используется для ограниченных пространств, больших территорий",
    examples: [
      "The book is in the bag.",
      "She lives in London.",
      "We are in the room.",
      "There are many fish in the river.",
    ],
    questions: [
      "Is the money in the wallet?",
      "Are you still in the office?",
      "Do they live in this city?",
    ],
    negatives: [
      "The keys are not in the drawer.",
      "He is not in the building.",
      "We don't work in that department.",
    ],
  },
  {
    preposition: "on",
    meaning: "на (на поверхности), по (улице), в (транспорте)",
    usage:
      "Для поверхностей, общественного транспорта, дней, электронных устройств",
    examples: [
      "The phone is on the table.",
      "He lives on Main Street.",
      "We met on Monday.",
      "The picture is on the wall.",
    ],
    questions: [
      "Is your book on the shelf?",
      "Are you on the bus now?",
      "Is the meeting on Tuesday?",
    ],
    negatives: [
      "The cup is not on the desk.",
      "She is not on the train.",
      "The store is not on this street.",
    ],
  },
  {
    preposition: "at",
    meaning: "у, при, в (конкретное место или время)",
    usage: "Для конкретных точек, событий, точного времени, рабочих мест",
    examples: [
      "Meet me at the station.",
      "She is at school.",
      "We'll meet at 5 PM.",
      "He works at the hospital.",
    ],
    questions: [
      "Are you at home?",
      "Is the concert at the park?",
      "Will she be at the party?",
    ],
    negatives: [
      "I'm not at the office.",
      "They aren't at the cinema.",
      "The event is not at the museum.",
    ],
  },
  {
    preposition: "under",
    meaning: "под (ниже чего-либо, часто с касанием)",
    usage: "Указывает на положение ниже чего-либо, часто скрытое",
    examples: [
      "The cat is under the table.",
      "The keys are under the book.",
      "The submarine is under the water.",
    ],
    questions: [
      "Is the dog under the bed?",
      "Are my shoes under the chair?",
      "Is there anything under the carpet?",
    ],
    negatives: [
      "The pen is not under the notebook.",
      "The children are not under the tree.",
      "The treasure is not under this stone.",
    ],
  },
  {
    preposition: "above",
    meaning: "над (без касания, выше уровня)",
    usage: "Выше чего-либо, но не касаясь, часто для измерений и уровней",
    examples: [
      "The picture hangs above the sofa.",
      "The temperature is above zero.",
      "The plane flew above the clouds.",
    ],
    questions: [
      "Is the shelf above the desk?",
      "Are we flying above the mountains?",
      "Is the price above your budget?",
    ],
    negatives: [
      "The lamp is not above the table.",
      "The bird is not above the tree.",
      "The score is not above average.",
    ],
  },
  {
    preposition: "below",
    meaning: "под, ниже (часто для уровней и измерений)",
    usage: "Ниже чего-либо, часто для температур, цен, уровней",
    examples: [
      "The valley is below the mountain.",
      "The price is below average.",
      "Her grades are below standard.",
    ],
    questions: [
      "Is the temperature below freezing?",
      "Are we below sea level?",
      "Is your salary below minimum wage?",
    ],
    negatives: [
      "The results are not below expectations.",
      "The house is not below the hill.",
      "The quality is not below standard.",
    ],
  },
  {
    preposition: "between",
    meaning: "между (двумя объектами)",
    usage:
      "Только для двух объектов или людей, указывает на промежуточное положение",
    examples: [
      "The bank is between the hotel and the post office.",
      "I'm sitting between John and Mary.",
      "There is a river between the two cities.",
    ],
    questions: [
      "Is the park between the school and the library?",
      "Are you sitting between your friends?",
      "Is there a connection between these events?",
    ],
    negatives: [
      "The store is not between the bank and the cafe.",
      "I'm not standing between them.",
      "There is no relationship between these facts.",
    ],
  },
  {
    preposition: "among",
    meaning: "среди (трех и более объектов)",
    usage:
      "Для группы из трех и более объектов, указывает на включение в группу",
    examples: [
      "She was among friends.",
      "There is a traitor among us.",
      "The house is among the trees.",
    ],
    questions: [
      "Are you comfortable among strangers?",
      "Is your work among the best?",
      "Is there a doctor among the passengers?",
    ],
    negatives: [
      "He doesn't feel at home among these people.",
      "Your name is not among the winners.",
      "There is no agreement among the members.",
    ],
  },
  {
    preposition: "next to",
    meaning: "рядом с, около",
    usage: "Указывает на близкое расположение, соседство",
    examples: [
      "The supermarket is next to the bank.",
      "She sat next to me.",
      "Park your car next to mine.",
    ],
    questions: [
      "Is your house next to the school?",
      "Can I sit next to you?",
      "Is the pharmacy next to the hospital?",
    ],
    negatives: [
      "The restaurant is not next to the hotel.",
      "Don't sit next to that person.",
      "My office is not next to the elevator.",
    ],
  },
  {
    preposition: "in front of",
    meaning: "перед (с внешней стороны)",
    usage: "Перед чем-либо, но снаружи (не внутри)",
    examples: [
      "The car is in front of the house.",
      "She stood in front of the mirror.",
      "There's a garden in front of the building.",
    ],
    questions: [
      "Is there a parking lot in front of the mall?",
      "Are you standing in front of the camera?",
      "Is the statue in front of the museum?",
    ],
    negatives: [
      "There is no one in front of the door.",
      "The tree is not in front of my window.",
      "Don't park in front of the gate.",
    ],
  },
  {
    preposition: "behind",
    meaning: "за, позади",
    usage: "Сзади чего-либо, указывает на расположение с обратной стороны",
    examples: [
      "The garden is behind the house.",
      "She hid behind the tree.",
      "The answers are behind the page.",
    ],
    questions: [
      "Is the garage behind the building?",
      "Are you sitting behind me?",
      "Is there a secret behind this door?",
    ],
    negatives: [
      "The car is not behind the building.",
      "I'm not standing behind you.",
      "There is nothing behind this wall.",
    ],
  },
  {
    preposition: "near",
    meaning: "близко, недалеко от",
    usage: "Указывает на близкое расстояние, но не непосредственное соседство",
    examples: [
      "The hotel is near the airport.",
      "We live near the city center.",
      "There's a cafe near here.",
    ],
    questions: [
      "Is there a bank near the hotel?",
      "Do you live near the university?",
      "Is the station near your office?",
    ],
    negatives: [
      "There are no restaurants near the museum.",
      "We don't live near the beach.",
      "The school is not near our house.",
    ],
  },
];

const commonExpressions = [
  { english: "in bed", russian: "в кровати" },
  { english: "in hospital", russian: "в больнице" },
  { english: "in prison", russian: "в тюрьме" },
  { english: "in the sky", russian: "в небе" },
  { english: "in the world", russian: "в мире" },
  { english: "on the floor", russian: "на полу" },
  { english: "on the page", russian: "на странице" },
  { english: "on the screen", russian: "на экране" },
  { english: "on the island", russian: "на острове" },
  { english: "at the top", russian: "наверху" },
  { english: "at the bottom", russian: "внизу" },
  { english: "at the end", russian: "в конце" },
  { english: "at the corner", russian: "на углу" },
  { english: "under pressure", russian: "под давлением" },
  { english: "under control", russian: "под контролем" },
  { english: "under construction", russian: "на стадии строительства" },
  { english: "above suspicion", russian: "выше подозрений" },
  { english: "above average", russian: "выше среднего" },
  { english: "above sea level", russian: "выше уровня моря" },
  { english: "below the surface", russian: "под поверхностью" },
  { english: "below zero", russian: "ниже нуля" },
  { english: "below standard", russian: "ниже стандарта" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg py-8">
      <div className=" mx-auto ">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions of Place - Предлоги Места в Английском Языке
          </h1>
          <p className="text-lg text-gray-600 dark:text-bgLight max-w-2xl mx-auto">
            Полное руководство по предлогам места в английском языке. Изучите
            правила использования предлогов in, on, at, under, above, between,
            among и других с подробными примерами и объяснениями.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги места?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги места (Prepositions of Place)</strong> - это
              слова, которые показывают расположение объектов, людей или
              предметов в пространстве относительно друг друга. Они отвечают на
              вопросы "Где?" и "Куда?".
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Правильное использование предлогов места очень важно для точного
              описания расположения объектов в английском языке. Каждый предлог
              имеет свои особенности употребления, которые необходимо запомнить.
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги места с примерами
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
                    место
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Значение:</strong> {prep.meaning}
                </p>

                <p className="text-sm text-gray-600 dark:text-bgLight mb-4">
                  {prep.usage}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                      Утверждения:
                    </h4>
                    {prep.examples.map((example, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-bgLight mb-1"
                      >
                        • {example}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                      Вопросы:
                    </h4>
                    {prep.questions.map((question, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-bgLight mb-1"
                      >
                        • {question}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                      Отрицания:
                    </h4>
                    {prep.negatives.map((negative, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-bgLight mb-1"
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

        {/* Common Expressions */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Устойчивые выражения с предлогами места
          </h2>
          <p className="text-gray-600 dark:text-bgLight text-center mb-6">
            Эти выражения часто используются в английском языке и требуют
            запоминания
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
                <div className="text-xs text-gray-600 dark:text-bgLight">
                  {expression.russian}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Сравнение основных предлогов места IN, ON, AT
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border-2 border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
                IN
              </h3>
              <p className="text-sm text-gray-600 dark:text-bgLight mb-3">
                Закрытые пространства, большие территории, города и страны
              </p>
              <div className="space-y-1 text-left">
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • in the room (в комнате)
                </p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• in London (в Лондоне)</p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• in the car (в машине)</p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• in the bag (в сумке)</p>
              </div>
            </div>
            <div className="text-center p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-lg font-bold text-blueCl dark:text-blue-300 mb-3">
                ON
              </h3>
              <p className="text-sm text-gray-600 dark:text-bgLight mb-3">
                Поверхности, общественный транспорт, улицы, дни
              </p>
              <div className="space-y-1 text-left">
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • on the table (на столе)
                </p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • on the bus (в автобусе)
                </p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • on Main Street (на Мэйн Стрит)
                </p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • on the wall (на стене)
                </p>
              </div>
            </div>
            <div className="text-center p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">
                AT
              </h3>
              <p className="text-sm text-gray-600 dark:text-bgLight mb-3">
                Конкретные точки, события, адреса, рабочие места
              </p>
              <div className="space-y-1 text-left">
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• at home (дома)</p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">
                  • at the party (на вечеринке)
                </p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• at work (на работе)</p>
                <p className="text-xs text-gray-500 dark:text-bgLight/90">• at school (в школе)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Optimized Content */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Правила использования предлогов места в английском языке
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Изучение предлогов места - одна из важнейших тем в английской
              грамматике. Эти предлоги помогают точно описать расположение
              объектов и являются неотъемлемой частью повседневного общения.
            </p>

            <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
              Ключевые аспекты изучения предлогов места:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                Предлоги места всегда стоят перед существительными или
                местоимениями
              </li>
              <li>Не изменяются по числам и падежам</li>
              <li>Требуют запоминания устойчивых сочетаний</li>
              <li>Имеют конкретные правила употребления для разных ситуаций</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300">
              Для эффективного изучения предлогов места рекомендуется
              практиковаться с реальными примерами, обращать внимание на
              контекст и регулярно повторять изученный материал. Понимание
              разницы между основными предлогами in, on, at является
              фундаментальным для правильного использования английского языка.
            </p>
          </div>
        </section>
        {/* Interactive Component */}
        <Prepositions_Of_Place_Interactive />
      </div>
    </div>
  );
}
