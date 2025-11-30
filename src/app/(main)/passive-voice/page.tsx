export default function PassiveVoicePage() {
  return (
    <div className=" bg-lightBg dark:bg-darkBg py-8">
      <div className="">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blueCl dark:text-blue-300 mb-6">
            Passive Voice - Пассивный Залог
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Исчерпывающее руководство по пассивному залогу в английском языке: от фундаментальных принципов до тонкостей использования
          </p>
        </header>

        {/* What is Passive Voice - Detailed */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blueCl rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              🔍
            </div>
            <h2 className="text-3xl font-bold text-blueCl dark:text-blue-300">
              Глубокое понимание пассивного залога
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                <strong>Пассивный залог (Passive Voice)</strong> - это грамматическая конструкция, которая кардинально меняет 
                перспективу предложения. В отличие от активного залога, где фокус на субъекте, выполняющем действие, 
                пассивный залог акцентирует внимание на самом действии и его объекте.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blueCl mb-4">Фундаментальное отличие</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  В пассивной конструкции <strong>подлежащее становится реципиентом действия</strong>, а не его инициатором. 
                  Это создает эффект "страдательности" - действие происходит над субъектом, а не исходит от него.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Лингвистическая природа</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Пассивный залог является производным от активного через процесс <strong>трансформации синтаксической структуры</strong>. 
                Эта трансформация включает:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Перемещение объекта действия в позицию подлежащего</li>
                <li>Введение вспомогательного глагола "be" в соответствующем времени</li>
                <li>Использование причастия прошедшего времени (Past Participle)</li>
                <li>Опциональное указание агента действия через предлог "by"</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blueCl to-purple-600 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Сравнительный анализ</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2 text-green-300">Активный залог:</p>
                    <p className="text-center">"The scientist conducts the experiment."</p>
                    <p className="text-center text-sm opacity-80 mt-2">(Ученый проводит эксперимент)</p>
                    <div className="text-xs text-center mt-2">Фокус: Кто делает</div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2 text-yellow-300">Пассивный залог:</p>
                    <p className="text-center">"The experiment is conducted by the scientist."</p>
                    <p className="text-center text-sm opacity-80 mt-2">(Эксперимент проводится ученым)</p>
                    <div className="text-xs text-center mt-2">Фокус: Что делается</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-blueCl dark:text-blue-300 mb-3">Когнитивный аспект</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Пассивный залог изменяет ментальную репрезентацию события. Слушатель сначала воспринимает 
                  действие и его объект, и только затем (если указано) - исполнителя. Это создает иной 
                  психолингвистический эффект по сравнению с активной конструкцией.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical and Functional Aspects */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              📚
            </div>
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              Функциональное назначение и историческая перспектива
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Эволюция пассивного залога
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Пассивный залог в английском языке имеет глубокие исторические корни, восходящие к 
                <strong> древнеанглийскому периоду</strong>. Изначально он формировался через сочетание 
                глагола "be" с причастием прошедшего времени, что отражало влияние германских языков.
              </p>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Историческое развитие</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Древнеанглийский: формирование базовой структуры</li>
                  <li>Среднеанглийский: стандартизация конструкции</li>
                  <li>Современный английский: расширение функциональности</li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                В <strong>современном английском</strong> пассивный залог приобрел дополнительные 
                прагматические функции, став инструментом стилистического и риторического воздействия.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                Функциональный спектр
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-blueCl dark:text-blue-300">Информационная функция</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Перераспределение информационной нагрузки: акцент на результате, а не процессе
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-600 dark:text-green-400">Стилистическая функция</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Создание формального, объективного тона в академических и научных текстах
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400">Прагматическая функция</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Тактическое опускание агента действия в дипломатических и политических контекстах
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-yellow-600 dark:text-yellow-400">Дискурсивная функция</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Поддержание тематической непрерывности и когерентности текста
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation in Detail */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              🏗️
            </div>
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
              Детальный анализ образования пассивного залога
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Универсальная структурная формула</h3>
            <div className="text-center text-4xl font-bold mb-4">
              Subject + BE + Past Participle + (by agent)
            </div>
            <p className="text-center text-lg opacity-90">
              Где BE согласуется с подлежащим в числе, лице и времени
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-6">
                Система времен в пассиве
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-green-600 dark:text-green-400 mb-2">Present Simple Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">am/is/are + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The report is written every week." - Отчет пишется каждую неделю
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Выражает регулярные действия, общие истины, процессы
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-green-600 dark:text-green-400 mb-2">Past Simple Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">was/were + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The building was constructed in 1980." - Здание было построено в 1980
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Описывает завершенные действия в прошлом
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-green-600 dark:text-green-400 mb-2">Future Simple Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">will be + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The project will be completed next month." - Проект будет завершен в следующем месяце
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Выражает будущие действия, обещания, прогнозы
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                Совершенные и продолженные времена
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2">Present Perfect Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">have/has been + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The documents have been signed." - Документы были подписаны
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Акцент на результате действия, связанном с настоящим
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2">Past Perfect Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">had been + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The work had been finished before he arrived." - Работа была закончена до его прихода
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Действие завершилось до другого действия в прошлом
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2">Present Continuous Passive</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">am/is/are being + Past Participle</p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The house is being painted now." - Дом сейчас красят
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Действие в процессе выполнения в момент речи
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Usage and Nuances */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              🎯
            </div>
            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              Продвинутые аспекты и тонкости использования
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-6">
                Семантические классификации
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Агентный пассив</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    С явным указанием исполнителя через предлог "by"
                  </p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "Hamlet was written by Shakespeare."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Используется, когда агент представляет информационную ценность
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-blueCl dark:text-blue-300 mb-2">Безагентный пассив</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Без указания исполнителя действия
                  </p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "The window was broken during the storm."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Агент неизвестен, неважен или очевиден из контекста
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Полупредикативный пассив</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Глагол "be" выполняет связующую функцию, а Past Participle - функцию прилагательного
                  </p>
                  <p className="text-sm text-blueCl dark:text-blue-300">
                    "She is interested in linguistics."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Граница между пассивом и составным именным сказуемым
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                Стилистические и прагматические аспекты
              </h3>

              <div className="space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
                  <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Научный стиль</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    В академических текстах пассивный залог создает иллюзию объективности, 
                    смещая фокус с исследователя на процесс исследования. Это соответствует 
                    нормам научного дискурса, где важны результаты, а не личности.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                  <h4 className="font-bold text-blueCl dark:text-blue-300 mb-2">Юридический дискурс</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    В правовых документах пассив позволяет избежать указания на конкретных 
                    ответственных лиц, создавая обезличенные формулировки. Это обеспечивает 
                    универсальность применения правовых норм.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Политическая риторика</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    В политических выступлениях пассивный залог используется для тактического 
                    дистанцирования от непопулярных решений или для смягчения ответственности 
                    за определенные действия.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complex Structures and Exceptions */}
        <section className="bg-white dark:bg-bgItem rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
              ⚡
            </div>
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">
              Сложные структуры и исключения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blueCl dark:text-blue-300 mb-4">
                Пассив с модальными глаголами
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-bold text-green-600 dark:text-green-400">Modal + be + Past Participle</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    "The work must be completed by Friday."<br/>
                    "This problem can be solved easily."<br/>
                    "The documents should be signed today."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-bold text-purple-600 dark:text-purple-400">Perfect Modal Passive</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    "The letter should have been sent yesterday."<br/>
                    "The work could have been done better."<br/>
                    "He must have been informed about it."
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-lg text-orange-600 dark:text-orange-400 mt-6 mb-3">Семантика модальных пассивов</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4">
                <li><strong>must be done</strong> - необходимость выполнения</li>
                <li><strong>can be done</strong> - возможность выполнения</li>
                <li><strong>should be done</strong> - рекомендация к выполнению</li>
                <li><strong>might be done</strong> - вероятность выполнения</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                Особые случаи и ограничения
              </h3>

              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Непереходные глаголы</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Глаголы, не принимающие прямого дополнения, не могут образовывать пассив.
                    Например: happen, exist, arrive, die, sleep.
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                    ✗ "It was happened yesterday."<br/>
                    ✓ "It happened yesterday."
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Get-пассив</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    В разговорной речи глагол "get" часто заменяет "be" в пассивных конструкциях, 
                    особенно когда речь идет о непреднамеренных или внезапных действиях.
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    "They got married last year."<br/>
                    "He got promoted unexpectedly."<br/>
                    "The car got stolen from the parking lot."
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-bold text-blueCl dark:text-blue-300 mb-2">Пассив с двумя дополнениями</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Некоторые глаголы (give, send, show, tell) могут иметь два пассивных варианта.
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">
                    Active: "She gave me the book."<br/>
                    Passive 1: "I was given the book."<br/>
                    Passive 2: "The book was given to me."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Applications */}
        <section className="bg-gradient-to-r from-blueCl to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Профессиональное применение и лучшие практики</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Оптимальное использование</h3>
              
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Академическое письмо</h4>
                  <p className="text-sm opacity-90">
                    В научных работах используйте пассив для описания методологии и результатов. 
                    Это создает объективный тон и соответствует академическим conventions.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Техническая документация</h4>
                  <p className="text-sm opacity-90">
                    В руководствах и инструкциях пассивный залог эффективен для описания процессов 
                    без указания на конкретного исполнителя.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300 mb-2">Официальные отчеты</h4>
                  <p className="text-sm opacity-90">
                    В корпоративных и государственных документах пассив помогает сохранять 
                    формальный стиль и избегать персональных указаний.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Стратегическое избегание</h3>

              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Разговорная речь</h4>
                  <p className="text-sm opacity-90">
                    В неформальном общении чрезмерное использование пассива может создавать 
                    ощущение искусственности и дистанцированности.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Ясность и прямота</h4>
                  <p className="text-sm opacity-90">
                    Когда важно четко указать ответственность или авторство, активный залог 
                    обеспечивает большую прозрачность.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">Динамичное повествование</h4>
                  <p className="text-sm opacity-90">
                    В художественной литературе и журналистике активный залог часто создает 
                    более энергичный и вовлекающий текст.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white/20 p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Экспертная рекомендация</h3>
              <p className="text-lg leading-relaxed">
                Пассивный залог - это мощный стилистический инструмент, который следует использовать 
                осознанно и целенаправленно. Его эффективность зависит от контекста, аудитории и 
                коммуникативных целей. Идеальное владение пассивным залогом предполагает не только 
                грамматическую корректность, но и глубокое понимание его прагматических функций 
                в различных дискурсивных практиках.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}