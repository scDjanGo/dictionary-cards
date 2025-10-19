import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Past_Perfect from "@/pages-components/tense/past-perfect/Practice_Past_Perfect";

export default function Past_Perfect_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-rose-600 dark:text-rose-400">
            Past Perfect: Полное руководство по прошедшему совершенному времени
          </h1>
          <div className="w-24 h-1 bg-rose-600 dark:bg-rose-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Past Perfect</strong> — это время, которое описывает
            действие, произошедшее до другого действия в прошлом. Оно
            показывает, какое событие случилось первым в цепочке прошлых
            событий.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            🎯 Основное значение и использование
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-200 dark:border-rose-800">
              <h3 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
                Когда использовать Past Perfect?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Действие до другого действия</strong> в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Причина и следствие</strong> в прошлом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Невыполненные надежды</strong> и ожидания
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Сообщение о прошлых событиях</strong> (косвенная
                    речь)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Условные предложения</strong> третьего типа
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Опыт до определённого момента</strong> в прошлом
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
                  <p className="font-medium">Действие до другого действия:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I <strong>had finished</strong> my work when she arrived.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Причина и следствие:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    He was tired because he <strong>hadn't slept</strong> well.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Невыполненные надежды:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    I wished I <strong>had studied</strong> harder for the exam.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Косвенная речь:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    She said she <strong>had seen</strong> the movie before.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Опыт до момента в прошлом:</p>
                  <p className="text-sm dark:text-bgLight/70">
                    By 2020, I <strong>had visited</strong> 10 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            🧱 Формулы образования Past Perfect
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
                  Subject + had + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>had finished</strong> the report.
                </li>
                <li>
                  She <strong>had seen</strong> that movie before.
                </li>
                <li>
                  They <strong>had already left</strong> when I called.
                </li>
                <li>
                  We <strong>had visited</strong> Paris twice.
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
                  Subject + hadn't + Verb (V3)
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  I <strong>hadn't finished</strong> my work yet.
                </li>
                <li>
                  She <strong>hadn't seen</strong> that movie before.
                </li>
                <li>
                  They <strong>hadn't arrived</strong> by 8 PM.
                </li>
                <li>
                  We <strong>hadn't visited</strong> London before.
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
                  Had + Subject + Verb (V3)?
                </code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>
                  <strong>Had</strong> you <strong>finished</strong> your work?
                </li>
                <li>
                  <strong>Had</strong> she <strong>seen</strong> that movie
                  before?
                </li>
                <li>
                  <strong>Had</strong> they <strong>arrived</strong> by 8 PM?
                </li>
                <li>
                  <strong>Had</strong> he <strong>visited</strong> London
                  before?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особенности глагола HAD */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            🔷 Особенности глагола HAD
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              В Past Perfect используется вспомогательный глагол{" "}
              <strong>had</strong>, который
              <strong> не изменяется</strong> по лицам и числам:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">
                  I, you, he, she, it, we, they
                </div>
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                  had
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I had seen
                </div>
                <div className="text-sm dark:text-bgLight/70">She had gone</div>
                <div className="text-sm dark:text-bgLight/70">
                  They had finished
                </div>
              </div>

              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Сокращения</div>
                <div className="text-lg font-bold text-rose-600 dark:text-rose-400">
                  'd
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I'd seen
                </div>
                <div className="text-sm dark:text-bgLight/70">She'd gone</div>
                <div className="text-sm dark:text-bgLight/70">
                  They'd finished
                </div>
              </div>

              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицания</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  hadn't
                </div>
                <div className="text-sm dark:text-bgLight/70 mt-2">
                  I hadn't seen
                </div>
                <div className="text-sm dark:text-bgLight/70">
                  She hadn't gone
                </div>
                <div className="text-sm dark:text-bgLight/70">
                  They hadn't finished
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Важно:</strong> Не путайте сокращение 'd (had) в Past
                Perfect с сокращением 'd (would) в условных предложениях. "I'd
                seen" = "I had seen", но "I'd see" = "I would see".
              </p>
            </div>
          </div>
        </section>

        {/* Past Perfect + Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            ⚡ Past Perfect + Past Simple
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Past Perfect часто используется вместе с Past Simple для показа
              последовательности событий:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Структуры предложений
                </h4>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Perfect + before + Past Simple
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    I <strong>had finished</strong> my work before she{" "}
                    <strong>arrived</strong>.
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    Past Simple + after + Past Perfect
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    She <strong>called</strong> me after I{" "}
                    <strong>had left</strong> the office.
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-mono text-green-600 dark:text-green-400 mb-2">
                    By the time + Past Simple, Past Perfect
                  </div>
                  <div className="text-xs dark:text-bgLight/70">
                    By the time he <strong>arrived</strong>, I{" "}
                    <strong>had already finished</strong>.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Логическая последовательность
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="text-rose-600 dark:text-rose-400 font-bold">
                      Past Perfect
                    </div>
                    <div className="text-sm">(более раннее действие)</div>
                    <div className="text-2xl">↓</div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold">
                      Past Simple
                    </div>
                    <div className="text-sm">(более позднее действие)</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Past Perfect показывает действие, которое произошло{" "}
                      <strong>первым</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Past Simple показывает действие, которое произошло{" "}
                      <strong>позже</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Наречия времени */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            ⏰ Наречия времени в Past Perfect
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <p className="dark:text-bgLight/70 mb-4">
              С Past Perfect часто используются специальные выражения времени:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  already
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">уже</p>
                <div className="text-xs font-mono">I had already left</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  just
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">только что</p>
                <div className="text-xs font-mono">She had just finished</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  never
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  никогда (до того момента)
                </p>
                <div className="text-xs font-mono">I had never seen it</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  yet
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  ещё не (в отрицаниях)
                </p>
                <div className="text-xs font-mono">He hadn't arrived yet</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  by the time
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">
                  к тому времени, когда
                </p>
                <div className="text-xs font-mono">
                  By the time you called...
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  before
                </div>
                <p className="text-sm dark:text-bgLight/70 mb-2">до того как</p>
                <div className="text-xs font-mono">Before she arrived...</div>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с Past Simple */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            ⚖️ Сравнение Past Perfect и Past Simple
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-rose-600 dark:bg-rose-700 text-white">
                <tr>
                  <th className="p-4 text-left">Аспект</th>
                  <th className="p-4 text-left">Past Perfect</th>
                  <th className="p-4 text-left">Past Simple</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Основное значение</td>
                  <td className="p-4">
                    Действие до другого действия в прошлом
                  </td>
                  <td className="p-4">Завершённое действие в прошлом</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Формула</td>
                  <td className="p-4 font-mono">had + V3</td>
                  <td className="p-4 font-mono">V2 / did + V1</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Пример</td>
                  <td className="p-4">I had finished when she arrived.</td>
                  <td className="p-4">I finished my work yesterday.</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Использование</td>
                  <td className="p-4">Показывает последовательность событий</td>
                  <td className="p-4">Констатирует факт в прошлом</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Сигнальные слова</td>
                  <td className="p-4">before, after, by the time, already</td>
                  <td className="p-4">yesterday, last week, ago, in 2010</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Временная связь</td>
                  <td className="p-4">Относится к более раннему прошлому</td>
                  <td className="p-4">
                    Относится к определённому моменту в прошлом
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                Past Perfect используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Нужно показать, какое действие произошло первым</li>
                <li>• Объяснить причину события в прошлом</li>
                <li>• Рассказать о опыте до определённого момента</li>
                <li>• В косвенной речи для переноса времён</li>
                <li>• В условных предложениях 3 типа</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Past Simple используется когда:
              </h4>
              <ul className="text-sm space-y-1 dark:text-bgLight/70">
                <li>• Действие полностью завершено в прошлом</li>
                <li>• Указано конкретное время действия</li>
                <li>• Перечисляются последовательные события</li>
                <li>• Говорим о прошлых привычках</li>
                <li>• Констатируем факты из прошлого</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            💫 Особые случаи использования
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Косвенная речь (Reported Speech)
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                При переводе прямой речи в косвенную Present Perfect меняется на
                Past Perfect:
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-xs font-mono text-green-600 dark:text-green-400">
                    Прямая речь:
                  </p>
                  <p className="text-sm">
                    "I <strong>have seen</strong> this movie," she said.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-xs font-mono text-rose-600 dark:text-rose-400">
                    Косвенная речь:
                  </p>
                  <p className="text-sm">
                    She said that she <strong>had seen</strong> that movie.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">
                Условные предложения 3 типа
              </h3>
              <p className="text-sm dark:text-bgLight/70 mb-3">
                Past Perfect используется в условных предложениях третьего типа:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-pink-600 dark:text-pink-400">
                  If + Past Perfect, would have + V3
                </p>
                <p className="text-sm mt-2">
                  If I <strong>had studied</strong> harder, I{" "}
                  <strong>would have passed</strong> the exam.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
              С глаголами wish и hope
            </h3>
            <p className="text-sm dark:text-bgLight/70 mb-3">
              Past Perfect используется для выражения сожалений о прошлом:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-orange-600 dark:text-orange-400">
                  I wish + Past Perfect
                </p>
                <p className="text-sm">
                  I wish I <strong>had taken</strong> that job.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-orange-600 dark:text-orange-400">
                  If only + Past Perfect
                </p>
                <p className="text-sm">
                  If only I <strong>had known</strong> the truth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-200 dark:border-rose-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования
              Past Perfect:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
                  Временные указатели
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    before
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    after
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    by the time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    until
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    when
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    as soon as
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
                  Наречия времени
                </h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    already
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    just
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    never
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    yet
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    ever
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    still
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
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
                    by + время
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    by then
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 border-l-4 border-rose-600 dark:border-rose-400 pl-4">
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
                    I <strong>had saw</strong> that movie before.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    She <strong>had went</strong> home when I called.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    When I arrived, they <strong>had ate</strong> dinner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    He told me he <strong>has finished</strong> the work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    I <strong>had been</strong> in London last year.
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
                    I <strong>had seen</strong> that movie before.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    She <strong>had gone</strong> home when I called.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    When I arrived, they <strong>had eaten</strong> dinner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    He told me he <strong>had finished</strong> the work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    I <strong>was</strong> in London last year.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Past_Perfect />

        {/* Итоги с чеклистом */}
        <section className="bg-rose-50 dark:bg-rose-900/20 rounded-2xl p-8 border border-rose-200 dark:border-rose-800">
          <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
                Что нужно помнить:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте <strong>had + V3</strong> для более раннего
                    действия
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Had <strong>не изменяется</strong> по лицам и числам
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте для показа <strong>последовательности</strong>{" "}
                    событий
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Знайте разницу с <strong>Past Simple</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Используйте в <strong>косвенной речи</strong> и условных
                    предложениях
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 dark:text-rose-400 mr-2">
                    •
                  </span>
                  <span>
                    Запомните основные <strong>сигнальные слова</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-rose-600 dark:text-rose-400 mb-3">
                Проверьте себя:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать все формы Past Perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Past Simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать before/after/by the time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу использовать в косвенной речи</span>
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

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-rose-200 dark:border-rose-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, составляя рассказы о
              событиях, которые произошли одно за другим. Например: "When I
              arrived at the party, my friends had already left. Before that,
              they had waited for me for an hour..." Такая практика поможет
              понять логику Past Perfect!
            </p>
          </div>
        </section>

        
                <Back_To_Tense />
      </div>
    </div>
  );
}
