import Prepositions_With_Adjectives_Interactive from "@/pages-components/prepositions/adjectives/Prepositions_With_Adjectives_Interactive";

const prepositionsData = [
  {
    preposition: "of",
    adjectives: [
      {
        adjective: "afraid",
        example: "afraid of spiders",
        translation: "бояться пауков",
      },
      {
        adjective: "proud",
        example: "proud of achievements",
        translation: "гордиться достижениями",
      },
      {
        adjective: "tired",
        example: "tired of work",
        translation: "устать от работы",
      },
      {
        adjective: "aware",
        example: "aware of danger",
        translation: "осознавать опасность",
      },
    ],
    usage: "Выражает чувства, осознание, характеристики",
  },
  {
    preposition: "to",
    adjectives: [
      {
        adjective: "married",
        example: "married to someone",
        translation: "женат/замужем на ком-то",
      },
      {
        adjective: "similar",
        example: "similar to something",
        translation: "похожий на что-то",
      },
      {
        adjective: "polite",
        example: "polite to people",
        translation: "вежливый с людьми",
      },
      {
        adjective: "grateful",
        example: "grateful to someone",
        translation: "благодарный кому-то",
      },
    ],
    usage: "Выражает отношения, сравнения, направленность",
  },
  {
    preposition: "for",
    adjectives: [
      {
        adjective: "famous",
        example: "famous for something",
        translation: "известный чем-то",
      },
      {
        adjective: "responsible",
        example: "responsible for something",
        translation: "ответственный за что-то",
      },
      {
        adjective: "ready",
        example: "ready for action",
        translation: "готовый к действию",
      },
      {
        adjective: "sorry",
        example: "sorry for mistakes",
        translation: "сожалеющий о ошибках",
      },
    ],
    usage: "Выражает причину, цель, ответственность",
  },
  {
    preposition: "with",
    adjectives: [
      {
        adjective: "angry",
        example: "angry with someone",
        translation: "сердитый на кого-то",
      },
      {
        adjective: "pleased",
        example: "pleased with results",
        translation: "довольный результатами",
      },
      {
        adjective: "familiar",
        example: "familiar with something",
        translation: "знакомый с чем-то",
      },
      {
        adjective: "busy",
        example: "busy with work",
        translation: "занятый работой",
      },
    ],
    usage: "Выражает эмоциональное состояние, знакомство, занятость",
  },
  {
    preposition: "about",
    adjectives: [
      {
        adjective: "excited",
        example: "excited about news",
        translation: "взволнованный новостями",
      },
      {
        adjective: "worried",
        example: "worried about future",
        translation: "обеспокоенный будущим",
      },
      {
        adjective: "happy",
        example: "happy about success",
        translation: "счастливый успехом",
      },
      {
        adjective: "nervous",
        example: "nervous about exam",
        translation: "нервничающий из-за экзамена",
      },
    ],
    usage: "Выражает эмоции по поводу чего-либо",
  },
  {
    preposition: "at",
    adjectives: [
      {
        adjective: "good",
        example: "good at languages",
        translation: "хороший в языках",
      },
      {
        adjective: "bad",
        example: "bad at sports",
        translation: "плохой в спорте",
      },
      {
        adjective: "surprised",
        example: "surprised at news",
        translation: "удивленный новостями",
      },
      {
        adjective: "amazed",
        example: "amazed at beauty",
        translation: "пораженный красотой",
      },
    ],
    usage: "Выражает умения, навыки, реакции",
  },
  {
    preposition: "in",
    adjectives: [
      {
        adjective: "interested",
        example: "interested in art",
        translation: "интересующийся искусством",
      },
      {
        adjective: "successful",
        example: "successful in business",
        translation: "успешный в бизнесе",
      },
      {
        adjective: "experienced",
        example: "experienced in teaching",
        translation: "опытный в преподавании",
      },
      {
        adjective: "rich",
        example: "rich in resources",
        translation: "богатый ресурсами",
      },
    ],
    usage: "Выражает интересы, успехи, характеристики",
  },
  {
    preposition: "from",
    adjectives: [
      {
        adjective: "different",
        example: "different from others",
        translation: "отличающийся от других",
      },
      {
        adjective: "safe",
        example: "safe from danger",
        translation: "в безопасности от опасности",
      },
      {
        adjective: "free",
        example: "free from worries",
        translation: "свободный от забот",
      },
      {
        adjective: "absent",
        example: "absent from work",
        translation: "отсутствующий на работе",
      },
    ],
    usage: "Выражает отличие, защиту, отсутствие",
  },
];

const commonPatterns = [
  {
    pattern: "Adjective + OF",
    patternTranslation: "Прилагательное + OF",
    examples: [
      { english: "capable of", russian: "способный на" },
      { english: "conscious of", russian: "сознающий" },
      { english: "envious of", russian: "завидующий" },
      { english: "fond of", russian: "любящий" },
      { english: "full of", russian: "полный" },
      { english: "guilty of", russian: "виновный в" },
      { english: "innocent of", russian: "невиновный в" },
      { english: "jealous of", russian: "ревнующий" },
      { english: "short of", russian: "испытывающий недостаток" },
      { english: "sick of", russian: "уставший от" },
      { english: "suspicious of", russian: "подозрительный к" },
      { english: "terrified of", russian: "в ужасе от" },
    ],
  },
  {
    pattern: "Adjective + TO",
    patternTranslation: "Прилагательное + TO",
    examples: [
      { english: "addicted to", russian: "зависимый от" },
      { english: "allergic to", russian: "аллергичный к" },
      { english: "close to", russian: "близкий к" },
      { english: "cruel to", russian: "жестокий к" },
      { english: "dedicated to", russian: "преданный" },
      { english: "faithful to", russian: "верный" },
      { english: "friendly to", russian: "дружелюбный к" },
      { english: "kind to", russian: "добрый к" },
      { english: "opposed to", russian: "против" },
      { english: "relevant to", russian: "относящийся к" },
      { english: "rude to", russian: "грубый с" },
      { english: "superior to", russian: "превосходящий" },
    ],
  },
  {
    pattern: "Adjective + FOR",
    patternTranslation: "Прилагательное + FOR",
    examples: [
      { english: "anxious for", russian: "озабоченный" },
      { english: "appropriate for", russian: "подходящий для" },
      { english: "eager for", russian: "стремящийся к" },
      { english: "eligible for", russian: "имеющий право на" },
      { english: "essential for", russian: "необходимый для" },
      { english: "fitted for", russian: "подготовленный для" },
      { english: "fit for", russian: "пригодный для" },
      { english: "good for", russian: "полезный для" },
      { english: "late for", russian: "опоздавший на" },
      { english: "necessary for", russian: "необходимый для" },
      { english: "perfect for", russian: "идеальный для" },
      { english: "qualified for", russian: "квалифицированный для" },
    ],
  },
  {
    pattern: "Adjective + WITH",
    patternTranslation: "Прилагательное + WITH",
    examples: [
      { english: "acquainted with", russian: "знакомый с" },
      { english: "annoyed with", russian: "раздраженный" },
      { english: "bored with", russian: "скучающий" },
      { english: "consistent with", russian: "соответствующий" },
      { english: "content with", russian: "довольный" },
      { english: "crowded with", russian: "переполненный" },
      { english: "delighted with", russian: "восхищенный" },
      { english: "disappointed with", russian: "разочарованный" },
      { english: "fed up with", russian: "сытый по горло" },
      { english: "filled with", russian: "наполненный" },
      { english: "patient with", russian: "терпеливый с" },
      { english: "satisfied with", russian: "удовлетворенный" },
    ],
  },
];

const emotionCategories = [
  {
    emotion: "Положительные эмоции",
    examples: [
      "happy about",
      "pleased with",
      "excited about",
      "delighted with",
      "proud of",
      "grateful to",
      "satisfied with",
      "content with",
    ],
  },
  {
    emotion: "Отрицательные эмоции",
    examples: [
      "angry with",
      "annoyed with",
      "worried about",
      "afraid of",
      "tired of",
      "bored with",
      "disappointed with",
      "frustrated with",
    ],
  },
  {
    emotion: "Умения и способности",
    examples: [
      "good at",
      "bad at",
      "excellent at",
      "skillful at",
      "experienced in",
      "qualified for",
      "capable of",
      "competent in",
    ],
  },
];

const trickyPairs = [
  {
    pair: "good at vs good for",
    explanation: "good at - умелый в чем-то, good for - полезный для чего-то",
    examples: ["She is good at swimming.", "Fruit is good for health."],
  },
  {
    pair: "angry with vs angry at",
    explanation: "angry with - на человека, angry at - на ситуацию или вещь",
    examples: ["I'm angry with my friend.", "He's angry at the situation."],
  },
  {
    pair: "interested in vs interesting to",
    explanation:
      "interested in - проявляющий интерес, interesting to - вызывающий интерес",
    examples: ["I'm interested in history.", "History is interesting to me."],
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[6px_0_12px]">
      <div className="mx-auto ">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions with Adjectives - Предлоги с Прилагательными
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите устойчивые сочетания прилагательных с предлогами в
            английском языке.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги с прилагательными?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги с прилагательными</strong> - это устойчивые
              сочетания, где определенные прилагательные всегда используются с
              конкретными предлогами. Эти сочетания нужно запоминать, так как
              они не всегда поддаются логическому объяснению.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Например, мы говорим "interested <strong>in</strong>", а не
              "interested
              <strong> about</strong>" или "good <strong>at</strong>", а не
              "good
              <strong> in</strong>".
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги с прилагательными
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
                    с прилагательными
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  {prep.usage}
                </p>

                <div className="space-y-3">
                  {prep.adjectives.map((adj, i) => (
                    <div key={i} className="border-l-4 border-blueCl pl-3">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                        {adj.adjective}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {adj.example}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400">
                        {adj.translation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Распространенные шаблоны
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonPatterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <h3 className="font-bold text-lg text-center text-blueCl dark:text-blue-300 mb-3">
                  {pattern.pattern}
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
                    {pattern.patternTranslation}
                  </div>
                </h3>
                <div className="space-y-2">
                  {pattern.examples.map((example, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {example.english}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {example.russian}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emotion Categories */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Эмоции и чувства с предлогами
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {emotionCategories.map((category, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg border-2 ${
                  index === 0
                    ? "border-green-200 dark:border-green-800"
                    : index === 1
                    ? "border-red-200 dark:border-red-800"
                    : "border-blue-200 dark:border-blue-800"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-3 ${
                    index === 0
                      ? "text-green-600 dark:text-green-400"
                      : index === 1
                      ? "text-red-600 dark:text-red-400"
                      : "text-blueCl dark:text-blue-300"
                  }`}
                >
                  {category.emotion}
                </h3>
                <div className="space-y-2">
                  {category.examples.map((example, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tricky Pairs */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Сложные пары и различия
          </h2>
          <div className="space-y-6">
            {trickyPairs.map((pair, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <h3 className="font-bold text-lg text-blueCl dark:text-blue-300 mb-2">
                  {pair.pair}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {pair.explanation}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {pair.examples.map((example, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-gray-700 p-3 rounded text-center"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Tips */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Советы по запоминанию
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                Группировка по смыслу
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>OF</strong> - чувства и осознание (afraid of, proud
                  of)
                </li>
                <li>
                  <strong>TO</strong> - отношения и направленность (married to,
                  polite to)
                </li>
                <li>
                  <strong>FOR</strong> - цель и ответственность (famous for,
                  responsible for)
                </li>
                <li>
                  <strong>WITH</strong> - эмоциональное состояние (angry with,
                  pleased with)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Практические советы
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>Учите целые фразы, а не отдельные слова</li>
                <li>Создавайте свои примеры с новыми сочетаниями</li>
                <li>Обращайте внимание на предлоги при чтении</li>
                <li>Практикуйтесь в разговорной речи</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Component */}
        <Prepositions_With_Adjectives_Interactive />
      </div>
    </div>
  );
}
