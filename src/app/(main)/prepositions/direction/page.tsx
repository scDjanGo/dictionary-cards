import Prepositions_Of_Direction_Interactive from "@/pages-components/prepositions/direction/Prepositions_Of_Direction_Interactive";

const prepositionsData = [
  {
    preposition: "to",
    meaning: "к, в (направление движения к месту)",
    usage: "Движение по направлению к чему-либо, конечная точка",
    examples: [
      "Go to school",
      "Walk to the park",
      "Travel to London",
      "Come to me",
    ],
    questions: [
      "Are you going to the store?",
      "Did you talk to the teacher?",
      "Will you come to the party?",
    ],
    negatives: [
      "Don't go to that place.",
      "I didn't speak to him.",
      "They won't travel to Spain.",
    ],
  },
  {
    preposition: "from",
    meaning: "из, от, с (начальная точка)",
    usage: "Начальная точка движения или происхождения",
    examples: [
      "Come from home",
      "A letter from John",
      "Fly from Paris",
      "Different from others",
    ],
    questions: [
      "Where are you from?",
      "Is this gift from Mary?",
      "Did you hear from them?",
    ],
    negatives: [
      "I'm not from this city.",
      "This isn't from me.",
      "We didn't receive anything from them.",
    ],
  },
  {
    preposition: "into",
    meaning: "в (внутрь, движение внутрь)",
    usage: "Движение внутрь помещения или пространства",
    examples: [
      "Walk into the room",
      "Jump into the water",
      "Put into the box",
      "Turn into a hero",
    ],
    questions: [
      "Did you look into the matter?",
      "Will you go into the building?",
      "Can you put this into words?",
    ],
    negatives: [
      "Don't go into that room.",
      "I didn't dive into the pool.",
      "It won't turn into reality.",
    ],
  },
  {
    preposition: "out of",
    meaning: "из (наружу, движение изнутри)",
    usage: "Движение изнутри наружу, выход из пространства",
    examples: [
      "Get out of the car",
      "Take out of the bag",
      "Jump out of the window",
      "Run out of time",
    ],
    questions: [
      "Did you get out of bed?",
      "Are you out of ideas?",
      "Can you take it out of there?",
    ],
    negatives: [
      "Don't get out of the vehicle.",
      "We're not out of money.",
      "I didn't look out of the window.",
    ],
  },
  {
    preposition: "through",
    meaning: "через, сквозь (прохождение через)",
    usage: "Движение через пространство или объект насквозь",
    examples: [
      "Walk through the forest",
      "Drive through the tunnel",
      "Look through the window",
      "Go through difficulties",
    ],
    questions: [
      "Did you go through the park?",
      "Can you see through this?",
      "Are you through with work?",
    ],
    negatives: [
      "Don't walk through that area.",
      "I can't see through walls.",
      "We didn't go through the center.",
    ],
  },
  {
    preposition: "across",
    meaning: "через, на другой стороне",
    usage: "Движение через поверхность или на противоположную сторону",
    examples: [
      "Swim across the river",
      "Walk across the street",
      "Run across the field",
      "Spread across the country",
    ],
    questions: [
      "Did you walk across the bridge?",
      "Can you see across the lake?",
      "Is there a shop across the road?",
    ],
    negatives: [
      "Don't run across the road.",
      "I can't swim across this river.",
      "There's nothing across the street.",
    ],
  },
  {
    preposition: "over",
    meaning: "через, над (перемещение над)",
    usage: "Движение над чем-либо, переход через препятствие",
    examples: [
      "Jump over the fence",
      "Fly over the city",
      "Climb over the wall",
      "Think over the problem",
    ],
    questions: [
      "Can you jump over this?",
      "Did the plane fly over us?",
      "Have you thought over my proposal?",
    ],
    negatives: [
      "Don't climb over that wall.",
      "The bird didn't fly over the house.",
      "I haven't gotten over it yet.",
    ],
  },
  {
    preposition: "under",
    meaning: "под (движение под чем-либо)",
    usage: "Движение в положение ниже чего-либо",
    examples: [
      "Crawl under the table",
      "Swim under the water",
      "Go under the bridge",
      "Work under pressure",
    ],
    questions: [
      "Can you crawl under this?",
      "Did the boat go under the bridge?",
      "Do you work well under stress?",
    ],
    negatives: [
      "Don't go under there.",
      "The submarine didn't go under the ice.",
      "I don't work well under pressure.",
    ],
  },
];

const directionPairs = [
  {
    from: "from home",
    to: "to work",
    description: "Из дома на работу",
  },
  {
    from: "from London",
    to: "to Paris",
    description: "Из Лондона в Париж",
  },
  {
    from: "from the top",
    to: "to the bottom",
    description: "Сверху вниз",
  },
  {
    from: "from the beginning",
    to: "to the end",
    description: "От начала до конца",
  },
];

const commonExpressions = [
  { english: "go to school", russian: "ходить в школу" },
  { english: "come from work", russian: "возвращаться с работы" },
  { english: "turn into gold", russian: "превращаться в золото" },
  { english: "get out of bed", russian: "вставать с кровати" },
  { english: "look through window", russian: "смотреть в окно" },
  { english: "walk across street", russian: "переходить улицу" },
  { english: "jump over fence", russian: "перепрыгивать через забор" },
  { english: "crawl under table", russian: "проползать под столом" },
  { english: "run to store", russian: "бежать в магазин" },
  { english: "hear from friend", russian: "получать весточку от друга" },
  { english: "put into practice", russian: "применять на практике" },
  { english: "run out of time", russian: "не хватать времени" },
  { english: "go through trouble", russian: "проходить через трудности" },
  { english: "swim across river", russian: "переплывать реку" },
  { english: "think over decision", russian: "обдумывать решение" },
  { english: "work under pressure", russian: "работать под давлением" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg py-8">
      <div className=" mx-auto ">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions of Direction - Предлоги Направления
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите предлоги, которые показывают направление движения и
            перемещения в пространстве.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги направления?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги направления (Prepositions of Direction)</strong>{" "}
              - это слова, которые показывают направление движения или
              перемещения объектов в пространстве. Они отвечают на вопросы
              "Куда?" и "Откуда?".
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Эти предлоги помогают описать траекторию движения, начальную и
              конечную точки перемещения, а также способ преодоления
              пространства.
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги направления
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    направление
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

        {/* Direction Pairs */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Пары направлений: FROM → TO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {directionPairs.map((pair, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-red-500 font-bold">{pair.from}</span>
                  <span className="text-blueCl text-xl">→</span>
                  <span className="text-green-500 font-bold">{pair.to}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Фразовые глаголы с предлогами
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
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Ключевые различия
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                INTO vs IN
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>INTO</strong> - движение внутрь
                </li>
                <li>
                  <strong>IN</strong> - нахождение внутри
                </li>
                <li>
                  She walked <strong>into</strong> the room (вошла)
                </li>
                <li>
                  She is <strong>in</strong> the room (находится)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                THROUGH vs ACROSS
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>THROUGH</strong> - через объемное пространство
                </li>
                <li>
                  <strong>ACROSS</strong> - через плоскую поверхность
                </li>
                <li>
                  Walk <strong>through</strong> the forest (через лес)
                </li>
                <li>
                  Walk <strong>across</strong> the street (через улицу)
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Interactive Component */}
        <Prepositions_Of_Direction_Interactive />
      </div>
    </div>
  );
}
