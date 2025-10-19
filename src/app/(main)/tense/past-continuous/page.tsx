import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Past_Continuous from "@/pages-components/tense/past-continuous/Practice_Past_Continuous";

export default function Past_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-amber-600 dark:text-amber-400">
            Past Continuous: Полное руководство по прошедшему продолженному
            времени
          </h1>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Past Continuous</strong> — это время, которое описывает
            действия, длившиеся в определённый момент в прошлом. Оно
            подчёркивает процесс действия и часто используется вместе с Past
            Simple.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
              <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                Когда использовать Past Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действие в процессе</strong> в конкретный момент
                    прошлого
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Два одновременных действия</strong> в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Длительное действие</strong>, прерванное другим
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Описание атмосферы</strong> и обстановки в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Вежливые вопросы</strong> о прошлых планах
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                Примеры использования
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Действие в процессе:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>was watching</strong> TV at 8 PM yesterday.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Прерванное действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>was reading</strong> when the phone rang.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Два одновременных действия:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    While I <strong>was cooking</strong>, he{" "}
                    <strong>was setting</strong> the table.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Описание атмосферы:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    The sun <strong>was shining</strong> and birds{" "}
                    <strong>were singing</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🧱 Формулы образования Past Continuous
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Утверждение */}
            <div className="bg-white dark:bg-gray-800 border-2 border-green-500 dark:border-green-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                  Утверждение
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">
                  Subject + was/were + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>was sleeping</strong> at midnight.
                </li>
                <li>
                  He <strong>was working</strong> all day yesterday.
                </li>
                <li>
                  They <strong>were talking</strong> when I arrived.
                </li>
                <li>
                  We <strong>were watching</strong> a movie.
                </li>
              </ul>
            </div>

            {/* Отрицание */}
            <div className="bg-white dark:bg-gray-800 border-2 border-red-500 dark:border-red-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ✗
                </div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
                  Отрицание
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">
                  Subject + wasn't/weren't + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>wasn't sleeping</strong> at that time.
                </li>
                <li>
                  She <strong>wasn't working</strong> yesterday.
                </li>
                <li>
                  They <strong>weren't talking</strong> about you.
                </li>
                <li>
                  We <strong>weren't watching</strong> TV.
                </li>
              </ul>
            </div>

            {/* Вопрос */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ?
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  Вопрос
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">
                  Was/Were + Subject + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Were</strong> you <strong>sleeping</strong> at
                  midnight?
                </li>
                <li>
                  <strong>Was</strong> he <strong>working</strong> yesterday?
                </li>
                <li>
                  <strong>Were</strong> they <strong>talking</strong> about me?
                </li>
                <li>
                  <strong>Was</strong> she <strong>watching</strong> TV?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Формы глагола TO BE в прошедшем времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🔷 Формы глагола TO BE в Past Continuous
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              Глагол <strong>to be</strong> в прошедшем времени имеет две формы:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-2xl mb-3 text-amber-600 dark:text-amber-400">
                  was
                </div>
                <div className="text-lg mb-2">I, he, she, it</div>
                <div className="text-sm dark:text-bgLight/70 space-y-1">
                  <div>I was sleeping</div>
                  <div>He was working</div>
                  <div>She was reading</div>
                  <div>It was raining</div>
                </div>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-2xl mb-3 text-amber-600 dark:text-amber-400">
                  were
                </div>
                <div className="text-lg mb-2">you, we, they</div>
                <div className="text-sm dark:text-bgLight/70 space-y-1">
                  <div>You were talking</div>
                  <div>We were watching</div>
                  <div>They were playing</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицание</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  wasn't / weren't
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I wasn't sleeping
                </div>
                <div className="text-sm dark:text-bgLight/70">
                  They weren't talking
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Вопросы</div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  Was I? / Were you?
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  Was he sleeping?
                </div>
                <div className="text-sm dark:text-bgLight/70">
                  Were they coming?
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Continuous + Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            ⚡ Past Continuous + Past Simple
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Past Continuous часто используется вместе с Past Simple для
              описания ситуации, когда длительное действие было прервано кратким
              действием:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Структура предложения
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Continuous + when + Past Simple
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    I was watching TV when the phone rang.
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    While + Past Continuous, Past Simple
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    While I was cooking, he arrived home.
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Simple + while + Past Continuous
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    He called while I was taking a shower.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Примеры в контексте
                </h4>
                <ul className="space-y-3 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      I <strong>was walking</strong> in the park when I{" "}
                      <strong>met</strong> my old friend.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      While she <strong>was studying</strong>, her brother{" "}
                      <strong>called</strong> her.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      They <strong>were having</strong> dinner when the lights{" "}
                      <strong>went</strong> out.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      He <strong>was driving</strong> to work when he{" "}
                      <strong>saw</strong> the accident.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Два действия в Past Continuous */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🔄 Два одновременных действия в Past Continuous
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
            <p className="dark:text-bgLight/70 mb-4">
              Когда два действия происходили одновременно в прошлом, оба могут
              стоять в Past Continuous:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                  Структура с "while"
                </h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-mono text-amber-600 dark:text-amber-400">
                      While + Past Continuous, Past Continuous
                    </p>
                    <p className="text-xs dark:text-bgLight/70 mt-1">
                      While I <strong>was cooking</strong>, he{" "}
                      <strong>was setting</strong> the table.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-mono text-amber-600 dark:text-amber-400">
                      Past Continuous while Past Continuous
                    </p>
                    <p className="text-xs dark:text-bgLight/70 mt-1">
                      I <strong>was studying</strong> while my roommate{" "}
                      <strong>was watching</strong> TV.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                  Дополнительные примеры
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      While I <strong>was reading</strong>, my sister{" "}
                      <strong>was listening</strong> to music.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      He <strong>was working</strong> while she{" "}
                      <strong>was sleeping</strong>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      They <strong>were talking</strong> while we{" "}
                      <strong>were waiting</strong> for the bus.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Past Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  Конкретное время
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    at 5 o'clock yesterday
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    at that time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    at that moment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    this time yesterday
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    all day yesterday
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  Связующие слова
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    when
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    while
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    as
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    just as
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    at the time
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  Периоды времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    all morning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    the whole day
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    during the evening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    throughout the night
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    for hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            ⚖️ Сравнение Past Continuous и Past Simple
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-amber-600 dark:bg-amber-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Past Continuous</th>
                  <th className="p-4 text-left">Past Simple</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Основное значение</td>
                  <td className="p-4">Действие в процессе в прошлом</td>
                  <td className="p-4">Завершённое действие в прошлом</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">was/were + Ving</td>
                  <td className="p-4 font-mono">V2 / did + V1</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I was watching TV at 8 PM.</td>
                  <td className="p-4">I watched TV yesterday.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Длительность</td>
                  <td className="p-4">Подчёркивает процесс</td>
                  <td className="p-4">Подчёркивает факт</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Сигнальные слова</td>
                  <td className="p-4">while, when, at 5 PM</td>
                  <td className="p-4">yesterday, last week, ago</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">
                Past Continuous используется для:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Действий в процессе в конкретный момент</li>
                <li>• Длительных действий, прерванных другими</li>
                <li>• Двух одновременных действий</li>
                <li>• Описания атмосферы и обстановки</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Past Simple используется для:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Завершённых действий в прошлом</li>
                <li>• Последовательности событий</li>
                <li>• Прошлых привычек и фактов</li>
                <li>• Однократных действий</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Описание атмосферы и обстановки
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Past Continuous часто используется для создания фона и описания
                обстановки в рассказе:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm italic dark:text-bgLight/70">
                  "The sun <strong>was shining</strong>, birds{" "}
                  <strong>were singing</strong>, and people{" "}
                  <strong>were walking</strong> in the park. Children{" "}
                  <strong>were playing</strong>
                  on the playground while their parents{" "}
                  <strong>were watching</strong> them."
                </p>
              </div>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Вежливые вопросы о прошлом
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Past Continuous может использоваться для вежливых вопросов о
                прошлых планах:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "I <strong>was wondering</strong> if you could help me."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "<strong>Were you planning</strong> to come to the meeting?"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "I <strong>was hoping</strong> we could talk."
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            ⚠️ Глаголы состояния в Past Continuous
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              Как и в Present Continuous, <strong>глаголы состояния</strong>{" "}
              обычно не используются в Continuous временах. Однако некоторые
              могут менять значение:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Обычно НЕ используются
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      I <strong>was knowing</strong> the answer.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      She <strong>was liking</strong> the movie.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      They <strong>were having</strong> a car.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      He <strong>was understanding</strong> the problem.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Правильные формы
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      I <strong>knew</strong> the answer.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      She <strong>liked</strong> the movie.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      They <strong>had</strong> a car.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      He <strong>understood</strong> the problem.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 border-l-4 border-amber-600 dark:border-amber-400 pl-4">
            🚫 Распространённые ошибки
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-4">
                ❌ Неправильно
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    I <strong>was watch</strong> TV yesterday.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>were play</strong> football at 5 PM.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>were sleeping</strong> when I called.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>was having</strong> dinner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    When I <strong>was arriving</strong>, he{" "}
                    <strong>was leaving</strong>.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-4">
                ✅ Правильно
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    I <strong>was watching</strong> TV yesterday.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>were playing</strong> football at 5 PM.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>was sleeping</strong> when I called.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>were having</strong> dinner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    When I <strong>arrived</strong>, he{" "}
                    <strong>was leaving</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Past_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
          <h2 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>was/were + Ving</strong> для действий в
                    процессе
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">
                    •
                  </span>
                  <span>
                    Was для I/he/she/it, <strong>were</strong> для you/we/they
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте с <strong>when</strong> для прерванных действий
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте с <strong>while</strong> для одновременных
                    действий
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">
                    •
                  </span>
                  <span>
                    Глаголы состояния обычно не используются в Continuous
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Past Continuous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю разницу между was и were</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Past Simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать when и while</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу описать прерванные и одновременные действия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-amber-200 dark:border-amber-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, описывая, что вы делали
              в конкретный момент в прошлом. Например: "Yesterday at 8 PM, I
              was...", "When my friend called, I was...". Составляйте
              предложения с when и while, чтобы лучше понять разницу!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
