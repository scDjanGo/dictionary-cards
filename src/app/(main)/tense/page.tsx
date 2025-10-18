import Tense_Navbar from "@/pages-components/tense/components/Tense_Navbar";
import Link from "next/link";

type Tense = {
  id: string;
  title: string;
  formula: string;
  usage: string[];
  examples: { pos: string; neg: string; q: string };
  signals: string[];
  tip?: string;
  commonMistakes?: string[];
};

const data: { aspect: string; description: string; tenses: Tense[] }[] = [
  {
    aspect: "Simple (Simple)",
    description:
      "Простая форма. Описывает факты, регулярные действия, привычки, одноразовые завершённые события (в прошлом) или будущие решения/планы (контекст). Начальный уровень — легко понять и применить.",
    tenses: [
      {
        id: "present-simple",
        title: "Present Simple",
        formula: "Subject + V (s/es для 3-го лица ед. числа)",
        usage: [
          "Регулярные действия и привычки",
          "Общие истины / факты",
          "Расписания и расписания транспорта",
        ],
        examples: {
          pos: "He works every day.",
          neg: "He doesn't work on Sundays.",
          q: "Does he work on Mondays?",
        },
        signals: ["always, usually, often, never, every day, on Mondays"],
        tip: "В 3-м лице ед. числа глагол получает -s / -es (do → does).",
        commonMistakes: [
          "Писать 'He go' вместо 'He goes'.",
          "Использовать Present Continuous для рутинных действий: 'I am going to work every day' — неправильно.",
        ],
      },
      {
        id: "past-simple",
        title: "Past Simple",
        formula: "Subject + V2 (вторая форма глагола)",
        usage: [
          "Завершённые действия в конкретный момент в прошлом",
          "Последовательность действий в прошлом",
        ],
        examples: {
          pos: "She visited Paris last year.",
          neg: "She didn't visit Paris last year.",
          q: "Did she visit Paris last year?",
        },
        signals: ["yesterday, last week, in 2010, ago"],
        tip: "Для правильных глаголов добавляется -ed; для неправильных — использовать 2-ю форму.",
        commonMistakes: ["Писать 'I didn't went' вместо 'I didn't go'."],
      },
      {
        id: "future-simple",
        title: "Future Simple (will)",
        formula: "Subject + will + V1",
        usage: [
          "Решения в момент речи",
          "Прогнозы и предсказания (без доказательств)",
          "Обещания и предложения",
        ],
        examples: {
          pos: "I will call you later.",
          neg: "I won't (= will not) call you later.",
          q: "Will you help me?",
        },
        signals: ["soon, later, tomorrow (в зависимости от контекста)"],
        tip: "Для планов, уже запланированных (have arranged) чаще используют 'be going to' или Present Continuous.",
        commonMistakes: ["Смешение 'will' и 'going to' в ситуациях с планами."],
      },
    ],
  },

  {
    aspect: "Continuous (Progressive)",
    description:
      "Действия в процессе — показывают, что действие происходит в момент/временной отрезок. Более «процессно-ориентированный» аспект.",
    tenses: [
      {
        id: "present-continuous",
        title: "Present Continuous",
        formula: "Subject + am/is/are + V-ing",
        usage: [
          "Действие происходит прямо сейчас",
          "Временные ситуации",
          "Планы/договорённости на ближайшее будущее (часто)",
        ],
        examples: {
          pos: "She is reading a book now.",
          neg: "She isn't reading now.",
          q: "Is she reading now?",
        },
        signals: ["now, at the moment, currently, today"],
        tip: "Не используем для привычек (исключение: 'I'm always losing my keys' — эмоциональное преувеличение).",
        commonMistakes: [
          "Писать 'I am know' вместо 'I know' (stative verbs не используются в Continuous).",
        ],
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        formula: "Subject + was/were + V-ing",
        usage: [
          "Действие в процессе в определённый момент в прошлом",
          "Два одновременных действия в прошлом (I was doing X while he was doing Y)",
        ],
        examples: {
          pos: "They were watching TV at 8 pm.",
          neg: "They weren't watching TV at 8 pm.",
          q: "Were they watching TV at 8 pm?",
        },
        signals: ["at 7 pm, while, when (в определённом контексте)"],
        tip: "Часто используется в паре с Past Simple: 'I was cooking when he arrived.'",
      },
      {
        id: "future-continuous",
        title: "Future Continuous",
        formula: "Subject + will be + V-ing",
        usage: [
          "Действие будет происходить в определённый момент в будущем",
          "Вежливые вопросы о планах (Will you be using this?)",
        ],
        examples: {
          pos: "This time tomorrow I will be flying to London.",
          neg: "I won't be working then.",
          q: "Will you be attending the meeting?",
        },
        signals: ["at this time tomorrow, later this week (в контексте)"],
        tip: "Используется, чтобы подчеркнуть длительность в будущем в определённый момент.",
      },
    ],
  },

  {
    aspect: "Perfect",
    description:
      "Perfect подчёркивает результат — действие произошло раньше другой точки во времени и важно его последствие/результат.",
    tenses: [
      {
        id: "present-perfect",
        title: "Present Perfect",
        formula: "Subject + have/has + V3 (past participle)",
        usage: [
          "Опыт (I have been to London)",
          "Действие с результатом в настоящем (he has broken his leg — сейчас травма)",
          "С действиями, начавшимися в прошлом и продолжающимися до настоящего (с for/since)",
        ],
        examples: {
          pos: "I have visited that museum.",
          neg: "I haven't visited that museum.",
          q: "Have you ever visited that museum?",
        },
        signals: ["ever, never, already, yet, just, for, since"],
        tip: "BE careful: для конкретных законченных временных отрезков (yesterday, last year) часто используют Past Simple.",
        commonMistakes: [
          "Использовать Present Perfect с указанием точного времени в прошлом: 'I have seen him yesterday' — неправильно.",
        ],
      },
      {
        id: "past-perfect",
        title: "Past Perfect",
        formula: "Subject + had + V3",
        usage: [
          "Действие, которое произошло до другого события в прошлом",
          "Ясность последовательности в прошлом",
        ],
        examples: {
          pos: "She had left before I arrived.",
          neg: "She hadn't left before I arrived.",
          q: "Had she left before you arrived?",
        },
        signals: [
          "already, by the time, before (в контексте последовательности)",
        ],
        tip: "Past Perfect не всегда обязателен — используется, когда нужно подчеркнуть порядок действий.",
      },
      {
        id: "future-perfect",
        title: "Future Perfect",
        formula: "Subject + will have + V3",
        usage: [
          "Действие завершится к какому-то моменту в будущем",
          "Оценка того, что к указанному моменту что-то уже произойдёт",
        ],
        examples: {
          pos: "By 2026 she will have graduated.",
          neg: "She won't have finished by then.",
          q: "Will you have finished by Monday?",
        },
        signals: ["by (then), by the time, before (in future contexts)"],
        tip: "Показывает завершённость в будущем относительно другого момента.",
      },
    ],
  },

  {
    aspect: "Perfect Continuous (Perfect Progressive)",
    description:
      "Комбинирует идею длительности (Continuous) и результата/предшествования (Perfect): показывает, как долго действие длилось до определённого момента и часто указывает на результат.",
    tenses: [
      {
        id: "present-perfect-continuous",
        title: "Present Perfect Continuous",
        formula: "Subject + have/has been + V-ing",
        usage: [
          "Действие началось в прошлом и продолжается до настоящего или только что закончилось, подчёркивая длительность",
          "Подчёркивает 'сколько времени' длится действие",
        ],
        examples: {
          pos: "I have been studying for three hours.",
          neg: "I haven't been studying for three hours.",
          q: "How long have you been studying?",
        },
        signals: ["for, since, how long, all day"],
        tip: "Если важно показать результат (I have studied for three hours — акцент на факте), используем Present Perfect; если важна длительность — Present Perfect Continuous.",
        commonMistakes: [
          "Писать 'I have been knowing him' — stative verbs (know, love, etc.) обычно не употребляются в Continuous.",
        ],
      },
      {
        id: "past-perfect-continuous",
        title: "Past Perfect Continuous",
        formula: "Subject + had been + V-ing",
        usage: [
          "Длительное действие, которое длилось до определённого момента в прошлом",
          "Часто подчёркивает причину состояния в прошлом (He was tired because he had been working all day).",
        ],
        examples: {
          pos: "They had been playing for two hours before it started to rain.",
          neg: "They hadn't been playing for long before they stopped.",
          q: "How long had they been playing?",
        },
        signals: ["for, since, before (в прошлом контексте)"],
      },
      {
        id: "future-perfect-continuous",
        title: "Future Perfect Continuous",
        formula: "Subject + will have been + V-ing",
        usage: [
          "Показывает длительность действия до определённого момента в будущем",
          "Часто для оценки 'когда-то в будущем сколько времени уже будет длиться действие'",
        ],
        examples: {
          pos: "By next year I will have been working here for five years.",
          neg: "I won't have been living here that long by then.",
          q: "How long will you have been working there by 2026?",
        },
        signals: ["by then, for, by (future point)"],
        tip: "Редкое в разговорной речи; полезно в формальных/описательных контекстах и для подчёркивания длительности.",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen  py-6 sm:p-10">
      <Tense_Navbar />

      <div className="  bg-bgLight dark:bg-bgItem rounded-2xl p-6 sm:p-10 shadow-md">
        <header className="mb-6">
          <h1 className="text-3xl text-center font-bold mb-2 dark:text-bgLight">
            Английские времена — объяснение по аспектам
          </h1>
          <p className="text-gray-700 dark:text-bgLight/70">
            Материал выстроен от простого к сложному: сначала простые формы
            (Simple), затем формы процесса (Continuous), затем формы результата
            (Perfect) и в конце — сочетание длительности и результата (Perfect
            Continuous). Под каждой секцией — Present / Past / Future с
            формулами, примерами и подсказками.
          </p>
        </header>

        <nav className="mb-6 flex flex-wrap gap-3">
          {data.map((g) => (
            <Link
              key={g.aspect}
              href={`#${g.aspect.replace(/\s+/g, "-").toLowerCase()}`}
              className="my-transform text-sm px-3 py-2 rounded-full bg-blueCl text-bgLight  dark:bg-bgItem dark:border-[1px] dark:border-bgLight dark:text-bgLight dark:hover:bg-bgLight dark:hover:text-bgItem"
            >
              {g.aspect}
            </Link>
          ))}
        </nav>

        <main className="space-y-10">
          {data.map((group) => (
            <section
              id={group.aspect.replace(/\s+/g, "-").toLowerCase()}
              key={group.aspect}
            >
              <h2 className="text-2xl font-semibold mb-2 dark:text-bgLight">
                {group.aspect}
              </h2>
              <p className="text-gray-700  mb-4 dark:text-bgLight/70">
                {group.description}
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {group.tenses.map((t) => (
                  <article
                    key={t.id}
                    className="bg-slate-50 dark:bg-bgItem border dark:border-bgLight rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="text-lg font-medium mb-1 dark:text-bgLight">
                      {t.title}
                    </h3>
                    <p className="text-sm italic text-gray-600 mb-2 dark:text-bgLight/70">
                      {t.formula}
                    </p>

                    <div className="mb-2">
                      <strong className="dark:text-bgLight">
                        Когда используется:
                      </strong>
                      <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-bgLight/70">
                        {t.usage.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-2">
                      <strong className="dark:text-bgLight">Примеры:</strong>
                      <ul className="text-sm text-gray-700 ml-5 dark:text-bgLight/70">
                        <li>Утв.: {t.examples.pos}</li>
                        <li>Отриц.: {t.examples.neg}</li>
                        <li>Вопр.: {t.examples.q}</li>
                      </ul>
                    </div>

                    <div className="mb-2 text-sm">
                      <strong className="dark:text-bgLight">
                        Сигнальные слова:
                      </strong>{" "}
                      <span className="text-gray-600 dark:text-bgLight/70">
                        {t.signals.join(", ")}
                      </span>
                    </div>

                    {t.tip && (
                      <div className="mb-2 text-sm text-sky-700">
                        <strong>Совет:</strong> <span>{t.tip}</span>
                      </div>
                    )}

                    {t.commonMistakes && (
                      <div className="text-sm text-rose-700">
                        <strong>Частые ошибки:</strong>
                        <ul className="ml-5 list-disc">
                          {t.commonMistakes.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold mb-2 dark:text-bgLight">
              От простого к сложному — как учить
            </h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2 dark:text-bgLight/70">
              <li>
                <strong>Сначала освоить Simple:</strong> привычки, факты,
                регулярность. Это база.
              </li>
              <li>
                <strong>Потом Continuous:</strong> научись отличать
                действия-в-процессе; важно понимать stative verbs
                (знать/любить/понимать) — они обычно не в Continuous.
              </li>
              <li>
                <strong>Дальше Perfect:</strong> акцент на результате или опыте.
                Учись распознавать, когда важно, что действие завершилось к
                настоящему/прошлому/будущему моменту.
              </li>
              <li>
                <strong>И наконец Perfect Continuous:</strong> если нужно
                подчеркнуть <em>как долго</em> длилось действие до некоторого
                момента и какой был результат/последствие.
              </li>
            </ol>

            <div className="mt-4">
              <strong className="dark:text-bgLight">Практика:</strong>
              <ul className="ml-5 list-disc text-gray-700 dark:text-bgLight/70">
                <li>
                  Делай короткие упражнения: 5 предложений в каждом времени.
                </li>
                <li>
                  Составляй пары предложений для сравнения: Simple vs
                  Continuous, Present Perfect vs Past Simple.
                </li>
                <li>
                  Работай со «сигнальными словами» — они часто подсказывают
                  правильное время.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 dark:text-bgLight">
              Короткое сведение — что отличает аспекты
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-bgItem dark:border-bgLight dark:border-[1px] p-4 rounded ">
                <h3 className="font-medium dark:text-bgLight">Simple</h3>
                <p className="text-sm text-gray-700 dark:text-bgLight/70">
                  Фокус на факте: происходит регулярно или завершилось. Не
                  показывает длительность.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded  dark:bg-bgItem dark:border-bgLight dark:border-[1px]">
                <h3 className="font-medium dark:text-bgLight">Continuous</h3>
                <p className="text-sm text-gray-700  dark:text-bgLight/70">
                  Фокус на процессе/длительности в моменте. Подчёркивает, что
                  действие в развитии.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded  dark:bg-bgItem dark:border-bgLight dark:border-[1px]">
                <h3 className="font-medium dark:text-bgLight">Perfect</h3>
                <p className="text-sm text-gray-700  dark:text-bgLight/70">
                  Фокус на результате: действие произошло до некоторого момента
                  (и важен результат).
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded  dark:bg-bgItem dark:border-bgLight dark:border-[1px]">
                <h3 className="font-medium dark:text-bgLight">
                  Perfect Continuous
                </h3>
                <p className="text-sm text-gray-700  dark:text-bgLight/70">
                  Сочетает длительность и результат — сколько длилось действие
                  до точки и какой эффект.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 dark:text-bgLight">
              Ещё советы и ошибки уровня Advanced
            </h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2 dark:text-bgLight/70">
              <li>
                <strong>Stative verbs:</strong> глаголы состояния (know, love,
                belong, seem) обычно не употребляются в Continuous — «I know» ≠
                *«I am knowing»*.
              </li>
              <li>
                <strong>Present Perfect vs Past Simple:</strong> если есть
                указание конкретного времени в прошлом — Past Simple. Если важен
                опыт/результат — Present Perfect.
              </li>
              <li>
                <strong>Perfect Continuous vs Perfect:</strong> выбери
                Continuous, если хочешь подчеркнуть длительность (How long?), и
                Simple, если важен результат (I have read the book — акцент на
                факте прочтения).
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
