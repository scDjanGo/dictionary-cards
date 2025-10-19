import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Past_Simple from "@/pages-components/tense/past-simple/Practice_Past_Simple";

export default function Past_Simple_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold  text-blueCl ">
            Past Simple: Полное руководство по простому прошедшему времени
          </h1>
          <div className="w-24 h-1 bg-color-blueCl mx-auto"></div>
          <p className="text-xl  dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Past Simple</strong> — это фундаментальное время английского
            языка, которое используется для описания завершённых действий в
            прошлом. Освоив его, вы сможете рассказывать о событиях, которые уже
            произошли.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-color-blueCl mb-3">
                Когда использовать Past Simple?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Завершённые действия</strong> в определённое время в
                    прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Последовательность событий</strong> в рассказе
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Прошлые привычки</strong> и регулярные действия
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Факты и состояния</strong>, которые были верны в
                    прошлом
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-color-blueCl mb-3">
                Примеры использования
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Завершённое действие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>finished</strong> work at 6 PM yesterday.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Последовательность событий:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>woke up</strong>, <strong>brushed</strong> my
                    teeth, and <strong>went</strong> to work.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Прошлая привычка:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She <strong>always</strong> <strong>walked</strong> to
                    school when she was young.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            🧱 Формулы образования Past Simple
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Утверждение */}
            <div className="bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-green-600">
                  Утверждение
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">Subject + Verb (V2)</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>worked</strong> yesterday.
                </li>
                <li>
                  She <strong>went</strong> to the store.
                </li>
                <li>
                  They <strong>played</strong> football.
                </li>
              </ul>
            </div>

            {/* Отрицание */}
            <div className="bg-white dark:bg-gray-800 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ✗
                </div>
                <h3 className="text-xl font-bold text-red-600">Отрицание</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">
                  Subject + did not (didn't) + Verb (V1)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>didn't work</strong> yesterday.
                </li>
                <li>
                  She <strong>didn't go</strong> to the store.
                </li>
                <li>
                  They <strong>didn't play</strong> football.
                </li>
              </ul>
            </div>

            {/* Вопрос */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  ?
                </div>
                <h3 className="text-xl font-bold text-blue-600">Вопрос</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">
                  Did + Subject + Verb (V1)?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Did</strong> you <strong>work</strong> yesterday?
                </li>
                <li>
                  <strong>Did</strong> she <strong>go</strong> to the store?
                </li>
                <li>
                  <strong>Did</strong> they <strong>play</strong> football?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Подробно о глаголах с таблицей */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            📘 Правильные и неправильные глаголы
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl mb-6">
            <p className="dark:text-bgLight/70">
              <strong>Важно:</strong> В Past Simple все глаголы (кроме{" "}
              <strong>be</strong>) не изменяются по лицам. Форма глагола
              одинакова для всех подлежащих: I worked, you worked, he worked, we
              worked, they worked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Правильные глаголы */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-600">
                Правильные глаголы
              </h3>
              <p className="dark:text-bgLight/70">
                Образуются путём добавления окончания{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  -ed
                </code>{" "}
                к основе глагола.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-500 text-white">
                      <th className="p-3 text-left">Infinitive (V1)</th>
                      <th className="p-3 text-left">Past Simple (V2)</th>
                      <th className="p-3 text-left">Translation</th>
                    </tr>
                  </thead>
                  <tbody className="dark:text-bgLight/70">
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">work</td>
                      <td className="p-3">worked</td>
                      <td className="p-3">работать</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">play</td>
                      <td className="p-3">played</td>
                      <td className="p-3">играть</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">live</td>
                      <td className="p-3">lived</td>
                      <td className="p-3">жить</td>
                    </tr>
                    <tr>
                      <td className="p-3">study</td>
                      <td className="p-3">studied</td>
                      <td className="p-3">учиться</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Неправильные глаголы */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-600">
                Неправильные глаголы
              </h3>
              <p className="dark:text-bgLight/70">
                Имеют уникальные формы, которые нужно запомнить. В английском
                языке около 200+ неправильных глаголов.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-red-500 text-white">
                      <th className="p-3 text-left">Infinitive (V1)</th>
                      <th className="p-3 text-left">Past Simple (V2)</th>
                      <th className="p-3 text-left">Translation</th>
                    </tr>
                  </thead>
                  <tbody className="dark:text-bgLight/70">
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">go</td>
                      <td className="p-3">went</td>
                      <td className="p-3">идти</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">see</td>
                      <td className="p-3">saw</td>
                      <td className="p-3">видеть</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <td className="p-3">take</td>
                      <td className="p-3">took</td>
                      <td className="p-3">брать</td>
                    </tr>
                    <tr>
                      <td className="p-3">write</td>
                      <td className="p-3">wrote</td>
                      <td className="p-3">писать</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Глагол BE отдельно */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            ⭐ Особый случай: глагол BE
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl">
            <p className="dark:text-bgLight/70 mb-4">
              Глагол <strong>be</strong> (быть) — единственный глагол, который
              имеет разные формы для разных лиц в Past Simple:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">I, he, she, it</div>
                <div className="text-2xl font-bold text-purple-600">was</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I was happy
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">you, we, they</div>
                <div className="text-2xl font-bold text-purple-600">were</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  They were here
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицание</div>
                <div className="text-lg font-bold text-purple-600">
                  wasn't / weren't
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  She wasn't late
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Орфографические правила с примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            📝 Правила орфографии для правильных глаголов
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-color-blueCl mb-2">
                Обычные глаголы
              </h4>
              <p className="text-sm dark:text-bgLight/70 mb-2">
                Просто добавляем -ed
              </p>
              <div className="font-mono text-sm space-y-1">
                <div>work → worked</div>
                <div>play → played</div>
                <div>look → looked</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-color-blueCl mb-2">
                Глаголы на -e
              </h4>
              <p className="text-sm dark:text-bgLight/70 mb-2">
                Добавляем только -d
              </p>
              <div className="font-mono text-sm space-y-1">
                <div>live → lived</div>
                <div>like → liked</div>
                <div>dance → danced</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-color-blueCl mb-2">
                Глаголы на согласную + y
              </h4>
              <p className="text-sm dark:text-bgLight/70 mb-2">y → i + ed</p>
              <div className="font-mono text-sm space-y-1">
                <div>study → studied</div>
                <div>carry → carried</div>
                <div>try → tried</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-color-blueCl mb-2">
                Удвоение согласной
              </h4>
              <p className="text-sm dark:text-bgLight/70 mb-2">CVC правило</p>
              <div className="font-mono text-sm space-y-1">
                <div>stop → stopped</div>
                <div>plan → planned</div>
                <div>refer → referred</div>
              </div>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-white dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-2xl">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Past Simple:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-color-blueCl mb-2">Время</h4>
                <ul className="space-y-1 text-sm dark:text-bgLight/70">
                  <li>yesterday</li>
                  <li>last night</li>
                  <li>this morning</li>
                  <li>the day before yesterday</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-color-blueCl mb-2">
                  Периоды
                </h4>
                <ul className="space-y-1 text-sm dark:text-bgLight/70">
                  <li>last week/month/year</li>
                  <li>a week/month/year ago</li>
                  <li>in 1999, in 2020</li>
                  <li>during the summer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-color-blueCl mb-2">
                  Наречия
                </h4>
                <ul className="space-y-1 text-sm dark:text-bgLight/70">
                  <li>then</li>
                  <li>when</li>
                  <li>just now</li>
                  <li>already</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-color-blueCl mb-2">Другие</h4>
                <ul className="space-y-1 text-sm dark:text-bgLight/70">
                  <li>the other day</li>
                  <li>once upon a time</li>
                  <li>in those days</li>
                  <li>back then</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение времен с деталями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            ⚖️ Сравнение с другими прошедшими временами
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-blueCl text-bgLight">
                <tr>
                  <th className="p-4 text-left">Время</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-blue-50/50 dark:bg-blue-900/20">
                  <td className="p-4 font-semibold">Past Simple</td>
                  <td className="p-4">Завершённое действие в прошлом</td>
                  <td className="p-4 font-mono">V2 / did + V1</td>
                  <td className="p-4">I visited Paris last year.</td>
                  <td className="p-4">Факт, последовательность событий</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Past Continuous</td>
                  <td className="p-4">Действие в процессе</td>
                  <td className="p-4 font-mono">was/were + Ving</td>
                  <td className="p-4">I was watching TV at 8 PM.</td>
                  <td className="p-4">
                    Длительное действие, прерванное действие
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-green-50/50 dark:bg-green-900/20">
                  <td className="p-4 font-semibold">Past Perfect</td>
                  <td className="p-4">Действие до другого прошлого действия</td>
                  <td className="p-4 font-mono">had + V3</td>
                  <td className="p-4">I had finished when he arrived.</td>
                  <td className="p-4">
                    Предшествование, завершённость до момента
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Present Perfect</td>
                  <td className="p-4">Связь прошлого с настоящим</td>
                  <td className="p-4 font-mono">have/has + V3</td>
                  <td className="p-4">I have visited Paris.</td>
                  <td className="p-4">Опыт, результат, неопределённое время</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-color-blueCl border-l-4 border-color-blueCl pl-4">
            🚫 Распространённые ошибки
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-red-600 mb-4">
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
                    She <strong>didn't went</strong> to school.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    We <strong>was</strong> at home.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Did you <strong>played</strong> football?
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-green-600 mb-4">
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
                    She <strong>didn't go</strong> to school.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    We <strong>were</strong> at home.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Did you <strong>play</strong> football?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Past_Simple />

        {/* Итоги с чеклистом */}
        <section className="bg-gradient-to-br from-color-blueCl/10 to-purple-500/10 dark:from-white/10 dark:to-white/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-color-blueCl mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-color-blueCl mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-color-blueCl mr-2">•</span>
                  <span>
                    Past Simple описывает <strong>завершённые</strong> действия
                    в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-blueCl mr-2">•</span>
                  <span>
                    Используйте <strong>did/didn't</strong> для вопросов и
                    отрицаний
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-blueCl mr-2">•</span>
                  <span>
                    После <strong>did/didn't</strong> глагол всегда в{" "}
                    <strong>первой форме</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-blueCl mr-2">•</span>
                  <span>
                    Глагол <strong>be</strong> имеет формы{" "}
                    <strong>was/were</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-color-blueCl mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Знаю разницу между правильными и неправильными глаголами
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать утверждения, отрицания и вопросы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Понимаю, когда использовать Past Simple вместо других времён
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю основные сигнальные слова</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь ежедневно! Составляйте
              предложения о том, что вы делали вчера, на прошлой неделе или в
              прошлом году. Регулярная практика — ключ к успеху!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}
