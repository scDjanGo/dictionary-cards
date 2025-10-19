import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Present_Perfect_Continuous from "@/pages-components/tense/present-perfect-continuous/Practice_Present_Perfect_Continuous";

export default function Present_Perfect_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px]  max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-orange-600 dark:text-orange-400">
            Present Perfect Continuous: Полное руководство по настоящему
            совершенному продолженному времени
          </h1>
          <div className="w-24 h-1 bg-orange-600 dark:bg-orange-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Present Perfect Continuous</strong> — это время, которое
            описывает действия, начавшиеся в прошлом и продолжающиеся до
            настоящего момента или недавно завершившиеся. Оно подчёркивает
            продолжительность и процесс действия.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Когда использовать Present Perfect Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>
                      Действия, начавшиеся в прошлом и продолжающиеся
                    </strong>{" "}
                    до сих пор
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Недавно завершившиеся действия</strong> с видимым
                    результатом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Временные действия и ситуации</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Раздражающие или повторяющиеся действия</strong> (с
                    always, constantly)
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
                    <strong>Объяснение текущего состояния</strong> или ситуации
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
                  <p className="font-medium">Действие продолжается:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>have been studying</strong> English for 3 years.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Недавно завершившееся действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She <strong>has been crying</strong> - her eyes are red.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Временная ситуация:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    They <strong>have been living</strong> here since June.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Раздражающее действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    He <strong>has always been complaining</strong> about
                    everything!
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Объяснение состояния:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I'm tired because I <strong>have been working</strong> all
                    day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            🧱 Формулы образования Present Perfect Continuous
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
                  Subject + have/has + been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>have been waiting</strong> for an hour.
                </li>
                <li>
                  She <strong>has been working</strong> here since 2018.
                </li>
                <li>
                  They <strong>have been studying</strong> all morning.
                </li>
                <li>
                  We <strong>have been living</strong> in London for 5 years.
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
                  Subject + haven't/hasn't + been + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>haven't been feeling</strong> well lately.
                </li>
                <li>
                  She <strong>hasn't been sleeping</strong> enough.
                </li>
                <li>
                  They <strong>haven't been practicing</strong> regularly.
                </li>
                <li>
                  We <strong>haven't been waiting</strong> long.
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
                  Have/Has + Subject + been + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Have</strong> you <strong>been waiting</strong> long?
                </li>
                <li>
                  <strong>Has</strong> she <strong>been working</strong> here
                  long?
                </li>
                <li>
                  <strong>Have</strong> they <strong>been studying</strong> all
                  day?
                </li>
                <li>
                  <strong>Has</strong> he <strong>been exercising</strong>{" "}
                  regularly?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Структура времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            🔍 Структура Present Perfect Continuous
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Компоненты времени
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="text-lg font-mono text-orange-600 dark:text-orange-400">
                      have/has + been + Ving
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>вспомогательный глагол</span>
                      <span className="text-green-500">have/has</span>
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
                      <strong>Have</strong> для I/you/we/they
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>Has</strong> для he/she/it
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
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Сокращённые формы
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>I have been</span>
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        → I've been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>You have been</span>
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        → You've been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>He has been</span>
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        → He's been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>We have been</span>
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        → We've been
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>They have been</span>
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        → They've been
                      </span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>have not been</span>
                      <span className="font-mono">→ haven't been</span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>has not been</span>
                      <span className="font-mono">→ hasn't been</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I've been waiting = I have been waiting
                  </p>
                  <p className="text-xs font-mono">
                    She hasn't been sleeping = She has not been sleeping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For и Since */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            📅 FOR и SINCE в Present Perfect Continuous
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
                    <span className="text-orange-600 dark:text-orange-400">
                      2 часа
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for 3 years</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      3 года
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for a long time</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      долгое время
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>for ages</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      целую вечность
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I have been studying <strong>for 3 hours</strong>.
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
                    <span className="text-orange-600 dark:text-orange-400">
                      с 9 часов
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since Monday</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      с понедельника
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since 2015</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      с 2015 года
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>since I was a child</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      с детства
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-xs font-mono">
                    I have been waiting <strong>since 2 PM</strong>.
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

        {/* Сравнение с Present Perfect */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            ⚖️ Сравнение Present Perfect Continuous и Present Perfect
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-orange-600 dark:bg-orange-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Present Perfect Continuous</th>
                  <th className="p-4 text-left">Present Perfect</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Основной акцент</td>
                  <td className="p-4">Продолжительность и процесс действия</td>
                  <td className="p-4">Результат и завершённость действия</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">have/has been + Ving</td>
                  <td className="p-4 font-mono">have/has + V3</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I have been reading this book.</td>
                  <td className="p-4">I have read this book.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Вопрос</td>
                  <td className="p-4">How long have you been reading?</td>
                  <td className="p-4">Have you read this book?</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Результат</td>
                  <td className="p-4">Книга ещё не дочитана</td>
                  <td className="p-4">Книга уже прочитана</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Когда использовать</td>
                  <td className="p-4">
                    Действие продолжается или недавно завершилось
                  </td>
                  <td className="p-4">Действие завершено, важен результат</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Present Perfect Continuous используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Действие началось в прошлом и продолжается</li>
                <li>• Важна продолжительность действия</li>
                <li>• Действие недавно завершилось, виден результат</li>
                <li>• Объясняем текущее состояние или ситуацию</li>
                <li>• Говорим о временных ситуациях</li>
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                Present Perfect используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Действие завершено, важен результат</li>
                <li>• Говорим о жизненном опыте</li>
                <li>• Упоминаем достижения и изменения</li>
                <li>• Действие повторялось несколько раз</li>
                <li>• Говорим о постоянных ситуациях</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            ⚠️ Глаголы состояния в Present Perfect Continuous
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
            <p className="dark:text-bgLight/70 mb-4">
              Как и в других Continuous временах,{" "}
              <strong>глаголы состояния</strong> обычно не используются в
              Present Perfect Continuous:
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
                      I <strong>have been knowing</strong> him for years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      She <strong>has been liking</strong> chocolate since
                      childhood.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      They <strong>have been having</strong> a car for 2 years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      He <strong>has been understanding</strong> the problem.
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
                      I <strong>have known</strong> him for years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      She <strong>has liked</strong> chocolate since childhood.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      They <strong>have had</strong> a car for 2 years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      He <strong>has understood</strong> the problem.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Исключение:</strong> Некоторые глаголы состояния
                могут использоваться в Continuous с изменением значения.
                Например: "I have been having problems" (у меня были проблемы)
                vs "I have a car" (у меня есть машина).
              </p>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Present Perfect Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Продолжительность
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    for
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    since
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    all day
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    all morning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    how long
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    lately
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Недавнее время
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    recently
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    just
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    these days
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    this week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    over the years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for the past few days
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Другие указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    always (для раздражения)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    constantly
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    forever
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    the whole time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    continuously
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    non-stop
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Объяснение текущего состояния
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Present Perfect Continuous часто используется для объяснения,
                почему кто-то выглядит определённым образом или находится в
                определённом состоянии:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "You look tired." - "I <strong>have been working</strong>{" "}
                    all day."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "Why are your hands dirty?" - "I{" "}
                    <strong>have been gardening</strong>."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "Your eyes are red." - "I <strong>have been crying</strong>
                    ."
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Раздражающие привычки
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                С наречиями <strong>always, constantly, forever</strong> для
                выражения раздражения или удивления:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "He <strong>has always been complaining</strong> about
                    everything!"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "You <strong>have constantly been interrupting</strong> me!"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "She <strong>has forever been losing</strong> her keys."
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">
              Временные ситуации
            </h3>
            <p className="text-sm dark:text-bgLight/70 mb-3">
              Present Perfect Continuous часто используется для временных
              ситуаций, которые могут измениться в будущем:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-teal-600 dark:text-teal-400">
                  Временное проживание
                </p>
                <p className="text-sm">
                  I <strong>have been staying</strong> with my parents while my
                  apartment is being renovated.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-teal-600 dark:text-teal-400">
                  Временная работа
                </p>
                <p className="text-sm">
                  She <strong>has been working</strong> as a waitress until she
                  finds a better job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 pl-4">
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
                    I <strong>have been work</strong> here for 2 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>has being studying</strong> all day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>have be waiting</strong> for hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>have been live</strong> here since 2015.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He <strong>has been know</strong> her for years.
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
                    I <strong>have been working</strong> here for 2 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>has been studying</strong> all day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>have been waiting</strong> for hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>have been living</strong> here since 2015.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He <strong>has known</strong> her for years.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Present_Perfect_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>have/has been + Ving</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>
                    Has для he/she/it, <strong>have</strong> для I/you/we/they
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>
                    <strong>FOR</strong> + период, <strong>SINCE</strong> +
                    начальная точка
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>
                    Подчёркивает <strong>продолжительность и процесс</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу с <strong>Present Perfect</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 dark:text-orange-400 mr-2">
                    •
                  </span>
                  <span>Глаголы состояния обычно не используются</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Могу образовать все формы Present Perfect Continuous
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю разницу между have и has</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Present Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать for и since</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу объяснить текущее состояние</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню про глаголы состояния</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, описывая, как долго вы
              занимаетесь различными видами деятельности и объясняя текущие
              состояния. Например: "I have been learning English for...", "I'm
              tired because I have been...". Используйте for и since в своих
              предложениях!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
