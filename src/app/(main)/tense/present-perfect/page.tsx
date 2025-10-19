import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Present_Perfect from "@/pages-components/tense/present-perfect/Practice_Present_Perfect";

export default function Present_Perfect_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl   max-1040px:text-[28px] font-bold text-emerald-600 dark:text-emerald-400">
            Present Perfect: Полное руководство по настоящему совершенному
            времени
          </h1>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Present Perfect</strong> — это время, которое связывает
            прошлое с настоящим. Оно описывает действия, которые произошли в
            неопределённое время в прошлом, но имеют результат или значение в
            настоящем.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                Когда использовать Present Perfect?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Опыт</strong> в течение жизни
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Изменения</strong> с течением времени
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Достижения</strong> и результаты
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Незавершённые действия</strong> и периоды
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Недавние события</strong> с результатом в настоящем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Несколько действий</strong> в разное время
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
                  <p className="font-medium">Опыт:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>have visited</strong> Paris three times.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Изменение:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She <strong>has become</strong> more confident.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Достижение:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    Scientists <strong>have discovered</strong> a new planet.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Незавершённое действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>have lived</strong> here for five years.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Недавнее событие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    He <strong>has just finished</strong> his work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            🧱 Формулы образования Present Perfect
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
                  Subject + have/has + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>have finished</strong> my homework.
                </li>
                <li>
                  She <strong>has seen</strong> that movie.
                </li>
                <li>
                  They <strong>have visited</strong> London.
                </li>
                <li>
                  We <strong>have eaten</strong> lunch.
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
                  Subject + haven't/hasn't + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>haven't finished</strong> my work yet.
                </li>
                <li>
                  She <strong>hasn't seen</strong> that movie.
                </li>
                <li>
                  They <strong>haven't visited</strong> Paris.
                </li>
                <li>
                  We <strong>haven't eaten</strong> yet.
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
                  Have/Has + Subject + Verb (V3)?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Have</strong> you <strong>finished</strong> your work?
                </li>
                <li>
                  <strong>Has</strong> she <strong>seen</strong> that movie?
                </li>
                <li>
                  <strong>Have</strong> they <strong>visited</strong> London?
                </li>
                <li>
                  <strong>Has</strong> he <strong>eaten</strong> lunch?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Формы have/has */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            🔷 Формы глаголов HAVE и HAS
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              В Present Perfect используются вспомогательные глаголы{" "}
              <strong>have</strong> и <strong>has</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-2xl mb-3 text-emerald-600 dark:text-emerald-400">
                  have
                </div>
                <div className="text-lg mb-2">I, you, we, they</div>
                <div className="text-sm dark:text-bgLight/70 space-y-1">
                  <div>I have seen</div>
                  <div>You have been</div>
                  <div>We have done</div>
                  <div>They have gone</div>
                </div>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-2xl mb-3 text-emerald-600 dark:text-emerald-400">
                  has
                </div>
                <div className="text-lg mb-2">he, she, it</div>
                <div className="text-sm dark:text-bgLight/70 space-y-1">
                  <div>He has seen</div>
                  <div>She has been</div>
                  <div>It has happened</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Сокращения</div>
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  've / 's
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I've seen, He's gone
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицания</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  haven't / hasn't
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I haven't seen
                </div>
                <div className="text-sm dark:text-bgLight/70">
                  She hasn't finished
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Правильные и неправильные глаголы */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            📘 Третья форма глаголов (V3)
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <p className="dark:text-bgLight/70 mb-4">
              В Present Perfect используется третья форма глагола (V3). Как и в
              Past Simple, глаголы делятся на правильные и неправильные:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                  Правильные глаголы
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                    V1 + ed = V3
                  </div>
                  <div className="text-xs dark:text-bgLight/70 space-y-1">
                    <div>work → worked → worked</div>
                    <div>play → played → played</div>
                    <div>live → lived → lived</div>
                    <div>study → studied → studied</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>I have worked here for 5 years.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>She has played tennis since childhood.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                  Неправильные глаголы
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                    Уникальные формы (нужно запомнить)
                  </div>
                  <div className="text-xs dark:text-bgLight/70 space-y-1">
                    <div>go → went → gone</div>
                    <div>see → saw → seen</div>
                    <div>take → took → taken</div>
                    <div>write → wrote → written</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>They have gone to the store.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>He has seen that movie before.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Наречия времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            ⏰ Наречия времени в Present Perfect
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              С Present Perfect часто используются специальные наречия времени:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  just
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">только что</p>
                <div className="text-xs font-mono">I have just arrived</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  already
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">уже</p>
                <div className="text-xs font-mono">She has already left</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  yet
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  ещё (в отриц. и вопр.)
                </p>
                <div className="text-xs font-mono">
                  Haven't you finished yet?
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  never
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">никогда</p>
                <div className="text-xs font-mono">I have never been there</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  ever
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  когда-либо (в вопросах)
                </p>
                <div className="text-xs font-mono">
                  Have you ever visited Paris?
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  so far
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">до сих пор</p>
                <div className="text-xs font-mono">
                  So far, I have read 3 books
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For и Since */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            📅 FOR и SINCE в Present Perfect
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  FOR
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-4">
                  используется для указания ПРОДОЛЖИТЕЛЬНОСТИ
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>for 5 years</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      5 лет
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for a long time</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      долгое время
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for 2 hours</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      2 часа
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for ages</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      целую вечность
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I have lived here <strong>for 5 years</strong>.
                  </p>
                </div>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  SINCE
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-4">
                  используется для указания НАЧАЛЬНОЙ ТОЧКИ
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>since 2010</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      с 2010 года
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since Monday</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      с понедельника
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since I was a child</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      с детства
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since last year</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      с прошлого года
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I have lived here <strong>since 2018</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Запомните:</strong> FOR + период времени, SINCE +
                начальная точка времени
              </p>
            </div>
          </div>
        </section>

        {/* Сравнение с Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            ⚖️ Сравнение Present Perfect и Past Simple
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-emerald-600 dark:bg-emerald-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Present Perfect</th>
                  <th className="p-4 text-left">Past Simple</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Связь с настоящим</td>
                  <td className="p-4">Есть связь с настоящим</td>
                  <td className="p-4">Нет связи с настоящим</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Время действия</td>
                  <td className="p-4">Неопределённое время</td>
                  <td className="p-4">Конкретное время в прошлом</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">have/has + V3</td>
                  <td className="p-4 font-mono">V2 / did + V1</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I have seen that movie.</td>
                  <td className="p-4">I saw that movie yesterday.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Сигнальные слова</td>
                  <td className="p-4">just, already, yet, for, since</td>
                  <td className="p-4">yesterday, last week, ago, in 2010</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Когда использовать</td>
                  <td className="p-4">
                    Опыт, изменения, незавершённые периоды
                  </td>
                  <td className="p-4">Завершённые действия в прошлом</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                Present Perfect используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Время действия не важно или не указано</li>
                <li>• Действие имеет результат в настоящем</li>
                <li>• Говорим о жизненном опыте</li>
                <li>• Период времени ещё не закончился</li>
                <li>• Действие повторялось несколько раз</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Past Simple используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Время действия конкретно указано</li>
                <li>• Действие полностью завершено в прошлом</li>
                <li>• Говорим о конкретных событиях в прошлом</li>
                <li>• Период времени полностью завершён</li>
                <li>• Перечисляем последовательные события</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Present Perfect:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  Наречия времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    just
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    already
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    yet
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    never
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    ever
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    recently
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  Периоды времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    since
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    so far
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    up to now
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    until now
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    lately
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  Другие указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    today
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    this week/month/year
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    in my life
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    over the years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    many times
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    several times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 dark:border-emerald-400 pl-4">
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
                    I <strong>have seen</strong> him yesterday.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>has finished</strong> her work yet.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>have lived</strong> here since 5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>have went</strong> to the store.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He <strong>has eat</strong> lunch already.
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
                    I <strong>saw</strong> him yesterday.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>hasn't finished</strong> her work yet.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>have lived</strong> here for 5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>have gone</strong> to the store.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He <strong>has eaten</strong> lunch already.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Present_Perfect />

        {/* Итоги с чеклистом */}
        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>have/has + V3</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>
                    Has для he/she/it, <strong>have</strong> для I/you/we/they
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте для{" "}
                    <strong>опыта, изменений, достижений</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>
                    <strong>FOR</strong> + период, <strong>SINCE</strong> +
                    начальная точка
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу с <strong>Past Simple</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">
                    •
                  </span>
                  <span>Запомните неправильные глаголы</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Present Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю разницу между have и has</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Past Simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать for и since</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню основные наречия времени</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю основные неправильные глаголы</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-emerald-200 dark:border-emerald-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, рассказывая о своём
              жизненном опыте и недавних событиях. Например: "I have never...",
              "I have already...", "I have just...". Составляйте предложения с
              for и since, чтобы лучше понять разницу!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
