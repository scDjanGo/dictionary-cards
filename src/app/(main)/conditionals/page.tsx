import Pages_Navbar from "@/components/navbar/Pages_Navbar";
import { CONDITIONALS } from "@/data/conditionals";

export default function ConditionalsPage() {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg p-[12px_0]">
        <Pages_Navbar navItems={CONDITIONALS} />
      <div className=" mx-auto ">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blueCl dark:text-blue-300 mb-6">
            Conditionals - Условные Предложения
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Полное руководство по условным предложениям в английском языке: от базовых принципов до сложных смешанных типов
          </p>
        </header>

        {/* What are Conditionals */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12 max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blueCl rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              ❓
            </div>
            <h2 className="text-3xl font-bold text-blueCl dark:text-blue-300 max-895px:text-xl">
              Что такое условные предложения?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                <strong>Условные предложения (Conditionals)</strong> - это грамматические конструкции, 
                которые выражают зависимость между условием и следствием. Они описывают, что произойдет 
                (или могло бы произойти) при выполнении определенного условия.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blueCl mb-4">Основная структура</h3>
                <p className="text-gray-700 dark:text-gray-300 font-bold text-center text-lg">
                  IF + Condition (условие) , Result (результат)
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  или
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-bold text-center text-lg">
                  Result (результат) + IF + Condition (условие)
                </p>
              </div>

              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Лингвистическая сущность</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Условные предложения являются инструментом выражения <strong>гипотетических ситуаций</strong>, 
                которые могут варьироваться от реальных и вероятных до совершенно воображаемых.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blueCl to-purple-600 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Базовый пример</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2 text-green-300">Условие:</p>
                    <p className="text-center">"If it rains"</p>
                    <p className="text-center text-sm opacity-80 mt-2">(Если пойдет дождь)</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2 text-yellow-300">Следствие:</p>
                    <p className="text-center">"we will stay at home"</p>
                    <p className="text-center text-sm opacity-80 mt-2">(мы останемся дома)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-blueCl dark:text-blue-300 mb-3">Когнитивный аспект</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Условные конструкции позволяют нам мысленно моделировать альтернативные реальности, 
                  планировать действия на основе различных сценариев и выражать вероятностные суждения 
                  о будущем.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Need Conditionals */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              🎯
            </div>
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 max-895px:text-xl">
              Зачем нужны условные предложения?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-blueCl rounded-lg flex items-center justify-center text-white text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Выражение вероятности
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Позволяют оценить и выразить вероятность различных исходов событий.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "If she studies hard, she will pass the exam."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-blueCl rounded-lg flex items-center justify-center text-white text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Принятие решений
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Помогают анализировать последствия различных вариантов действий.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "If I take this job, I'll have to move to London."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-blueCl rounded-lg flex items-center justify-center text-white text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-blueCl dark:text-blue-300 mb-3">
                Воображение и гипотезы
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Позволяют обсуждать нереальные, воображаемые или контринтуитивные сценарии.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "If I were president, I would change many things."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                Сожаления и критика
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Выражают сожаление о прошлом или критику текущих ситуаций.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "If you had listened to me, this wouldn't have happened."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                Ведение переговоров
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Используются в дипломатических и деловых переговорах для выражения условий.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "We will sign the contract if you agree to these terms."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg mb-4">
                6
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                Научное моделирование
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Применяются в научных гипотезах и теоретических построениях.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                "If temperature increases, pressure will rise proportionally."
              </p>
            </div>
          </div>
        </section>

        {/* Zero Conditional */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              0
            </div>
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 max-895px:text-xl">
              Zero Conditional - Нулевой тип
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Характеристики
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Выражает общие истины и научные факты</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Описывает всегда верные причинно-следственные связи</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Использует Present Simple в обеих частях</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Условие всегда ведет к одному результату</span>
                </div>
              </div>

              <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Формула:</h4>
                <p className="text-center font-bold text-lg dark:text-bgLight">
                  If + Present Simple, Present Simple
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Примеры использования
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If you heat ice, it melts."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Научный факт)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If people don't eat, they get hungry."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Общая истина)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "When you mix blue and yellow, you get green."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Всегда верный результат)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If the temperature drops below zero, water freezes."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Причинно-следственная связь)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Conditional */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blueCl rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              1
            </div>
            <h2 className="text-3xl font-bold text-blueCl dark:text-blue-300 max-895px:text-xl">
              First Conditional - Первый тип
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Характеристики
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blueCl text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Выражает реальные и вероятные ситуации в будущем</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blueCl text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Условие выполнимо и имеет хорошие шансы на реализацию</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blueCl text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Использует Present Simple в условии и Future Simple в результате</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blueCl text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Часто используется для обещаний, предупреждений, угроз</span>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blueCl dark:text-blue-300 mb-2">Формула:</h4>
                <p className="text-center font-bold text-lg dark:text-bgLight">
                  If + Present Simple, Will + Infinitive
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Примеры использования
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If it rains tomorrow, we will cancel the picnic."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Планы на будущее)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If you study hard, you will pass the exam."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Предсказание/обещание)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If you don't hurry, you will miss the bus."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Предупреждение)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "I will help you if you need assistance."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Обещание помощи)
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Вариации:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Вместо "will" могут использоваться другие модальные глаголы: 
                  <strong> can, may, might, should, must</strong>
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  "If you finish early, you can leave."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Conditional */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              2
            </div>
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 max-895px:text-xl">
              Second Conditional - Второй тип
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Характеристики
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Выражает маловероятные или воображаемые ситуации в настоящем или будущем</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Условие маловероятно или нереально</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Использует Past Simple в условии и Would + Infinitive в результате</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Глагол "be" обычно используется в форме "were" для всех лиц</span>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Формула:</h4>
                <p className="text-center font-bold text-lg dark:text-bgLight">
                  If + Past Simple, Would + Infinitive
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Примеры использования
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If I won the lottery, I would travel around the world."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Маловероятная мечта)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If I were you, I would study medicine."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Совет - нереальная ситуация)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If she had more time, she would learn Japanese."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Гипотетическая возможность)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If it weren't so expensive, I would buy it."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Нереальное условие в настоящем)
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Особенности:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Were вместо was:</strong> В формальном английском "were" используется для всех лиц 
                  (If I were, If he were). В разговорной речи часто используется "was".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Conditional */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              3
            </div>
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 max-895px:text-xl">
              Third Conditional - Третий тип
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Характеристики
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-red-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Выражает гипотетические ситуации в прошлом</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Описывает события, которые не произошли и уже не могут произойти</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Использует Past Perfect в условии и Would Have + Past Participle в результате</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-red-500 text-white rounded-full min-w-6 min-h-6 flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Часто выражает сожаление, критику или анализ ошибок</span>
                </div>
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Формула:</h4>
                <p className="text-center font-bold text-lg dark:text-bgLight">
                  If + Past Perfect, Would Have + Past Participle
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Примеры использования
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If I had studied harder, I would have passed the exam."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Сожаление о прошлом)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If she had taken the job, she would have moved to Paris."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Альтернативный сценарий прошлого)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If they had left earlier, they wouldn't have missed the flight."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Критика прошлых действий)
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "He would have been successful if he had listened to advice."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    (Анализ причин неудачи)
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Прагматические функции:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Третий условный тип часто используется для выражения вежливой критики, 
                  сожаления о упущенных возможностях и анализа исторических альтернатив.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mixed Conditionals */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              🔀
            </div>
            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 max-895px:text-xl">
              Mixed Conditionals - Смешанные типы
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Тип 1: Прошлое условие → Настоящее следствие
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Структура:</p>
                  <p className="text-center text-lg text-green-600 dark:text-green-400">
                    If + Past Perfect, Would + Infinitive
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If I had learned Spanish, I would work in Madrid now."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Прошлое действие влияет на настоящее
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If you had saved money, you wouldn't be in debt now."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Прошлое решение имеет текущие последствия
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Тип 2: Настоящее условие → Прошлое следствие
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Структура:</p>
                  <p className="text-center text-lg text-green-600 dark:text-green-400">
                    If + Past Simple, Would Have + Past Participle
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If I were taller, I would have become a basketball player."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Постоянное качество влияет на прошлое решение
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    "If she liked children, she would have become a teacher."
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Текущая характеристика объясняет прошлый выбор
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Когда использовать смешанные типы?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-bold mb-2">Прошлое → Настоящее:</p>
                <p className="text-sm opacity-90">
                  Когда прошлое действие или решение имеет прямое влияние на текущую ситуацию
                </p>
              </div>
              <div>
                <p className="text-lg font-bold mb-2">Настоящее → Прошлое:</p>
                <p className="text-sm opacity-90">
                  Когда постоянное качество или характеристика объясняет прошлые решения или события
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12  max-895px:p-4">
          <h2 className="text-3xl font-bold text-center text-blueCl dark:text-blue-300 mb-8">
            Сравнительная таблица условных типов
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="text-xs bg-blueCl text-white uppercase">
                <tr>
                  <th className="px-6 py-3">Тип</th>
                  <th className="px-6 py-3">Вероятность</th>
                  <th className="px-6 py-3">Время</th>
                  <th className="px-6 py-3">Структура</th>
                  <th className="px-6 py-3">Функция</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20 border-b">
                  <td className="px-6 py-4 font-bold text-green-600">Zero</td>
                  <td className="px-6 py-4">100%</td>
                  <td className="px-6 py-4">Настоящее</td>
                  <td className="px-6 py-4">If + Present, Present</td>
                  <td className="px-6 py-4">Факты, научные истины</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-900/20 border-b">
                  <td className="px-6 py-4 font-bold text-blueCl">First</td>
                  <td className="px-6 py-4">50-90%</td>
                  <td className="px-6 py-4">Будущее</td>
                  <td className="px-6 py-4">If + Present, Will + Inf</td>
                  <td className="px-6 py-4">Реальные будущие ситуации</td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/20 border-b">
                  <td className="px-6 py-4 font-bold text-purple-600">Second</td>
                  <td className="px-6 py-4">0-10%</td>
                  <td className="px-6 py-4">Настоящее/Будущее</td>
                  <td className="px-6 py-4">If + Past, Would + Inf</td>
                  <td className="px-6 py-4">Нереальные ситуации</td>
                </tr>
                <tr className="bg-red-50 dark:bg-red-900/20">
                  <td className="px-6 py-4 font-bold text-red-600">Third</td>
                  <td className="px-6 py-4">0%</td>
                  <td className="px-6 py-4">Прошлое</td>
                  <td className="px-6 py-4">If + Past Perfect, Would Have + PP</td>
                  <td className="px-6 py-4">Сожаления о прошлом</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Professional Tips */}
        <section className="bg-gradient-to-r from-blueCl to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Экспертные советы и лучшие практики</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">✅ Эффективные стратегии</h3>
              
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Определяйте вероятность</h4>
                  <p className="text-sm opacity-90">
                    Прежде чем строить условное предложение, оцените вероятность условия. 
                    Это поможет выбрать правильный тип.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Обращайте внимание на время</h4>
                  <p className="text-sm opacity-90">
                    Четко определяйте временной контекст: настоящее, будущее или прошлое. 
                    Это ключ к правильному выбору структуры.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Практикуйте смешанные типы</h4>
                  <p className="text-sm opacity-90">
                    Освойте смешанные условные конструкции для выражения сложных временных отношений.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">❌ Распространенные ошибки</h3>

              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Использование will в if-клаузе</h4>
                  <p className="text-sm opacity-90">
                    ✗ "If I will have time..."<br/>
                    ✓ "If I have time..."
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Путаница с временами</h4>
                  <p className="text-sm opacity-90">
                    ✗ "If I would have known..." (разговорный)<br/>
                    ✓ "If I had known..." (грамматически правильно)
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Неправильное использование were</h4>
                  <p className="text-sm opacity-90">
                    ✗ "If I was rich..." (разговорный)<br/>
                    ✓ "If I were rich..." (формально правильно)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white/20 p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Ключевой принцип мастерства</h3>
              <p className="text-lg leading-relaxed">
                Идеальное владение условными предложениями требует понимания не только грамматических правил, 
                но и прагматических нюансов. Успешное использование conditionals зависит от способности 
                точно оценивать вероятность событий, четко определять временные отношения и выбирать 
                конструкции, наиболее соответствующие коммуникативным целям. Регулярная практика в различных 
                контекстах - ключ к естественному и эффективному использованию этих важных грамматических структур.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}