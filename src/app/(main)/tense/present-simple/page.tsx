


import Back_To_Tense from "@/pages-components/tense/components/Back_To_Tense";
import Practice_Present_Simple from "@/pages-components/tense/present-simple/Practice_Present_Simple";

export default function Present_Simple_Page() {
  return (
    <div className="min-h-screen rounded-[36px]  dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px] max-1040px:px-0 mx-auto space-y-12">
        
        {/* Заголовок с введением */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl max-1040px:text-[28px] font-bold text-blue-600 dark:text-blue-400">
            Present Simple: Полное руководство по настоящему простому времени
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-xl dark:text-bgLight/80 max-w-3xl mx-auto leading-relaxed">
            <strong>Present Simple</strong> — это основное время английского языка, 
            которое используется для описания регулярных действий, фактов и постоянных состояний. 
            Это самое часто используемое время в английском языке.
          </p>
        </header>

        {/* Основной смысл с расширенными примерами */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            🎯 Основное значение и использование
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Когда использовать Present Simple?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Регулярные действия</strong> и привычки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Факты</strong> и общеизвестные истины</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Постоянные состояния</strong> и ситуации</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Расписания</strong> и программы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Чувства, мысли, мнения</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Примеры использования</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Регулярное действие:</p>
                  <p className="text-sm dark:text-bgLight/70">I <strong>work</strong> from 9 to 5 every day.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Факт:</p>
                  <p className="text-sm dark:text-bgLight/70">The sun <strong>rises</strong> in the east.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Постоянное состояние:</p>
                  <p className="text-sm dark:text-bgLight/70">She <strong>lives</strong> in London.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Расписание:</p>
                  <p className="text-sm dark:text-bgLight/70">The train <strong>leaves</strong> at 6 PM.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальные формулы с пояснениями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            🧱 Формулы образования Present Simple
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Утверждение */}
            <div className="bg-white dark:bg-gray-800 border-2 border-green-500 dark:border-green-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Утверждение</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">I/You/We/They + Verb (V1)</code>
                <br />
                <code className="text-sm font-mono">He/She/It + Verb (V1 + s/es)</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>I <strong>work</strong> every day.</li>
                <li>She <strong>works</strong> in an office.</li>
                <li>They <strong>play</strong> football.</li>
                <li>He <strong>plays</strong> tennis.</li>
              </ul>
            </div>

            {/* Отрицание */}
            <div className="bg-white dark:bg-gray-800 border-2 border-red-500 dark:border-red-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">✗</div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Отрицание</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">I/You/We/They + do not (don't) + Verb</code>
                <br />
                <code className="text-sm font-mono">He/She/It + does not (doesn't) + Verb</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li>I <strong>don't work</strong> on weekends.</li>
                <li>She <strong>doesn't work</strong> here.</li>
                <li>They <strong>don't play</strong> basketball.</li>
                <li>He <strong>doesn't play</strong> chess.</li>
              </ul>
            </div>

            {/* Вопрос */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">?</div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Вопрос</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <code className="text-sm font-mono">Do + I/you/we/they + Verb?</code>
                <br />
                <code className="text-sm font-mono">Does + he/she/it + Verb?</code>
              </div>
              <p className="text-sm dark:text-bgLight/70 mb-2">Примеры:</p>
              <ul className="text-sm space-y-2 dark:text-bgLight/70">
                <li><strong>Do</strong> you <strong>work</strong> here?</li>
                <li><strong>Does</strong> she <strong>work</strong> here?</li>
                <li><strong>Do</strong> they <strong>play</strong> football?</li>
                <li><strong>Does</strong> he <strong>play</strong> tennis?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Особенности 3-го лица единственного числа */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            ⭐ Особенности 3-го лица единственного числа
          </h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <p className="dark:text-bgLight/70 mb-4">
              В Present Simple для местоимений <strong>he, she, it</strong> к глаголу добавляется окончание <strong>-s</strong> или <strong>-es</strong>:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Обычные глаголы</div>
                <div className="text-blue-600 dark:text-blue-400 font-bold">+ s</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">work → works</div>
                <div className="text-sm dark:text-bgLight/70">play → plays</div>
              </div>
              
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Глаголы на -s, -ss, -sh, -ch, -x, -o</div>
                <div className="text-blue-600 dark:text-blue-400 font-bold">+ es</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">watch → watches</div>
                <div className="text-sm dark:text-bgLight/70">go → goes</div>
              </div>
              
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Глаголы на согласную + y</div>
                <div className="text-blue-600 dark:text-blue-400 font-bold">y → ies</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">study → studies</div>
                <div className="text-sm dark:text-bgLight/70">try → tries</div>
              </div>
              
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Особые случаи</div>
                <div className="text-blue-600 dark:text-blue-400 font-bold">have → has</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">do → does</div>
                <div className="text-sm dark:text-bgLight/70">be → is</div>
              </div>
            </div>
          </div>
        </section>

        {/* Глагол BE отдельно */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            🔷 Особый случай: глагол BE
          </h2>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <p className="dark:text-bgLight/70 mb-4">
              Глагол <strong>be</strong> (быть) имеет особые формы в Present Simple:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">I</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">am</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">I am a student</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">he, she, it</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">is</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">She is here</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">you, we, they</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">are</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">They are friends</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Отрицание</div>
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">am not / isn't / aren't</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">She isn't late</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="font-mono text-lg mb-2">Вопрос</div>
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">Am I? / Is she? / Are they?</div>
                <div className="text-sm dark:text-bgLight/70 mt-2">Are you ready?</div>
              </div>
            </div>
          </div>
        </section>

        {/* Сигнальные слова с категориями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            🔑 Сигнальные слова и выражения
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 mb-4">
              Эти слова и фразы часто указывают на необходимость использования Present Simple:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Наречия частоты</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    always
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    usually
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    often
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    sometimes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    rarely
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    never
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Выражения времени</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    every day/week/month
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    on Mondays
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    in the morning/evening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    at night
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    once a week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    twice a month
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Другие указатели</h4>
                <ul className="space-y-2 text-sm dark:text-bgLight/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    generally
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    normally
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    regularly
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    frequently
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    occasionally
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    from time to time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение времен с деталями */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            ⚖️ Сравнение с другими настоящими временами
          </h2>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm shadow-lg">
              <thead className="bg-blue-600 dark:bg-blue-700 text-white">
                <tr>
                  <th className="p-4 text-left">Время</th>
                  <th className="p-4 text-left">Основное значение</th>
                  <th className="p-4 text-left">Формула</th>
                  <th className="p-4 text-left">Пример</th>
                  <th className="p-4 text-left">Когда использовать</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900/20">
                  <td className="p-4 font-semibold">Present Simple</td>
                  <td className="p-4">Регулярные действия, факты</td>
                  <td className="p-4 font-mono">V1 / V1+s</td>
                  <td className="p-4">I work every day.</td>
                  <td className="p-4">Привычки, расписания, факты</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-4 font-semibold">Present Continuous</td>
                  <td className="p-4">Действие в процессе сейчас</td>
                  <td className="p-4 font-mono">am/is/are + Ving</td>
                  <td className="p-4">I am working now.</td>
                  <td className="p-4">Действия в момент речи</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600 bg-green-50 dark:bg-green-900/20">
                  <td className="p-4 font-semibold">Present Perfect</td>
                  <td className="p-4">Связь прошлого с настоящим</td>
                  <td className="p-4 font-mono">have/has + V3</td>
                  <td className="p-4">I have worked here.</td>
                  <td className="p-4">Опыт, результат, незавершённость</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Present Perfect Continuous</td>
                  <td className="p-4">Длительное действие до настоящего</td>
                  <td className="p-4 font-mono">have/has been + Ving</td>
                  <td className="p-4">I have been working.</td>
                  <td className="p-4">Действие, которое продолжается</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Глаголы состояния */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            💭 Глаголы состояния (Stative Verbs)
          </h2>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
            <p className="dark:text-bgLight/70 mb-4">
              <strong>Глаголы состояния</strong> обычно не используются в Continuous временах. Они описывают состояния, а не действия:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Чувства и эмоции</h4>
                <ul className="text-sm space-y-1 dark:text-bgLight/70">
                  <li>like</li>
                  <li>love</li>
                  <li>hate</li>
                  <li>prefer</li>
                  <li>want</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Мышление и мнение</h4>
                <ul className="text-sm space-y-1 dark:text-bgLight/70">
                  <li>know</li>
                  <li>believe</li>
                  <li>think</li>
                  <li>understand</li>
                  <li>remember</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Восприятие</h4>
                <ul className="text-sm space-y-1 dark:text-bgLight/70">
                  <li>see</li>
                  <li>hear</li>
                  <li>smell</li>
                  <li>taste</li>
                  <li>feel</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Владение и измерение</h4>
                <ul className="text-sm space-y-1 dark:text-bgLight/70">
                  <li>have</li>
                  <li>own</li>
                  <li>possess</li>
                  <li>cost</li>
                  <li>weigh</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm dark:text-bgLight/70 italic">
                💡 <strong>Пример:</strong> "I like pizza" (правильно) vs "I am liking pizza" (неправильно)
              </p>
            </div>
          </div>
        </section>

        {/* Частые ошибки */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            🚫 Распространённые ошибки
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-4">❌ Неправильно</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>He <strong>work</strong> here.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>She <strong>don't like</strong> coffee.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Does she <strong>works</strong> here?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>I <strong>am work</strong> every day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>They <strong>are like</strong> pizza.</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-4">✅ Правильно</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>He <strong>works</strong> here.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>She <strong>doesn't like</strong> coffee.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Does she <strong>work</strong> here?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>I <strong>work</strong> every day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>They <strong>like</strong> pizza.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практика */}
        <Practice_Present_Simple />

        {/* Итоги с чеклистом */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
            📌 Ключевые моменты для запоминания
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Что нужно помнить:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Для <strong>he/she/it</strong> добавляйте <strong>-s/-es</strong> к глаголу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>В вопросах и отрицаниях используйте <strong>do/does</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>После <strong>do/does</strong> глагол всегда в <strong>первой форме</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Глагол <strong>be</strong> имеет формы <strong>am/is/are</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Используйте для <strong>фактов, привычек и расписаний</strong></span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Проверьте себя:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Знаю, когда добавлять -s к глаголу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Могу образовать вопросы и отрицания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Понимаю разницу с Present Continuous</span>
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
          
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center border border-blue-200 dark:border-blue-800">
            <p className="dark:text-bgLight/70 italic">
              💡 <strong>Совет:</strong> Составляйте предложения о своей ежедневной рутине, используя Present Simple. 
              Описывайте свои привычки, распорядок дня и факты о себе. Практика в контексте — лучший способ запомнить!
            </p>
          </div>
        </section>

        <Back_To_Tense />
      </div>
    </div>
  );
}