import Prepositions_With_Verbs_Interactive from "@/pages-components/prepositions/verbs/Prepositions_With_Verbs_Interactive";

const prepositionsData = [
  {
    preposition: "to",
    verbs: [
      {
        verb: "listen",
        example: "listen to music",
        translation: "слушать музыку",
      },
      {
        verb: "talk",
        example: "talk to friends",
        translation: "разговаривать с друзьями",
      },
      {
        verb: "belong",
        example: "belong to someone",
        translation: "принадлежать кому-то",
      },
      {
        verb: "agree",
        example: "agree to proposal",
        translation: "соглашаться на предложение",
      },
      {
        verb: "apologize",
        example: "apologize to someone",
        translation: "извиняться перед кем-то",
      },
      {
        verb: "refer",
        example: "refer to something",
        translation: "ссылаться на что-то",
      },
    ],
    usage: "Направленность действия, адресат, отношение",
  },
  {
    preposition: "for",
    verbs: [
      { verb: "wait", example: "wait for bus", translation: "ждать автобус" },
      { verb: "ask", example: "ask for help", translation: "просить помощи" },
      { verb: "look", example: "look for keys", translation: "искать ключи" },
      {
        verb: "pay",
        example: "pay for dinner",
        translation: "платить за ужин",
      },
      {
        verb: "thank",
        example: "thank for help",
        translation: "благодарить за помощь",
      },
      {
        verb: "prepare",
        example: "prepare for exam",
        translation: "готовиться к экзамену",
      },
    ],
    usage: "Цель, причина, получатель, продолжительность",
  },
  {
    preposition: "about",
    verbs: [
      {
        verb: "talk",
        example: "talk about weather",
        translation: "говорить о погоде",
      },
      {
        verb: "think",
        example: "think about future",
        translation: "думать о будущем",
      },
      {
        verb: "care",
        example: "care about environment",
        translation: "заботиться об окружающей среде",
      },
      {
        verb: "dream",
        example: "dream about vacation",
        translation: "мечтать об отпуске",
      },
      {
        verb: "complain",
        example: "complain about service",
        translation: "жаловаться на обслуживание",
      },
      {
        verb: "worry",
        example: "worry about health",
        translation: "беспокоиться о здоровье",
      },
    ],
    usage: "Тема разговора, мысли, заботы",
  },
  {
    preposition: "with",
    verbs: [
      {
        verb: "agree",
        example: "agree with opinion",
        translation: "соглашаться с мнением",
      },
      {
        verb: "deal",
        example: "deal with problem",
        translation: "справляться с проблемой",
      },
      {
        verb: "provide",
        example: "provide with information",
        translation: "обеспечивать информацией",
      },
      {
        verb: "fill",
        example: "fill with water",
        translation: "наполнять водой",
      },
      {
        verb: "compare",
        example: "compare with others",
        translation: "сравнивать с другими",
      },
      {
        verb: "begin",
        example: "begin with introduction",
        translation: "начинать с введения",
      },
    ],
    usage: "Совместность, инструмент, сопровождение",
  },
  {
    preposition: "of",
    verbs: [
      {
        verb: "think",
        example: "think of idea",
        translation: "думать об идее",
      },
      {
        verb: "consist",
        example: "consist of parts",
        translation: "состоять из частей",
      },
      {
        verb: "approve",
        example: "approve of decision",
        translation: "одобрять решение",
      },
      {
        verb: "dream",
        example: "dream of success",
        translation: "мечтать об успехе",
      },
      {
        verb: "accuse",
        example: "accuse of crime",
        translation: "обвинять в преступлении",
      },
      {
        verb: "remind",
        example: "remind of promise",
        translation: "напоминать об обещании",
      },
    ],
    usage: "Содержание, состав, характеристика",
  },
  {
    preposition: "on",
    verbs: [
      {
        verb: "depend",
        example: "depend on weather",
        translation: "зависеть от погоды",
      },
      {
        verb: "rely",
        example: "rely on friends",
        translation: "полагаться на друзей",
      },
      {
        verb: "focus",
        example: "focus on details",
        translation: "концентрироваться на деталях",
      },
      {
        verb: "work",
        example: "work on project",
        translation: "работать над проектом",
      },
      {
        verb: "decide",
        example: "decide on plan",
        translation: "решать по поводу плана",
      },
      {
        verb: "congratulate",
        example: "congratulate on success",
        translation: "поздравлять с успехом",
      },
    ],
    usage: "Основание, зависимость, тема",
  },
  {
    preposition: "at",
    verbs: [
      {
        verb: "look",
        example: "look at picture",
        translation: "смотреть на картину",
      },
      {
        verb: "laugh",
        example: "laugh at joke",
        translation: "смеяться над шуткой",
      },
      {
        verb: "arrive",
        example: "arrive at station",
        translation: "прибывать на станцию",
      },
      {
        verb: "guess",
        example: "guess at answer",
        translation: "предполагать ответ",
      },
      {
        verb: "wonder",
        example: "wonder at beauty",
        translation: "восхищаться красотой",
      },
      {
        verb: "point",
        example: "point at direction",
        translation: "указывать направление",
      },
    ],
    usage: "Направление взгляда, реакция, цель",
  },
  {
    preposition: "from",
    verbs: [
      {
        verb: "suffer",
        example: "suffer from illness",
        translation: "страдать от болезни",
      },
      {
        verb: "protect",
        example: "protect from danger",
        translation: "защищать от опасности",
      },
      {
        verb: "prevent",
        example: "prevent from accident",
        translation: "предотвращать аварию",
      },
      {
        verb: "recover",
        example: "recover from illness",
        translation: "выздоравливать от болезни",
      },
      {
        verb: "borrow",
        example: "borrow from library",
        translation: "брать взаймы из библиотеки",
      },
      {
        verb: "graduate",
        example: "graduate from university",
        translation: "оканчивать университет",
      },
    ],
    usage: "Происхождение, источник, защита",
  },
];

const verbPatterns = [
  {
    pattern: "Verb + TO",
    patternTranslation: "Глагол + TO",
    examples: [
      { english: "adapt to", russian: "адаптироваться к" },
      { english: "adjust to", russian: "приспосабливаться к" },
      { english: "admit to", russian: "признаваться в" },
      { english: "appeal to", russian: "обращаться к" },
      { english: "commit to", russian: "обязываться" },
      { english: "confess to", russian: "признаваться в" },
      { english: "consent to", russian: "соглашаться на" },
      { english: "contribute to", russian: "способствовать" },
      { english: "invite to", russian: "приглашать на" },
      { english: "lead to", russian: "приводить к" },
      { english: "object to", russian: "возражать против" },
      { english: "react to", russian: "реагировать на" },
      { english: "reply to", russian: "отвечать на" },
      { english: "respond to", russian: "отвечать на" },
      { english: "stick to", russian: "придерживаться" },
      { english: "submit to", russian: "подчиняться" },
    ],
  },
  {
    pattern: "Verb + FOR",
    patternTranslation: "Глагол + FOR",
    examples: [
      { english: "account for", russian: "объяснять" },
      { english: "allow for", russian: "учитывать" },
      { english: "apply for", russian: "подавать заявление на" },
      { english: "arrange for", russian: "организовывать" },
      { english: "blame for", russian: "винить за" },
      { english: "charge for", russian: "брать плату за" },
      { english: "compensate for", russian: "компенсировать" },
      { english: "excuse for", russian: "извинять за" },
      { english: "forgive for", russian: "прощать за" },
      { english: "hope for", russian: "надеяться на" },
      { english: "long for", russian: "тосковать по" },
      { english: "pray for", russian: "молиться за" },
      { english: "search for", russian: "искать" },
      { english: "substitute for", russian: "заменять" },
      { english: "vote for", russian: "голосовать за" },
      { english: "wish for", russian: "желать" },
    ],
  },
  {
    pattern: "Verb + WITH",
    patternTranslation: "Глагол + WITH",
    examples: [
      { english: "associate with", russian: "ассоциировать с" },
      { english: "collaborate with", russian: "сотрудничать с" },
      { english: "combine with", russian: "сочетать с" },
      { english: "communicate with", russian: "общаться с" },
      { english: "compete with", russian: "соревноваться с" },
      { english: "comply with", russian: "соблюдать" },
      { english: "confuse with", russian: "путать с" },
      { english: "connect with", russian: "связываться с" },
      { english: "cooperate with", russian: "сотрудничать с" },
      { english: "cope with", russian: "справляться с" },
      { english: "correspond with", russian: "соответствовать" },
      { english: "disagree with", russian: "не соглашаться с" },
      { english: "interfere with", russian: "мешать" },
      { english: "meet with", russian: "встречаться с" },
      { english: "share with", russian: "делиться с" },
      { english: "sympathize with", russian: "сочувствовать" },
    ],
  },
  {
    pattern: "Verb + ABOUT",
    patternTranslation: "Глагол + ABOUT",
    examples: [
      { english: "argue about", russian: "спорить о" },
      { english: "boast about", russian: "хвастаться" },
      { english: "decide about", russian: "решать о" },
      { english: "hear about", russian: "слышать о" },
      { english: "inform about", russian: "сообщать о" },
      { english: "inquire about", russian: "спрашивать о" },
      { english: "know about", russian: "знать о" },
      { english: "learn about", russian: "узнавать о" },
      { english: "read about", russian: "читать о" },
      { english: "speak about", russian: "говорить о" },
      { english: "tell about", russian: "рассказывать о" },
      { english: "warn about", russian: "предупреждать о" },
    ],
  },
];

const semanticGroups = [
  {
    category: "Коммуникация",
    categoryTranslation: "Communication",
    verbs: [
      { english: "talk to", russian: "разговаривать с" },
      { english: "speak to", russian: "говорить с" },
      { english: "listen to", russian: "слушать" },
      { english: "write to", russian: "писать" },
      { english: "agree with", russian: "соглашаться с" },
      { english: "disagree with", russian: "не соглашаться с" },
      { english: "argue about", russian: "спорить о" },
      { english: "discuss with", russian: "обсуждать с" },
    ],
  },
  {
    category: "Действия с объектами",
    categoryTranslation: "Object Actions",
    verbs: [
      { english: "look at", russian: "смотреть на" },
      { english: "point at", russian: "указывать на" },
      { english: "wait for", russian: "ждать" },
      { english: "search for", russian: "искать" },
      { english: "ask for", russian: "просить" },
      { english: "pay for", russian: "платить за" },
      { english: "work on", russian: "работать над" },
      { english: "focus on", russian: "концентрироваться на" },
    ],
  },
  {
    category: "Эмоции и отношения",
    categoryTranslation: "Emotions & Relationships",
    verbs: [
      { english: "care about", russian: "заботиться о" },
      { english: "worry about", russian: "беспокоиться о" },
      { english: "complain about", russian: "жаловаться на" },
      { english: "dream about", russian: "мечтать о" },
      { english: "laugh at", russian: "смеяться над" },
      { english: "wonder at", russian: "удивляться" },
      { english: "thank for", russian: "благодарить за" },
      { english: "apologize to", russian: "извиняться перед" },
    ],
  },
  {
    category: "Изменения и процессы",
    categoryTranslation: "Changes & Processes",
    verbs: [
      { english: "depend on", russian: "зависеть от" },
      { english: "rely on", russian: "полагаться на" },
      { english: "lead to", russian: "приводить к" },
      { english: "contribute to", russian: "способствовать" },
      { english: "result in", russian: "приводить к" },
      { english: "suffer from", russian: "страдать от" },
      { english: "recover from", russian: "восстанавливаться после" },
      { english: "graduate from", russian: "оканчивать" },
    ],
  },
];

const phrasalVerbs = [
  {
    verb: "look",
    verbTranslation: "смотреть",
    combinations: [
      { english: "look after", russian: "присматривать за" },
      { english: "look for", russian: "искать" },
      { english: "look forward to", russian: "с нетерпением ждать" },
      { english: "look into", russian: "исследовать" },
      { english: "look out", russian: "быть осторожным" },
      { english: "look through", russian: "просматривать" },
      { english: "look up", russian: "искать в справочнике" },
      { english: "look up to", russian: "уважать" },
    ],
  },
  {
    verb: "get",
    verbTranslation: "получать",
    combinations: [
      { english: "get along with", russian: "ладить с" },
      { english: "get away with", russian: "сходить с рук" },
      { english: "get over", russian: "преодолевать" },
      { english: "get through", russian: "справляться" },
      { english: "get up", russian: "вставать" },
      { english: "get on with", russian: "продолжать" },
      { english: "get off", russian: "выходить (из транспорта)" },
      { english: "get back", russian: "возвращаться" },
    ],
  },
  {
    verb: "put",
    verbTranslation: "класть",
    combinations: [
      { english: "put up with", russian: "мириться с" },
      { english: "put off", russian: "откладывать" },
      { english: "put on", russian: "надевать" },
      { english: "put out", russian: "тушить" },
      { english: "put through", russian: "соединять (по телефону)" },
      { english: "put away", russian: "убирать" },
      { english: "put down", russian: "записывать" },
      { english: "put forward", russian: "выдвигать" },
    ],
  },
  {
    verb: "take",
    verbTranslation: "брать",
    combinations: [
      { english: "take after", russian: "быть похожим на" },
      { english: "take off", russian: "взлетать" },
      { english: "take on", russian: "брать на себя" },
      { english: "take over", russian: "брать на себя управление" },
      { english: "take up", russian: "начинать заниматься" },
      { english: "take out", russian: "вынимать" },
      { english: "take back", russian: "забирать назад" },
      { english: "take down", russian: "записывать" },
    ],
  },
];
const commonMistakes = [
  {
    incorrect: "I'm waiting the bus",
    correct: "I'm waiting FOR the bus",
    explanation: "wait всегда требует предлога FOR",
  },
  {
    incorrect: "She listened music",
    correct: "She listened TO music",
    explanation: "listen всегда требует предлога TO",
  },
  {
    incorrect: "They arrived to the station",
    correct: "They arrived AT the station",
    explanation: "arrive использует AT для конкретных мест",
  },
  {
    incorrect: "I'm thinking to buy a car",
    correct: "I'm thinking ABOUT buying a car",
    explanation: "think about для размышлений, think of для воспоминаний",
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[6px_0_12px]">
      <div className="mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Prepositions with Verbs - Предлоги с Глаголами
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Изучите устойчивые сочетания глаголов с предлогами в английском
            языке.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
            Что такое предлоги с глаголами?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Предлоги с глаголами</strong> - это устойчивые сочетания,
              где определенные глаголы всегда используются с конкретными
              предлогами. Эти сочетания являются фиксированными и их нужно
              запоминать.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Например, мы говорим "listen <strong>to</strong> music", а не
              "listen
              <strong> music</strong>" или "wait <strong>for</strong> bus", а не
              "wait
              <strong> bus</strong>".
            </p>
          </div>
        </section>

        {/* Prepositions Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blueCl dark:text-blue-300 mb-6">
            Основные предлоги с глаголами
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
                    с глаголами
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  {prep.usage}
                </p>

                <div className="space-y-3">
                  {prep.verbs.map((verb, i) => (
                    <div key={i} className="border-l-4 border-blueCl pl-3">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                        {verb.verb}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {verb.example}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400">
                        {verb.translation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verb Patterns */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Распространенные шаблоны
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verbPatterns.map((pattern, index) => (
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

        {/* Semantic Groups */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Семантические группы глаголов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semanticGroups.map((group, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800"
              >
                <h3 className="text-lg font-bold text-blueCl dark:text-blue-300 mb-3">
                  {group.category}
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
                    {group.categoryTranslation}
                  </div>
                </h3>
                <div className="space-y-2">
                  {group.verbs.map((verb, i) => (
                    <div key={i}>
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {verb.english}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {verb.russian}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phrasal Verbs */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Фразовые глаголы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phrasalVerbs.map((phrasal, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <h3 className="font-bold text-lg text-center text-green-600 dark:text-green-400 mb-3">
                  {phrasal.verb}
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
                    {phrasal.verbTranslation}
                  </div>
                </h3>
                <div className="space-y-2">
                  {phrasal.combinations.map((combination, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {combination.english}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {combination.russian}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
            Частые ошибки
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-2">
                  <div className="text-center">
                    <p className="text-sm text-red-500 dark:text-red-400 mb-1">
                      Неправильно
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium line-through">
                      {mistake.incorrect}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-green-600 dark:text-green-400 mb-1">
                      Правильно
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {mistake.correct}
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-blueCl dark:text-blue-300">
                  {mistake.explanation}
                </p>
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
                Группировка по предлогам
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>
                  <strong>TO</strong> - направленность (listen to, talk to)
                </li>
                <li>
                  <strong>FOR</strong> - цель (wait for, ask for)
                </li>
                <li>
                  <strong>ABOUT</strong> - тема (talk about, think about)
                </li>
                <li>
                  <strong>WITH</strong> - совместность (agree with, deal with)
                </li>
                <li>
                  <strong>OF</strong> - содержание (think of, consist of)
                </li>
                <li>
                  <strong>ON</strong> - зависимость (depend on, rely on)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Практические советы
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>Учите глаголы с предлогами как единое целое</li>
                <li>Создавайте предложения с новыми сочетаниями</li>
                <li>Обращайте внимание на предлоги при чтении и аудировании</li>
                <li>Практикуйтесь в использовании в разговорной речи</li>
                <li>Ведите словарик глаголов с предлогами</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Component */}
        <Prepositions_With_Verbs_Interactive />
      </div>
    </div>
  );
}
