import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Past_Perfect_Continuous from "@/pages-components/tense/past-perfect-continuous/Practice_Past_Perfect_Continuous";

export default function Past_Perfect_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-cyan-600 dark:text-cyan-400">
            Past Perfect Continuous: Полное руководство по прошедшему
            совершенному продолженному времени
          </h1>
          <div className="w-24 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Past Perfect Continuous</strong> — это время, которое
            описывает действия, которые начались в прошлом, продолжались в
            течение некоторого времени и всё ещё происходили или только что
            завершились к определённому моменту в прошлом.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800">
              <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                Когда использовать Past Perfect Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Длительное действие до другого действия</strong> в
                    прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Причина состояния или действия</strong> в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Подчёркивание продолжительности</strong> действия
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действие, прерванное другим</strong> действием
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Временные ситуации</strong> в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Раздражающие привычки</strong> в прошлом
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
                  <p className="font-medium">Длительное действие до момента:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>had been waiting</strong> for 2 hours when he
                    finally arrived.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Причина состояния:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She was tired because she <strong>had been working</strong>{" "}
                    all day.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Прерванное действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    They <strong>had been playing</strong> football when it
                    started raining.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">
                    Подчёркивание продолжительности:
                  </p>
                  <p className="text-sm dark:text-bgLight/70">
                    He <strong>had been studying</strong> English for 5 years
                    before he moved to London.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Раздражающая привычка:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She <strong>had been complaining</strong> about everything
                    for weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            🧱 Формулы образования Past Perfect Continuous
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
                  Subject + had been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>had been waiting</strong> for an hour.
                </li>
                <li>
                  She <strong>had been studying</strong> all night.
                </li>
                <li>
                  They <strong>had been living</strong> there for years.
                </li>
                <li>
                  We <strong>had been working</strong> on the project.
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
                  Subject + hadn't been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>hadn't been sleeping</strong> well.
                </li>
                <li>
                  She <strong>hadn't been feeling</strong> well.
                </li>
                <li>
                  They <strong>hadn't been practicing</strong> regularly.
                </li>
                <li>
                  We <strong>hadn't been waiting</strong> long.
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
                  Had + Subject + been + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Had</strong> you <strong>been waiting</strong> long?
                </li>
                <li>
                  <strong>Had</strong> she <strong>been studying</strong> all
                  night?
                </li>
                <li>
                  <strong>Had</strong> they <strong>been living</strong> there
                  long?
                </li>
                <li>
                  <strong>Had</strong> he <strong>been working</strong> on the
                  project?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Структура времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            🔍 Структура Past Perfect Continuous
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Компоненты времени
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="text-lg font-mono text-cyan-600 dark:text-cyan-400">
                      had + been + Ving
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>вспомогательный глагол</span>
                      <span className="text-green-500">had</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>маркер совершенного времени</span>
                      <span className="text-blue-500">been</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>основной глагол</span>
                      <span className="text-purple-500">Ving</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>Had</strong> не изменяется по лицам
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>Been</strong> всегда в одной форме
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Основной глагол всегда с <strong>-ing</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Всегда указывается <strong>продолжительность</strong>
                    </span>
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
                      <span>I had been</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">
                        → I'd been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>You had been</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">
                        → You'd been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>He had been</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">
                        → He'd been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>We had been</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">
                        → We'd been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>They had been</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">
                        → They'd been
                      </span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>had not been</span>
                      <span className="font-mono">→ hadn't been</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I'd been waiting = I had been waiting
                  </p>
                  <p className="text-xs font-mono">
                    She hadn't been sleeping = She had not been sleeping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For и Since */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            📅 FOR и SINCE в Past Perfect Continuous
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                  FOR
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-4">
                  указывает на ПРОДОЛЖИТЕЛЬНОСТЬ действия
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>for 2 hours</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      2 часа
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for 3 years</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      3 года
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for a long time</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      долгое время
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for ages</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      целую вечность
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I had been studying <strong>for 3 hours</strong>.
                  </p>
                </div>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                  SINCE
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-4">
                  указывает на НАЧАЛЬНУЮ ТОЧКУ действия
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>since 9 o'clock</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      с 9 часов
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since Monday</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      с понедельника
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since 2015</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      с 2015 года
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since I was a child</span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      с детства
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I had been waiting <strong>since 2 PM</strong>.
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

        {/* Past Perfect Continuous + Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            ⚡ Past Perfect Continuous + Past Simple
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              Past Perfect Continuous часто используется вместе с Past Simple
              для описания ситуации, когда длительное действие было прервано
              кратким действием или происходило до другого действия:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Структуры предложений
                </h4>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Perfect Continuous + when + Past Simple
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    I <strong>had been waiting</strong> for an hour when he{" "}
                    <strong>arrived</strong>.
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Simple + because + Past Perfect Continuous
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    She <strong>was tired</strong> because she{" "}
                    <strong>had been working</strong> all day.
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    By the time + Past Simple, Past Perfect Continuous
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    By the time we <strong>arrived</strong>, they{" "}
                    <strong>had been waiting</strong> for hours.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Логическая последовательность
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold">
                      Past Perfect Continuous
                    </div>
                    <div className="text-sm">(длительное действие)</div>
                    <div className="text-2xl">↓</div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold">
                      Past Simple
                    </div>
                    <div className="text-sm">(краткое действие)</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Past Perfect Continuous показывает{" "}
                      <strong>длительное действие</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Past Simple показывает{" "}
                      <strong>краткое завершающее действие</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Длительное действие обычно <strong>прерывается</strong>{" "}
                      кратким
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с Past Perfect */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            ⚖️ Сравнение Past Perfect Continuous и Past Perfect
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-cyan-600 dark:bg-cyan-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Past Perfect Continuous</th>
                  <th className="p-4 text-left">Past Perfect</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Основной акцент</td>
                  <td className="p-4">Продолжительность и процесс действия</td>
                  <td className="p-4">Завершённость и результат действия</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">had been + Ving</td>
                  <td className="p-4 font-mono">had + V3</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I had been reading for 2 hours.</td>
                  <td className="p-4">I had read the book.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Вопрос</td>
                  <td className="p-4">How long had you been reading?</td>
                  <td className="p-4">Had you read the book?</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Результат</td>
                  <td className="p-4">Подчёркивает процесс чтения</td>
                  <td className="p-4">Подчёркивает факт прочтения</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Когда использовать</td>
                  <td className="p-4">Важна продолжительность действия</td>
                  <td className="p-4">Важен результат действия</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                Past Perfect Continuous используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Важна продолжительность действия</li>
                <li>• Действие продолжалось до момента в прошлом</li>
                <li>• Нужно объяснить причину состояния</li>
                <li>• Действие было прервано другим действием</li>
                <li>• Говорим о временных ситуациях в прошлом</li>
              </ul>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                Past Perfect используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Важен результат действия</li>
                <li>• Действие завершилось до момента в прошлом</li>
                <li>• Нужно показать последовательность событий</li>
                <li>• Говорим о завершённых действиях</li>
                <li>• Используем в косвенной речи</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            ⚠️ Глаголы состояния в Past Perfect Continuous
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
            <p className="dark:text-bgLight/70 mb-4">
              Как и в других Continuous временах,{" "}
              <strong>глаголы состояния</strong> обычно не используются в Past
              Perfect Continuous:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                  Неправильно
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      I <strong>had been knowing</strong> him for years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      She <strong>had been liking</strong> chocolate since
                      childhood.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      They <strong>had been having</strong> a car for 2 years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      He <strong>had been understanding</strong> the problem.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                  Правильно
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      I <strong>had known</strong> him for years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      She <strong>had liked</strong> chocolate since childhood.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      They <strong>had had</strong> a car for 2 years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      He <strong>had understood</strong> the problem.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Исключение:</strong> Некоторые глаголы состояния
                могут использоваться в Continuous с изменением значения.
                Например: "I had been having problems" (у меня были проблемы) vs
                "I had had a car" (у меня была машина).
              </p>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Past Perfect Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                  Продолжительность
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    for
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    since
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    all day
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    all morning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    how long
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    the whole time
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                  Временные указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    when
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    before
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    by the time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    until
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    while
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    as
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                  Другие указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    because
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    so
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    that's why
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    for this reason
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    always (для раздражения)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    constantly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Объяснение прошлого состояния
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Past Perfect Continuous часто используется для объяснения,
                почему кто-то находился в определённом состоянии в прошлом:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "He was tired because he <strong>had been working</strong>{" "}
                    all day."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "Her eyes were red because she{" "}
                    <strong>had been crying</strong>."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "They were wet because they{" "}
                    <strong>had been walking</strong> in the rain."
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Раздражающие привычки в прошлом
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                С наречиями <strong>always, constantly, forever</strong> для
                выражения раздражения о прошлых привычках:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "He <strong>had always been complaining</strong> about
                    everything!"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "She <strong>had constantly been interrupting</strong> me
                    during meetings."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "They <strong>had forever been arriving</strong> late to
                    work."
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
              Временные ситуации в прошлом
            </h3>
            <p className="text-sm dark:text-bgLight/70 mb-3">
              Past Perfect Continuous часто используется для временных ситуаций,
              которые происходили в прошлом и затем изменились:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-teal-600 dark:text-teal-400">
                  Временное проживание
                </p>
                <p className="text-sm">
                  I <strong>had been staying</strong> with my parents while my
                  apartment was being renovated.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-teal-600 dark:text-teal-400">
                  Временная работа
                </p>
                <p className="text-sm">
                  She <strong>had been working</strong> as a waitress until she
                  found a better job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4">
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
                    I <strong>had been work</strong> here for 2 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>had being studying</strong> all day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>had be waiting</strong> for hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>had been live</strong> here since 2015.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He <strong>had been know</strong> her for years.
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
                    I <strong>had been working</strong> here for 2 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>had been studying</strong> all day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>had been waiting</strong> for hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>had been living</strong> here since 2015.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He <strong>had known</strong> her for years.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Past_Perfect_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>had been + Ving</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>
                    Had <strong>не изменяется</strong> по лицам
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>
                    <strong>FOR</strong> + период, <strong>SINCE</strong> +
                    начальная точка
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>
                    Подчёркивает <strong>продолжительность и процесс</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу с <strong>Past Perfect</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    •
                  </span>
                  <span>Глаголы состояния обычно не используются</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Past Perfect Continuous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Past Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать for и since</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу объяснить прошлые состояния</span>
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

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-cyan-200 dark:border-cyan-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, описывая, как долго вы
              занимались различными видами деятельности до определённых моментов
              в прошлом. Например: "By the time I graduated, I had been
              studying...", "When she arrived, I had been waiting...".
              Используйте for и since в своих предложениях!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
