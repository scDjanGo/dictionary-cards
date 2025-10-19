import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Future_Perfect from "@/pages-components/tense/future-perfect/page";

export default function Future_Perfect_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-violet-600 dark:text-violet-400">
            Future Perfect: Полное руководство по будущему совершенному времени
          </h1>
          <div className="w-24 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Future Perfect</strong> — это время, которое описывает
            действия, которые будут завершены к определённому моменту в будущем.
            Оно показывает результат действий, которые произойдут до какого-то
            будущего времени.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl border border-violet-200 dark:border-violet-800">
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Когда использовать Future Perfect?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действие завершится</strong> к определённому моменту
                    в будущем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Результат действия</strong> в будущем времени
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Опыт или достижения</strong> к будущему моменту
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Предположения</strong> о завершённых действиях
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Планы и обязательства</strong>, которые будут
                    выполнены
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Продолжительность действия</strong> до будущего
                    момента
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
                  <p className="font-medium">Завершение к моменту:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By next year, I <strong>will have graduated</strong> from
                    university.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Результат в будущем:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    They <strong>will have finished</strong> the project by
                    Friday.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Опыт к моменту:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By 2030, she <strong>will have visited</strong> 20
                    countries.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Предположение:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    He <strong>will have arrived</strong> by now.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Продолжительность:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By May, I <strong>will have lived</strong> here for 5 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            🧱 Формулы образования Future Perfect
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
                  Subject + will have + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>will have finished</strong> by 6 PM.
                </li>
                <li>
                  She <strong>will have completed</strong> the course.
                </li>
                <li>
                  They <strong>will have arrived</strong> by tomorrow.
                </li>
                <li>
                  We <strong>will have moved</strong> to a new house.
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
                  Subject + won't have + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>won't have finished</strong> by then.
                </li>
                <li>
                  She <strong>won't have completed</strong> the work.
                </li>
                <li>
                  They <strong>won't have arrived</strong> yet.
                </li>
                <li>
                  We <strong>won't have moved</strong> by Friday.
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
                  Will + Subject + have + Verb (V3)?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Will</strong> you <strong>have finished</strong> by 6
                  PM?
                </li>
                <li>
                  <strong>Will</strong> she <strong>have completed</strong> the
                  course?
                </li>
                <li>
                  <strong>Will</strong> they <strong>have arrived</strong> by
                  tomorrow?
                </li>
                <li>
                  <strong>Will</strong> he <strong>have moved</strong> by then?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Структура и особенности */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            🔍 Структура Future Perfect
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Компоненты времени
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="text-lg font-mono text-violet-600 dark:text-violet-400">
                      will + have + V3
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>вспомогательный глагол</span>
                      <span className="text-green-500">will</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>маркер совершенного времени</span>
                      <span className="text-blue-500">have</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>основной глагол</span>
                      <span className="text-purple-500">V3 (причастие II)</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Will <strong>не изменяется</strong> по лицам
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Have всегда в одной форме</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Основной глагол всегда в третьей форме</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Сокращённые формы
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>I will have</span>
                      <span className="font-mono text-violet-600 dark:text-violet-400">
                        → I'll have
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>You will have</span>
                      <span className="font-mono text-violet-600 dark:text-violet-400">
                        → You'll have
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>He will have</span>
                      <span className="font-mono text-violet-600 dark:text-violet-400">
                        → He'll have
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>We will have</span>
                      <span className="font-mono text-violet-600 dark:text-violet-400">
                        → We'll have
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>They will have</span>
                      <span className="font-mono text-violet-600 dark:text-violet-400">
                        → They'll have
                      </span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>will not have</span>
                      <span className="font-mono">→ won't have</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I'll have finished = I will have finished
                  </p>
                  <p className="text-xs font-mono">
                    They won't have arrived = They will not have arrived
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ключевые выражения времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            ⏰ Ключевые выражения времени
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Future Perfect всегда используется с указанием момента времени, к
              которому действие будет завершено:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  С предлогом "by"
                </h4>
                <ul className="space-y-3 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>by 5 o'clock</strong>
                      <br />I will have finished by 5 o'clock.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>by tomorrow</strong>
                      <br />
                      She will have arrived by tomorrow.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>by next week</strong>
                      <br />
                      They will have completed it by next week.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>by the end of the year</strong>
                      <br />
                      We will have moved by the end of the year.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Другие выражения
                </h4>
                <ul className="space-y-3 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>by the time</strong>
                      <br />
                      By the time you arrive, I will have left.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>before</strong>
                      <br />I will have finished before the meeting.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>when</strong>
                      <br />
                      When she comes, I will have already eaten.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>in + период времени</strong>
                      <br />
                      In two hours, I will have completed the report.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с другими будущими временами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            ⚖️ Сравнение с другими будущими временами
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-violet-600 dark:bg-violet-700 text-white">
                <tr>
                  <th className="p-4 text-left">Время</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-violet-50 dark:bg-violet-900/20">
                  <td className="p-4 font-semibold">Future Perfect</td>
                  <td className="p-4">
                    Действие завершится к моменту в будущем
                  </td>
                  <td className="p-4 font-mono">will have + V3</td>
                  <td className="p-4">I will have finished by 5 PM.</td>
                  <td className="p-4">Результат к определённому времени</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Future Simple</td>
                  <td className="p-4">Спонтанные решения, предсказания</td>
                  <td className="p-4 font-mono">will + V1</td>
                  <td className="p-4">I will call you later.</td>
                  <td className="p-4">Мгновенные решения, обещания</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900/20">
                  <td className="p-4 font-semibold">Future Continuous</td>
                  <td className="p-4">Действие в процессе в будущем</td>
                  <td className="p-4 font-mono">will be + Ving</td>
                  <td className="p-4">I will be working at 8 PM.</td>
                  <td className="p-4">Процесс в конкретный момент</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Future Perfect Continuous
                  </td>
                  <td className="p-4">
                    Длительное действие до момента в будущем
                  </td>
                  <td className="p-4 font-mono">will have been + Ving</td>
                  <td className="p-4">I will have been working for 5 hours.</td>
                  <td className="p-4">Продолжительность до момента</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Предположения о прошлом из будущего
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Future Perfect может использоваться для предположений о
                действиях, которые уже завершились к моменту в будущем:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "You <strong>will have heard</strong> the news by now."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "They <strong>will have arrived</strong> in Paris by this
                    time."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "He <strong>will have finished</strong> his work by now."
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Опыт и достижения к моменту
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Для описания опыта или достижений, которые будут накоплены к
                будущему моменту:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "By 2025, I <strong>will have worked</strong> here for 10
                    years."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "She <strong>will have visited</strong> 15 countries by next
                    year."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "We <strong>will have read</strong> 50 books by December."
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">
              Временные линии и дедлайны
            </h3>
            <p className="text-sm dark:text-bgLight/70 mb-3">
              Future Perfect идеально подходит для описания сроков и временных
              линий:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-violet-600 dark:text-violet-400">
                  Сейчас
                </span>
                <span className="text-green-600 dark:text-green-400">→</span>
                <span className="text-blue-600 dark:text-blue-400">
                  Завершение действия
                </span>
                <span className="text-green-600 dark:text-green-400">→</span>
                <span className="text-purple-600 dark:text-purple-400">
                  Будущий момент
                </span>
              </div>
              <div className="mt-2 text-center text-xs dark:text-bgLight/70">
                "I will have finished the project <strong>by Friday</strong>"
              </div>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl border border-violet-200 dark:border-violet-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Future Perfect:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                  С предлогом "by"
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by next week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by 5 o'clock
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by the end of
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by then
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                    by this time
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                  Временные периоды
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    in two hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    in a week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    in three years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    when + Present Simple
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    before + время
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    until + время
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                  Другие указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    already
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    just
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    ever (в вопросах)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    never
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    for + период
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    by the time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 border-l-4 border-violet-600 dark:border-violet-400 pl-4">
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
                    I <strong>will have finish</strong> by tomorrow.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>will has completed</strong> the work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>will have went</strong> home by 5 PM.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>will have eat</strong> dinner by then.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    I <strong>will finished</strong> by Friday.
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
                    I <strong>will have finished</strong> by tomorrow.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>will have completed</strong> the work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>will have gone</strong> home by 5 PM.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>will have eaten</strong> dinner by then.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    I <strong>will have finished</strong> by Friday.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Future_Perfect />

        {/* Итоги с чеклистом */}
        <section className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
          <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>will have + V3</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Всегда указывайте <strong>момент завершения</strong> (by...)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Will <strong>не изменяется</strong> по лицам
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Основной глагол всегда в <strong>третьей форме</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте для <strong>результатов и завершения</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 dark:text-violet-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу с <strong>другими будущими временами</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Future Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать by, before, by the time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Future Simple и Continuous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу описать завершение действий к моменту</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю основные сигнальные слова</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню основные неправильные глаголы</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-violet-200 dark:border-violet-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, ставя себе дедлайны и
              описывая, что вы успеете сделать к определённым моментам.
              Например: "By this time next week, I will have...", "By the end of
              the month, I will have...". Это поможет естественно использовать
              Future Perfect в речи!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
