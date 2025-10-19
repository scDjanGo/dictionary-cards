import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Future_Continuous from "@/pages-components/tense/future-continuous/Practice_Future_Continuous";

export default function Future_Continuous_Page() {
  return (
    <div className="min-h-screen rounded-[36px] dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl  max-1040px:text-[28px] font-bold text-indigo-600 dark:text-indigo-400">
            Future Continuous: Полное руководство по будущему продолженному
            времени
          </h1>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Future Continuous</strong> — это время, которое описывает
            действия, которые будут происходить в определённый момент в будущем.
            Оно подчёркивает процесс действия и его длительность в будущем.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Когда использовать Future Continuous?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действие в процессе</strong> в конкретный момент
                    будущего
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Запланированные действия</strong> и события
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Вежливые вопросы</strong> о планах других людей
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Предположения</strong> о текущих действиях в будущем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Непрерывные действия</strong> в определённый период
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
                    This time tomorrow, I <strong>will be flying</strong> to
                    Paris.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Запланированное событие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    We <strong>will be waiting</strong> for you at the airport.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Вежливый вопрос:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    <strong>Will</strong> you <strong>be using</strong> your car
                    tonight?
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Предположение:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    Don't call at 8 PM - he <strong>will be watching</strong>{" "}
                    the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            🧱 Формулы образования Future Continuous
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
                  Subject + will be + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>will be studying</strong> at 8 PM tomorrow.
                </li>
                <li>
                  She <strong>will be working</strong> all day Friday.
                </li>
                <li>
                  They <strong>will be traveling</strong> this time next week.
                </li>
                <li>
                  We <strong>will be celebrating</strong> our anniversary.
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
                  Subject + won't be + Verb-ing
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>won't be working</strong> this weekend.
                </li>
                <li>
                  He <strong>won't be waiting</strong> for us.
                </li>
                <li>
                  They <strong>won't be living</strong> here next year.
                </li>
                <li>
                  We <strong>won't be sleeping</strong> at that time.
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
                  Will + Subject + be + Verb-ing?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Will</strong> you <strong>be studying</strong>{" "}
                  tonight?
                </li>
                <li>
                  <strong>Will</strong> she <strong>be working</strong> late?
                </li>
                <li>
                  <strong>Will</strong> they <strong>be coming</strong> to the
                  party?
                </li>
                <li>
                  <strong>Will</strong> he <strong>be waiting</strong> for us?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особенности образования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            🔍 Особенности образования
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Структура времени
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-2">
                    <div className="text-lg font-mono text-indigo-600 dark:text-indigo-400">
                      will + be + Ving
                    </div>
                    <div className="text-sm dark:text-bgLight/70">
                      вспомогательный глагол
                    </div>
                    <div className="text-sm dark:text-bgLight/70">
                      глагол-связка
                    </div>
                    <div className="text-sm dark:text-bgLight/70">
                      основной глагол с -ing
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
                    <span>Be всегда в одной форме</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Основной глагол всегда с -ing</span>
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
                      <span>I will be</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        → I'll be
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>You will be</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        → You'll be
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>He will be</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        → He'll be
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>We will be</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        → We'll be
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>They will be</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        → They'll be
                      </span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>will not be</span>
                      <span className="font-mono">→ won't be</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с другими будущими временами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            ⚖️ Сравнение с другими способами выражения будущего
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-indigo-600 dark:bg-indigo-700 text-white">
                <tr>
                  <th className="p-4 text-left">Время</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-indigo-50 dark:bg-indigo-900/20">
                  <td className="p-4 font-semibold">Future Continuous</td>
                  <td className="p-4">Действие в процессе в будущем</td>
                  <td className="p-4 font-mono">will be + Ving</td>
                  <td className="p-4">I will be working at 8 PM.</td>
                  <td className="p-4">Конкретный момент в будущем</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Future Simple</td>
                  <td className="p-4">Спонтанные решения, предсказания</td>
                  <td className="p-4 font-mono">will + V1</td>
                  <td className="p-4">I will call you later.</td>
                  <td className="p-4">Мгновенные решения, обещания</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-purple-50 dark:bg-purple-900/20">
                  <td className="p-4 font-semibold">be going to</td>
                  <td className="p-4">Планы, намерения</td>
                  <td className="p-4 font-mono">am/is/are + going to + V1</td>
                  <td className="p-4">I'm going to study.</td>
                  <td className="p-4">Заранее запланированные действия</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Present Continuous</td>
                  <td className="p-4">Твёрдые планы в ближайшем будущем</td>
                  <td className="p-4 font-mono">am/is/are + Ving</td>
                  <td className="p-4">I'm meeting friends tonight.</td>
                  <td className="p-4">Договорённости, фиксированные планы</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Конкретные моменты в будущем */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            ⏰ Конкретные моменты в будущем
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Future Continuous часто используется с указанием конкретного
              времени или периода в будущем:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Выражения времени
                </h4>
                <ul className="space-y-3 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>This time tomorrow</strong>
                      <br />I will be flying to Madrid.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>At 8 PM tonight</strong>
                      <br />
                      We will be having dinner.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>In two hours</strong>
                      <br />
                      They will be watching the movie.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      <strong>When you arrive</strong>
                      <br />I will be waiting for you.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Периоды времени
                </h4>
                <ul className="space-y-3 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>All day tomorrow</strong>
                      <br />
                      She will be working.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>The whole weekend</strong>
                      <br />
                      We will be traveling.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>During the summer</strong>
                      <br />
                      They will be studying for exams.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      <strong>From Monday to Friday</strong>
                      <br />I will be attending the conference.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Вежливые вопросы и предположения */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            💬 Вежливые вопросы и предположения
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Вежливые вопросы о планах
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Future Continuous делает вопросы более вежливыми, так как
                предполагает, что у человека уже есть планы:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "<strong>Will you be using</strong> the computer this
                    evening?"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "<strong>Will you be staying</strong> with us for long?"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "<strong>Will she be needing</strong> a ride to the
                    airport?"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    "<strong>Will they be joining</strong> us for dinner?"
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Предположения о будущем
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Future Continuous используется для предположений о том, что
                происходит или будет происходить:
              </p>
              <ul className="space-y-2 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "Don't call now - he <strong>will be sleeping</strong>."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "This time next year, we <strong>will be living</strong> in
                    a new house."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "I'm sure they <strong>will be wondering</strong> where we
                    are."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    "She <strong>will probably be working</strong> late again."
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Future Continuous:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  Конкретное время
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    at 5 o'clock tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    this time next week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    in two hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    at noon tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    by this time tomorrow
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  Периоды времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    all day tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    the whole evening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    during the weekend
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    throughout the day
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    for the next few hours
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  Другие указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    when you arrive
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    while we are away
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    as soon as I get there
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    by the time you come
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    in the coming days
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            ⚠️ Глаголы состояния в Future Continuous
          </h2>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              Как и в других Continuous временах,{" "}
              <strong>глаголы состояния</strong> обычно не используются в Future
              Continuous:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Неправильно
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      I <strong>will be knowing</strong> the answer tomorrow.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      She <strong>will be liking</strong> the present.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      They <strong>will be having</strong> a big house.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>
                      He <strong>will be understanding</strong> the situation.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  Правильно
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      I <strong>will know</strong> the answer tomorrow.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      She <strong>will like</strong> the present.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      They <strong>will have</strong> a big house.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      He <strong>will understand</strong> the situation.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Исключение:</strong> Некоторые глаголы состояния
                могут использоваться в Continuous с изменением значения.
                Например: "I will be having dinner" (буду ужинать) vs "I will
                have a car" (буду иметь машину).
              </p>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
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
                    I <strong>will be work</strong> tomorrow at 9.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>will being studying</strong> when you come.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    They <strong>will be watch</strong> TV this evening.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>will to be sleeping</strong> at midnight.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He <strong>will be knows</strong> the answer.
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
                    I <strong>will be working</strong> tomorrow at 9.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>will be studying</strong> when you come.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    They <strong>will be watching</strong> TV this evening.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>will be sleeping</strong> at midnight.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He <strong>will know</strong> the answer.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Future_Continuous />

        {/* Итоги с чеклистом */}
        <section className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>will be + Ving</strong> для действий в
                    процессе
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                    •
                  </span>
                  <span>
                    Will <strong>не изменяется</strong> по лицам и числам
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте для <strong>конкретных моментов</strong> в
                    будущем
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                    •
                  </span>
                  <span>
                    Отлично подходит для <strong>вежливых вопросов</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">
                    •
                  </span>
                  <span>Глаголы состояния обычно не используются</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Future Continuous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю разницу с Future Simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю, когда использовать для вежливых вопросов</span>
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

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-indigo-200 dark:border-indigo-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, описывая, что вы будете
              делать в конкретные моменты в будущем. Например: "This time
              tomorrow, I will be...", "At 8 PM tonight, I will be...".
              Используйте Future Continuous для вежливых вопросов о планах
              других людей!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
