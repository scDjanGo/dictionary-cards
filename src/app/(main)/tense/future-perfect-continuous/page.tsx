import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Future_Perfect_Continuous from "@/pages-components/tense/future-perfcet-continuous/Practice_Future_Perfect_Continuous";

export default function Future_Perfect_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px] dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-purple-600 dark:text-purple-400">
            Future Perfect Continuous: Полное руководство
          </h1>
          <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Future Perfect Continuous</strong> — это время, которое
            описывает действие, которое начнется в будущем, будет продолжаться в
            течение некоторого времени и все еще будет происходить в
            определенный момент в будущем.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Когда использовать Future Perfect Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Длительные действия</strong> до определенного
                    момента в будущем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Подчеркивание продолжительности</strong> действия
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действия в процессе</strong> в конкретный будущий
                    момент
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Результат длительного процесса</strong> к
                    определенному времени
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Подчеркивание процесса</strong>, а не результата
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
                  <p className="font-medium">Длительное действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By 2025, I <strong>will have been living</strong> here for
                    10 years.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Процесс к моменту:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    At 8 PM, we <strong>will have been driving</strong> for 6
                    hours.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">
                    Подчеркивание продолжительности:
                  </p>
                  <p className="text-sm dark:text-bgLight/70">
                    Next month, she <strong>will have been working</strong> here
                    for 5 years.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Действие в процессе:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By the time you arrive, I{" "}
                    <strong>will have been waiting</strong> for 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🧱 Формулы образования Future Perfect Continuous
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
                  Subject + will have been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>will have been studying</strong> for 3 hours by 6
                  PM.
                </li>
                <li>
                  She <strong>will have been working</strong> here for 5 years
                  next month.
                </li>
                <li>
                  They <strong>will have been traveling</strong> for 2 weeks by
                  tomorrow.
                </li>
                <li>
                  We <strong>will have been waiting</strong> for an hour when
                  the bus comes.
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
                  Subject + will not have been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>will not have been studying</strong> for long when
                  you arrive.
                </li>
                <li>
                  She <strong>won't have been working</strong> here for long by
                  December.
                </li>
                <li>
                  They <strong>will not have been living</strong> there for a
                  year yet.
                </li>
                <li>
                  We <strong>won't have been waiting</strong> long by the time
                  they come.
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
                  Will + Subject + have been + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Will</strong> you <strong>have been studying</strong>{" "}
                  long by the time I come?
                </li>
                <li>
                  <strong>Will</strong> she <strong>have been working</strong>{" "}
                  here for 10 years by 2030?
                </li>
                <li>
                  <strong>Will</strong> they{" "}
                  <strong>have been traveling</strong> for a month by next week?
                </li>
                <li>
                  <strong>Will</strong> we <strong>have been waiting</strong>{" "}
                  long when the show starts?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Сокращенные формы */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🔤 Сокращённые формы
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <p className="dark:text-bgLight/70 mb-4">
              В разговорной речи часто используются сокращённые формы:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                  Полная форма → Сокращение
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex justify-between">
                    <span>I will have been</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      → I'll have been
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>you will have been</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      → you'll have been
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>he will have been</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      → he'll have been
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>we will have been</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      → we'll have been
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>they will have been</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      → they'll have been
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>will not have been</span>
                    <span className="font-mono text-red-600 dark:text-red-400">
                      → won't have been
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                  Примеры в контексте
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>I'll have been living</strong> here for 5 years
                      next month.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>She'll have been working</strong> on this project
                      for 2 weeks by Friday.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>We'll have been waiting</strong> for an hour when
                      the train arrives.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      They <strong>won't have been studying</strong> long by the
                      time we get there.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Конструкция сравнения */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            ⚖️ Future Perfect Continuous vs Future Perfect
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              Важно понимать разницу между Future Perfect Continuous и Future
              Perfect:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-purple-600 dark:bg-purple-700 text-white">
                  <tr>
                    <th className="p-3 text-left">Аспект</th>
                    <th className="p-3 text-left">Future Perfect Continuous</th>
                    <th className="p-3 text-left">Future Perfect</th>
                  </tr>
                </thead>
                <tbody className="dark:text-bgLight/70">
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-3 font-semibold">Акцент</td>
                    <td className="p-3">
                      На продолжительности и процессе действия
                    </td>
                    <td className="p-3">На результате завершенного действия</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-3 font-semibold">Примеры</td>
                    <td className="p-3">
                      <div>
                        By 5 PM, I <strong>will have been working</strong> for 8
                        hours.
                      </div>
                      <div>(подчеркивается процесс работы)</div>
                    </td>
                    <td className="p-3">
                      <div>
                        By 5 PM, I <strong>will have finished</strong> the
                        report.
                      </div>
                      <div>(подчеркивается завершение)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Использование</td>
                    <td className="p-3">
                      Длительные действия, подчеркивание процесса
                    </td>
                    <td className="p-3">
                      Завершенные действия, подчеркивание результата
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Future Perfect Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Указание времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    by + время (by 5 PM, by tomorrow)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    by then
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    by the time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    when
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    before
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Продолжительность
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for + период времени
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for 5 years/hours/days
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    all day/week/month
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    the whole time
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Будущие моменты
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    next year/month/week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    in 2030, in 5 years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    at this time tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    by the end of...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Подчеркивание продолжительности
              </h3>
              <ul className="space-y-3 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    By December, we <strong>will have been living</strong> in
                    this house for 20 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    At midnight, I <strong>will have been studying</strong> for
                    6 hours straight.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Next week, she <strong>will have been working</strong> on
                    this project for 3 months.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    By the time he arrives, they{" "}
                    <strong>will have been traveling</strong> for 12 hours.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Ожидание и процесс
              </h3>
              <ul className="space-y-3 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    When you call, I <strong>will have been waiting</strong> for
                    your call all day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    By the time the results come out, we{" "}
                    <strong>will have been anticipating</strong> them for weeks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    At 8 PM, he <strong>will have been practicing</strong> the
                    piano for 2 hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    When the guests arrive, I{" "}
                    <strong>will have been cooking</strong> for 3 hours.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Сравнение с другими будущими временами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            ⚖️ Сравнение с другими способами выражения будущего
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-purple-600 dark:bg-purple-700 text-white">
                <tr>
                  <th className="p-4 text-left">Время</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-purple-50 dark:bg-purple-900/20">
                  <td className="p-4 font-semibold">
                    Future Perfect Continuous
                  </td>
                  <td className="p-4">
                    Длительное действие до момента в будущем
                  </td>
                  <td className="p-4 font-mono">will have been + Ving</td>
                  <td className="p-4">
                    By 5 PM, I will have been working for 8 hours.
                  </td>
                  <td className="p-4">
                    Подчеркивание продолжительности процесса
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Future Perfect</td>
                  <td className="p-4">
                    Завершенное действие к моменту в будущем
                  </td>
                  <td className="p-4 font-mono">will have + V3</td>
                  <td className="p-4">
                    By 5 PM, I will have finished the report.
                  </td>
                  <td className="p-4">
                    Подчеркивание результата завершенного действия
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900/20">
                  <td className="p-4 font-semibold">Future Continuous</td>
                  <td className="p-4">Действие в процессе в будущий момент</td>
                  <td className="p-4 font-mono">will be + Ving</td>
                  <td className="p-4">At 5 PM, I will be working.</td>
                  <td className="p-4">Действие в конкретный будущий момент</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Future Simple</td>
                  <td className="p-4">
                    Факты, предсказания, спонтанные решения
                  </td>
                  <td className="p-4 font-mono">will + V1</td>
                  <td className="p-4">I will work tomorrow.</td>
                  <td className="p-4">Общие утверждения о будущем</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
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
                    I <strong>will have being working</strong> here for 5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>will has been studying</strong> for 3 hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>will have been work</strong> here for long.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>will have been waited</strong> for an hour.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    By tomorrow, I <strong>will be working</strong> for 8 hours.
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
                    I <strong>will have been working</strong> here for 5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>will have been studying</strong> for 3 hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>will have been working</strong> here for long.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>will have been waiting</strong> for an hour.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    By tomorrow, I <strong>will have been working</strong> for 8
                    hours.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Future_Perfect_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">
                    •
                  </span>
                  <span>
                    Используем <strong>will have been + Ving</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">
                    •
                  </span>
                  <span>
                    Подчеркивает <strong>продолжительность</strong> действия
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">
                    •
                  </span>
                  <span>
                    Показывает действие, которое{" "}
                    <strong>все еще продолжается</strong> в будущем моменте
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">
                    •
                  </span>
                  <span>
                    Часто используется с <strong>by...</strong> и{" "}
                    <strong>for...</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">
                    •
                  </span>
                  <span>
                    Не используется с <strong>stative verbs</strong> (know,
                    like, have и др.)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать утверждения, отрицания и вопросы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Future Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать это время</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню основные сигнальные слова</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Избегаю типичных ошибок</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, составляя предложения о
              своих долгосрочных планах и проектах. Например: "By next year, I
              will have been...", "In 5 years, I will have been...". Это поможет
              естественно использовать Future Perfect Continuous в речи!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
