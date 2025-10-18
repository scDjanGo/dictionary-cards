import Practice_PS from "@/pages-components/tense/past-simple/Practice_PS";

export default function PastSimplePage() {
  return (
    <div className="min-h-screen rounded-[36px] bg-white dark:bg-bgItem px-6 py-10 text-bgDark dark:text-bgLight transition-colors duration-300">
      <div className="px-[36px]  mx-auto space-y-10">
        {/* Заголовок */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-color-blueCl">
            Past Simple (Простое прошедшее время)
          </h1>
          <p className="text-lg dark:text-bgLight/70">
            Это одно из самых часто используемых времён английского языка. Мы
            используем <strong>Past Simple</strong>, когда говорим о действиях,
            которые произошли в прошлом и <strong>уже закончились</strong>.
          </p>
        </section>

        {/* Основной смысл */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            🎯 Основная идея
          </h2>
          <p className="dark:text-bgLight/70 mt-2">
            Past Simple используется для описания:
          </p>
          <ul className="list-disc list-inside dark:text-bgLight/70 space-y-1 mt-2">
            <li>Действий, которые произошли и закончились в прошлом.</li>
            <li>Последовательности событий (одно за другим).</li>
            <li>
              Прошлых привычек или состояний (в сочетании с <em>used to</em>).
            </li>
          </ul>
          <p className="dark:text-bgLight/70 mt-3 italic">
            🔹 <strong>I watched</strong> a movie yesterday. — Я посмотрел фильм
            вчера.
            <br />
            🔹 <strong>They lived</strong> in London when they were kids. — Они
            жили в Лондоне, когда были детьми.
          </p>
        </section>

        {/* Формулы */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            🧱 Формулы образования
          </h2>
          <div className="space-y-4 mt-4">
            <div className="border-l-4 border-color-blueCl pl-4">
              <p>
                <strong>✅ Утверждение:</strong> Subject + Verb (V2)
              </p>
              <p className="dark:text-bgLight/70">
                I played football yesterday.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p>
                <strong>❌ Отрицание:</strong> Subject + did not + Verb (V1)
              </p>
              <p className="dark:text-bgLight/70">
                I did not (didn’t) play football yesterday.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p>
                <strong>❓ Вопрос:</strong> Did + Subject + Verb (V1)?
              </p>
              <p className="dark:text-bgLight/70">
                Did you play football yesterday?
              </p>
            </div>
          </div>
        </section>

        {/* Правильные и неправильные глаголы */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            📘 Правильные и неправильные глаголы
          </h2>
          <p className="dark:text-bgLight/70 mt-2">
            В Past Simple глаголы бывают <strong>правильные</strong> и{" "}
            <strong>неправильные</strong>.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-color-blueCl/30">
              <h3 className="font-semibold text-color-blueCl mb-2">
                Правильные глаголы
              </h3>
              <p className="dark:text-bgLight/70 text-sm">
                Добавляем окончание <code>-ed</code>:
                <br /> play → played, work → worked
              </p>
            </div>
            <div className="p-4 rounded-xl border border-color-blueCl/30">
              <h3 className="font-semibold text-color-blueCl mb-2">
                Неправильные глаголы
              </h3>
              <p className="dark:text-bgLight/70 text-sm">
                Нужно запомнить вторую форму:
                <br /> go → went, see → saw, have → had
              </p>
            </div>
          </div>
        </section>

        {/* Исключения */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            ⚠️ Исключения и орфография
          </h2>
          <ul className="list-disc list-inside dark:text-bgLight/70 space-y-2 mt-2">
            <li>
              Если глагол заканчивается на <code>e</code> → добавляем только{" "}
              <code>d</code>: love → loved.
            </li>
            <li>
              Если оканчивается на согласную + <code>y</code> → меняем{" "}
              <code>y</code> на <code>i</code> и добавляем <code>ed</code>:
              study → studied.
            </li>
            <li>
              Если ударение на последнем слоге — последнюю согласную удваиваем:
              stop → stopped.
            </li>
          </ul>
        </section>

        {/* Сигнальные слова */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            🔑 Сигнальные слова (ключевые слова)
          </h2>
          <p className="dark:text-bgLight/70 mt-2">
            Эти слова помогают распознать Past Simple:
          </p>
          <p className="mt-2 italic dark:text-bgLight/70">
            yesterday, last (week, month, year), ago, in 2010, the other day,
            when, then, once upon a time
          </p>
        </section>

        {/* Когда не использовать */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            🚫 Когда <u>не</u> используется Past Simple
          </h2>
          <ul className="list-disc list-inside dark:text-bgLight/70 space-y-2 mt-2">
            <li>
              Когда действие связано с настоящим временем → используем{" "}
              <strong>Present Perfect</strong>.
            </li>
            <li>
              Когда действие происходило в процессе → используем{" "}
              <strong>Past Continuous</strong>.
            </li>
            <li>
              Когда действие завершилось до другого прошлого действия →{" "}
              <strong>Past Perfect</strong>.
            </li>
          </ul>
          <p className="mt-3 italic dark:text-bgLight/70">
            ❌ I have seen this movie yesterday.
            <br />✅ I saw this movie yesterday.
          </p>
        </section>

        {/* Сравнение */}
        <section>
          <h2 className="text-2xl font-semibold text-color-blueCl">
            ⚖️ Сравнение с другими временами
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full mt-3 border-collapse text-sm">
              <thead className="bg-color-blueCl text-bgLight">
                <tr>
                  <th className="p-2 text-left">Время</th>
                  <th className="p-2 text-left">Когда используется</th>
                  <th className="p-2 text-left">Пример</th>
                </tr>
              </thead>
              <tbody className="dark:text-bgLight/70">
                <tr className="border-b border-gray-500/30">
                  <td className="p-2">Past Simple</td>
                  <td className="p-2">Завершённое действие в прошлом</td>
                  <td className="p-2">I visited Paris in 2019.</td>
                </tr>
                <tr className="border-b border-gray-500/30">
                  <td className="p-2">Past Continuous</td>
                  <td className="p-2">Действие происходило в процессе</td>
                  <td className="p-2">I was watching TV at 8 p.m.</td>
                </tr>
                <tr>
                  <td className="p-2">Past Perfect</td>
                  <td className="p-2">Действие завершилось до другого</td>
                  <td className="p-2">
                    I had finished work before he arrived.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Интерактивная практика */}

        <Practice_PS />

        {/* Итоги */}
        <section className="bg-color-blueCl/10 dark:bg-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-color-blueCl mb-3">
            📌 Итоги
          </h2>
          <ul className="list-disc list-inside dark:text-bgLight/70 space-y-2">
            <li>Past Simple — для действий, завершённых в прошлом.</li>
            <li>
              Используется со словами: <em>yesterday, ago, last week...</em>
            </li>
            <li>
              Отрицания и вопросы — с <strong>did / didn’t</strong>.
            </li>
            <li>Помни разницу между правильными и неправильными глаголами.</li>
            <li>Не путай с Present Perfect или Past Continuous.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
