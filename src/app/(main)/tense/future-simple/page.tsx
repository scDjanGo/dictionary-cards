import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Future_Simple from "@/pages-components/tense/future-simple/Practice_Future_Simple";

export default function Future_Simple_Page() {
  return (
    <div className="min-h-screen rounded-[36px] dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-purple-600 dark:text-purple-400">
            Future Simple: Полное руководство по простому будущему времени
          </h1>
          <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Future Simple</strong> — это время, которое используется для описания действий, 
            которые произойдут в будущем. Это одно из самых простых и часто используемых способов 
            выражения будущего времени в английском языке.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🎯 Основное значение и использование
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Когда использовать Future Simple?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Спонтанные решения</strong> и мгновенные обещания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Предсказания</strong> и прогнозы о будущем</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Обещания, угрозы, предложения</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Планы и намерения</strong> (без конкретных деталей)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Просьбы и приказы</strong> в вежливой форме</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Примеры использования</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Спонтанное решение:</p>
                  <p className="text-sm dark:text-bgLight/70">I think I <strong>will have</strong> a coffee.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Предсказание:</p>
                  <p className="text-sm dark:text-bgLight/70">It <strong>will rain</strong> tomorrow.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Обещание:</p>
                  <p className="text-sm dark:text-bgLight/70">I <strong>will call</strong> you later.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Предложение:</p>
                  <p className="text-sm dark:text-bgLight/70"><strong>Will</strong> you <strong>help</strong> me?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            🧱 Формулы образования Future Simple
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Утверждение */}
            <div className="bg-white dark:bg-gray-800 border-2 border-green-500 dark:border-green-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Утверждение</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">Subject + will + Verb (V1)</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>I <strong>will call</strong> you tomorrow.</li>
                <li>She <strong>will arrive</strong> at 8 PM.</li>
                <li>They <strong>will finish</strong> the project.</li>
                <li>We <strong>will see</strong> you there.</li>
              </ul>
            </div>

            {/* Отрицание */}
            <div className="bg-white dark:bg-gray-800 border-2 border-red-500 dark:border-red-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">✗</div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Отрицание</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">Subject + will not (won't) + Verb (V1)</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>I <strong>will not come</strong> to the party.</li>
                <li>She <strong>won't be</strong> late.</li>
                <li>They <strong>will not accept</strong> the offer.</li>
                <li>We <strong>won't forget</strong> about you.</li>
              </ul>
            </div>

            {/* Вопрос */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">?</div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Вопрос</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">Will + Subject + Verb (V1)?</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li><strong>Will</strong> you <strong>come</strong> to the meeting?</li>
                <li><strong>Will</strong> she <strong>join</strong> us?</li>
                <li><strong>Will</strong> they <strong>finish</strong> on time?</li>
                <li><strong>Will</strong> it <strong>rain</strong> tomorrow?</li>
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
              В разговорной речи и неформальном общении часто используются сокращённые формы:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">Полная форма → Сокращение</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex justify-between">
                    <span>I will</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">→ I'll</span>
                  </li>
                  <li className="flex justify-between">
                    <span>you will</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">→ you'll</span>
                  </li>
                  <li className="flex justify-between">
                    <span>he will / she will / it will</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">→ he'll / she'll / it'll</span>
                  </li>
                  <li className="flex justify-between">
                    <span>we will</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">→ we'll</span>
                  </li>
                  <li className="flex justify-between">
                    <span>they will</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">→ they'll</span>
                  </li>
                  <li className="flex justify-between">
                    <span>will not</span>
                    <span className="font-mono text-red-600 dark:text-red-400">→ won't</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">Примеры в контексте</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>I'll</strong> see you tomorrow.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>She'll</strong> be here soon.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>We'll</strong> help you with that.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>They <strong>won't</strong> come to the party.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>It'll</strong> be fine, don't worry.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Конструкция "be going to" для сравнения */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            ⚖️ Future Simple vs "be going to"
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              Конструкция <strong>"be going to"</strong> также используется для выражения будущего времени, 
              но с некоторыми отличиями в значении:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-purple-600 dark:bg-purple-700 text-white">
                  <tr>
                    <th className="p-3 text-left">Аспект</th>
                    <th className="p-3 text-left">Future Simple (will)</th>
                    <th className="p-3 text-left">be going to</th>
                  </tr>
                </thead>
                <tbody className="dark:text-bgLight/70">
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-3 font-semibold">Использование</td>
                    <td className="p-3">Спонтанные решения, предсказания, обещания</td>
                    <td className="p-3">Планы, намерения, предсказания на основе доказательств</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-3 font-semibold">Примеры</td>
                    <td className="p-3">
                      <div>I think I <strong>will stay</strong> home.</div>
                      <div>It <strong>will probably rain</strong>.</div>
                    </td>
                    <td className="p-3">
                      <div>I <strong>am going to visit</strong> my parents.</div>
                      <div>Look at those clouds! It <strong>is going to rain</strong>.</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Время решения</td>
                    <td className="p-3">Решение принимается в момент речи</td>
                    <td className="p-3">Решение принято заранее, есть план</td>
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
              Эти слова и фразы часто указывают на необходимость использования Future Simple:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Конкретное время</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    tomorrow
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    next week/month/year
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    in 2030, in 5 years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    soon
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    later
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Вероятность</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    probably
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    perhaps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    maybe
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    possibly
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    I think
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Другие указатели</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    I hope
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    I promise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    I'm sure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    I'm afraid
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

        {/* Особые случаи использования */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 border-l-4 border-purple-600 dark:border-purple-400 pl-4">
            💫 Особые случаи использования
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Вежливые просьбы и предложения</h3>
              <ul className="space-y-3 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Will you</strong> help me with this?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Will you</strong> please be quiet?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>I'll help</strong> you with your bags.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>We'll pay</strong> for dinner.</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">Обещания и угрозы</h3>
              <ul className="space-y-3 text-sm dark:text-bgLight/70">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>I <strong>will always love</strong> you. (обещание)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>I <strong>will call</strong> you every day. (обещание)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>I <strong>will tell</strong> the teacher! (угроза)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>You <strong>will regret</strong> this! (угроза)</span>
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
                  <th className="p-4 text-left">Способ выражения</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-purple-50 dark:bg-purple-900/20">
                  <td className="p-4 font-semibold">Future Simple</td>
                  <td className="p-4">Спонтанные решения, предсказания</td>
                  <td className="p-4 font-mono">will + V1</td>
                  <td className="p-4">I will call you later.</td>
                  <td className="p-4">Мгновенные решения, обещания, прогнозы</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">be going to</td>
                  <td className="p-4">Планы, намерения</td>
                  <td className="p-4 font-mono">am/is/are + going to + V1</td>
                  <td className="p-4">I'm going to study English.</td>
                  <td className="p-4">Заранее запланированные действия</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900/20">
                  <td className="p-4 font-semibold">Present Continuous</td>
                  <td className="p-4">Твёрдые планы в ближайшем будущем</td>
                  <td className="p-4 font-mono">am/is/are + Ving</td>
                  <td className="p-4">I'm meeting friends tonight.</td>
                  <td className="p-4">Договорённости, фиксированные планы</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Present Simple</td>
                  <td className="p-4">Расписания, программы</td>
                  <td className="p-4 font-mono">V1 / V1+s</td>
                  <td className="p-4">The train leaves at 5 PM.</td>
                  <td className="p-4">Официальные расписания, программы</td>
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
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-4">❌ Неправильно</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>I <strong>will to go</strong> to the store.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>She <strong>will comes</strong> tomorrow.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>We <strong>will not to wait</strong> for you.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>Will</strong> you <strong>to help</strong> me?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>I <strong>will going</strong> to the party.</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-4">✅ Правильно</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>I <strong>will go</strong> to the store.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>She <strong>will come</strong> tomorrow.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>We <strong>will not wait</strong> for you.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Will</strong> you <strong>help</strong> me?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>I <strong>will go</strong> to the party.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Future_Simple />

        {/* Итоги с чеклистом */}
        <section className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Что нужно помнить:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>После <strong>will</strong> всегда используется <strong>первая форма глагола</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Will <strong>не изменяется</strong> по лицам и числам</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Используйте для <strong>спонтанных решений</strong> и <strong>предсказаний</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Won't = will not (сокращённая форма)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Знайте разницу между <strong>will</strong> и <strong>be going to</strong></span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Проверьте себя:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать утверждения, отрицания и вопросы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда использовать will, а когда be going to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Помню, что после will глагол без to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю основные сигнальные слова</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу использовать will для вежливых просьб</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Практикуйтесь, составляя спонтанные решения и предсказания. 
              Например: "I think I will...", "It will probably...", "I promise I will...". 
              Такая практика поможет естественно использовать Future Simple в речи!
            </p>
          </div>
        </section>
        

        <Back_To_Tense />
      </div>
    </div>
  );
}