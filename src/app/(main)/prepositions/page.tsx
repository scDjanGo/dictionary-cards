import Pages_Navbar from "@/components/navbar/Pages_Navbar";
import { PREPOSITIONS } from "@/data/prepositions";

export default function page() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
        <Pages_Navbar navItems={PREPOSITIONS} />
      {/* Header */}
      <section className="bg-blueCl dark:bg-bgItem  rounded-[0_0_12px_12px] text-white py-8">
        <div className=" mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Предлоги в Английском Языке
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
            Полное руководство по всем типам предлогов: места, времени,
            направления и многое другое
          </p>
        </div>
      </section>

      <div className=" mx-auto py-8">
        {/* Что такое предлоги */}
        <section className="mb-12">
          <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blueCl dark:text-blue-300 mb-4 text-center">
              Что такое предлоги?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Предлоги</strong> - это служебные слова, которые
                  показывают отношения между существительными и другими словами
                  в предложении.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-blueCl mb-3">
                    Основные характеристики:
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blueCl mr-2">•</span>
                      Всегда стоят перед существительными
                    </li>
                    <li className="flex items-start">
                      <span className="text-blueCl mr-2">•</span>
                      Не изменяются по форме
                    </li>
                    <li className="flex items-start">
                      <span className="text-blueCl mr-2">•</span>
                      Часто не имеют прямого перевода
                    </li>
                    <li className="flex items-start">
                      <span className="text-blueCl mr-2">•</span>
                      Требуют запоминания с конкретными словами
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blueCl to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">Примеры предложений:</h3>
                <div className="space-y-3 text-base">
                  <p>
                    "The book is <strong>on</strong> the table."
                  </p>
                  <p>
                    "We'll meet <strong>at</strong> 3 PM."
                  </p>
                  <p>
                    "She comes <strong>from</strong> Spain."
                  </p>
                  <p>
                    "This gift is <strong>for</strong> you."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Основные категории предлогов */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Основные Категории Предлогов
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Prepositions of Place */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blueCl rounded-lg flex items-center justify-center text-white text-xl mr-3">
                  📍
                </div>
                <h3 className="text-xl font-bold text-blueCl dark:text-blue-300">
                  Prepositions of Place
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Показывают расположение объектов в пространстве
              </p>
              <div className="space-y-3">
                {[
                  { prep: "in", meaning: "в (внутри)", example: "in the room" },
                  {
                    prep: "on",
                    meaning: "на (поверхности)",
                    example: "on the table",
                  },
                  {
                    prep: "at",
                    meaning: "у, в (точка)",
                    example: "at the station",
                  },
                  { prep: "under", meaning: "под", example: "under the bed" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="font-bold dark:text-bgLight">
                      {item.prep}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.meaning}
                    </span>
                    <span className="text-sm text-blueCl">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prepositions of Time */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
                  ⏰
                </div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                  Prepositions of Time
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Указывают на время действия или события
              </p>
              <div className="space-y-3">
                {[
                  {
                    prep: "at",
                    meaning: "в (точное время)",
                    example: "at 5 PM",
                  },
                  { prep: "on", meaning: "в (дни)", example: "on Monday" },
                  { prep: "in", meaning: "в (периоды)", example: "in summer" },
                  { prep: "for", meaning: "в течение", example: "for 2 hours" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="font-bold dark:text-bgLight">
                      {item.prep}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.meaning}
                    </span>
                    <span className="text-sm text-green-600">
                      {item.example}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prepositions of Direction */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
                  🚶
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  Prepositions of Direction
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Показывают направление движения
              </p>
              <div className="space-y-3">
                {[
                  {
                    prep: "to",
                    meaning: "к, в (направление)",
                    example: "go to school",
                  },
                  { prep: "from", meaning: "из, от", example: "from London" },
                  {
                    prep: "into",
                    meaning: "в (внутрь)",
                    example: "walk into the room",
                  },
                  {
                    prep: "through",
                    meaning: "через",
                    example: "through the forest",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="font-bold dark:text-bgLight">
                      {item.prep}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.meaning}
                    </span>
                    <span className="text-sm text-purple-600">
                      {item.example}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prepositions of Cause/Reason */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
                  ❓
                </div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
                  Prepositions of Cause/Reason
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Выражают причину или основание действия
              </p>
              <div className="space-y-3">
                {[
                  {
                    prep: "because of",
                    meaning: "из-за",
                    example: "because of rain",
                  },
                  {
                    prep: "due to",
                    meaning: "вследствие",
                    example: "due to weather",
                  },
                  { prep: "for", meaning: "за, для", example: "famous for" },
                  {
                    prep: "from",
                    meaning: "от, из-за",
                    example: "suffer from",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="font-bold text-sm dark:text-bgLight">
                      {item.prep}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                      {item.meaning}
                    </span>
                    <span className="text-xs text-red-600">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Дополнительные категории */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Специальные Категории
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Prepositions for Agents */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-5 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-3">
                👤
              </div>
              <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-3">
                Prepositions for Agents
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Указывают на исполнителя действия
              </p>
              <div className="space-y-2">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">by</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    written by Shakespeare
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">with</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    cut with a knife
                  </p>
                </div>
              </div>
            </div>

            {/* Prepositions with Adjectives */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-5 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-3">
                📚
              </div>
              <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-3">
                Prepositions with Adjectives
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Предлоги с прилагательными
              </p>
              <div className="space-y-2">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">good at</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    good at swimming
                  </p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">
                    afraid of
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    afraid of dogs
                  </p>
                </div>
              </div>
            </div>

            {/* Prepositions with Verbs */}
            <div className="bg-white dark:bg-bgItem rounded-xl shadow-lg p-5 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-3">
                🔤
              </div>
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                Prepositions with Verbs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Предлоги с глаголами
              </p>
              <div className="space-y-2">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">
                    listen to
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    listen to music
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg">
                  <span className="font-bold  dark:text-bgLight">
                    depend on
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    depend on you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Полезные советы */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blueCl to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Полезные Советы по Изучению Предлогов
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">✅ Что делать:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Учите предлоги в контексте целых фраз
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Запоминайте устойчивые выражения
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Практикуйтесь с реальными примерами
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Обращайте внимание на различия
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">❌ Чего избегать:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Прямого перевода с русского
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Заучивания отдельных предлогов
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Игнорирования контекста
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Использования неправильных сочетаний
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
