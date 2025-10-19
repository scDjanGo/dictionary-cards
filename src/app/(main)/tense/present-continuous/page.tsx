
import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Present_Continuous from "@/pages-components/tense/present-continuous/Practice_Present_Continuous";


export default function Present_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-teal-600 dark:text-teal-400">
            Present Continuous: Полное руководство по настоящему продолженному
            времени
          </h1>
          <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Present Continuous</strong> — это время, которое описывает
            действия, происходящие в момент речи или в текущий период времени.
            Оно подчёркивает процесс и длительность действия.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
              <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                Когда использовать Present Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действия в момент речи</strong> прямо сейчас
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Временные действия</strong> в текущий период
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Запланированные события</strong> в ближайшем будущем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Изменяющиеся ситуации</strong> и тенденции
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Раздражающие привычки</strong> (с always,
                    constantly)
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
                  <p className="font-medium">Действие сейчас:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>am reading</strong> a book right now.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Временное действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She <strong>is staying</strong> with us this week.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">План на будущее:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    We <strong>are meeting</strong> tomorrow at 5 PM.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Изменяющаяся ситуация:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    The climate <strong>is getting</strong> warmer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            🧱 Формулы образования Present Continuous
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
                  Subject + am/is/are + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>am watching</strong> TV.
                </li>
                <li>
                  He <strong>is playing</strong> football.
                </li>
                <li>
                  They <strong>are studying</strong> English.
                </li>
                <li>
                  We <strong>are waiting</strong> for the bus.
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
                  Subject + am not/isn't/aren't + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>am not working</strong> today.
                </li>
                <li>
                  She <strong>isn't listening</strong> to music.
                </li>
                <li>
                  They <strong>aren't coming</strong> to the party.
                </li>
                <li>
                  We <strong>aren't sleeping</strong> right now.
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
                  Am/Is/Are + Subject + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Are</strong> you <strong>watching</strong> TV?
                </li>
                <li>
                  <strong>Is</strong> he <strong>playing</strong> football?
                </li>
                <li>
                  <strong>Are</strong> they <strong>studying</strong> English?
                </li>
                <li>
                  <strong>Am</strong> I <strong>interrupting</strong> you?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Формы глагола TO BE */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            🔷 Формы глагола TO BE в Present Continuous
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              Глагол <strong>to be</strong> изменяется по лицам в Present
              Continuous:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">I</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  am
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I am working
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">he, she, it</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  is
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  She is reading
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">you, we, they</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  are
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  They are studying
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицание</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  am not / isn't / aren't
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  He isn't sleeping
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Сокращения</div>
                <div className="text-lg font-bold text-teal-600 dark:text-teal-400">
                  I'm, he's, they're
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I'm working, he's playing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Правила добавления -ing */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            📝 Правила добавления окончания -ING
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <p className="dark:text-bgLight/70 mb-4">
              При добавлении окончания <strong>-ing</strong> к глаголам
              действуют особые правила:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  Обычные глаголы
                </h4>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  Просто добавляем -ing
                </p>
                <div className="font-mono text-sm space-y-1">
                  <div>work → working</div>
                  <div>play → playing</div>
                  <div>read → reading</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  Глаголы на -e
                </h4>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  Убираем -e, добавляем -ing
                </p>
                <div className="font-mono text-sm space-y-1">
                  <div>write → writing</div>
                  <div>take → taking</div>
                  <div>dance → dancing</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  Глаголы CVC*
                </h4>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  Удваиваем последнюю согласную
                </p>
                <div className="font-mono text-sm space-y-1">
                  <div>run → running</div>
                  <div>swim → swimming</div>
                  <div>get → getting</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  Глаголы на -ie
                </h4>
                <p className="text-sm dark:text-bgLight/70 mb-2">-ie → -ying</p>
                <div className="font-mono text-sm space-y-1">
                  <div>lie → lying</div>
                  <div>die → dying</div>
                  <div>tie → tying</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-xs dark:text-bgLight/70 italic">
                *CVC = согласная-гласная-согласная, где ударение падает на
                последний слог
              </p>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Present Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  Момент речи
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    now
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    right now
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    at the moment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    at present
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    currently
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  Текущий период
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    today
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    this week/month/year
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    these days
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    nowadays
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for the time being
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  Будущие планы
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    next week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    this evening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    on Sunday
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    in the future
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            ⚠️ Глаголы состояния (Stative Verbs)
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              <strong>Глаголы состояния</strong> обычно не используются в
              Continuous временах, так как они описывают состояния, а не
              действия. Однако некоторые из них могут использоваться в
              Continuous с изменением значения:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Обычно НЕ используются в Continuous
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      I <strong>am knowing</strong> the answer. → I{" "}
                      <strong>know</strong> the answer.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      She <strong>is liking</strong> chocolate. → She{" "}
                      <strong>likes</strong> chocolate.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      They <strong>are having</strong> a car. → They{" "}
                      <strong>have</strong> a car.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      He <strong>is understanding</strong> the lesson. → He{" "}
                      <strong>understands</strong> the lesson.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Могут менять значение в Continuous
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      I <strong>have</strong> a car. (владею) vs I{" "}
                      <strong>am having</strong> lunch. (ем)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      He <strong>thinks</strong> it's good. (считает) vs He{" "}
                      <strong>is thinking</strong> about you. (думает)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      It <strong>tastes</strong> good. (имеет вкус) vs She{" "}
                      <strong>is tasting</strong> the soup. (пробует)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      I <strong>see</strong> the problem. (понимаю) vs I{" "}
                      <strong>am seeing</strong> my doctor. (встречаюсь)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с Present Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            ⚖️ Сравнение Present Continuous и Present Simple
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-teal-600 dark:bg-teal-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Present Continuous</th>
                  <th className="p-4 text-left">Present Simple</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Основное значение</td>
                  <td className="p-4">Действие в процессе, сейчас</td>
                  <td className="p-4">Регулярное действие, факт</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">am/is/are + Ving</td>
                  <td className="p-4 font-mono">V1 / V1+s</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I am reading a book now.</td>
                  <td className="p-4">I read books every day.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Сигнальные слова</td>
                  <td className="p-4">now, at the moment, currently</td>
                  <td className="p-4">always, usually, every day</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Временной период</td>
                  <td className="p-4">Временный, ограниченный</td>
                  <td className="p-4">Постоянный, неограниченный</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                Present Continuous используется для:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Действий, происходящих прямо сейчас</li>
                <li>• Временных ситуаций и действий</li>
                <li>• Изменяющихся ситуаций</li>
                <li>• Заранее запланированных событий</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Present Simple используется для:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Постоянных состояний и фактов</li>
                <li>• Регулярных действий и привычек</li>
                <li>• Расписаний и программ</li>
                <li>• Общеизвестных истин</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Будущие запланированные события
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Present Continuous используется для действий, которые уже
                запланированы и обязательно произойдут в ближайшем будущем:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    I <strong>am meeting</strong> my friends tonight.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    We <strong>are flying</strong> to Paris next week.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    She <strong>is starting</strong> her new job on Monday.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Раздражающие привычки
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                С наречиями <strong>always, constantly, forever</strong> для
                выражения раздражения или удивления:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    He <strong>is always complaining</strong> about everything!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    You <strong>are constantly interrupting</strong> me!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    She <strong>is forever losing</strong> her keys.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400 pl-4">
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
                    I <strong>am work</strong> now.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>is watch</strong> TV at the moment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>are play</strong> football now.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>are have</strong> a meeting tomorrow.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He <strong>is wanting</strong> some coffee.
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
                    I <strong>am working</strong> now.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>is watching</strong> TV at the moment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>are playing</strong> football now.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>are having</strong> a meeting tomorrow.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He <strong>wants</strong> some coffee.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Present_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>am/is/are + Ving</strong> для действий
                    сейчас
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">
                    •
                  </span>
                  <span>
                    Помните правила добавления окончания <strong>-ing</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">
                    •
                  </span>
                  <span>
                    Глаголы состояния обычно <strong>не используются</strong> в
                    Continuous
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте для{" "}
                    <strong>запланированных будущих событий</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу между <strong>Present Continuous</strong> и{" "}
                    <strong>Present Simple</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Present Continuous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю правила добавления -ing к глаголам</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Present Simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю основные сигнальные слова</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню про глаголы состояния</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-teal-200 dark:border-teal-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Описывайте действия, которые происходят
              вокруг вас прямо сейчас, используя Present Continuous. Например:
              "I am sitting in a chair", "The clock is ticking", "My friend is
              texting me". Такая практика поможет автоматически использовать это
              время!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
