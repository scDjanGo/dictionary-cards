// export const metadata = {
//   title: "Modal Verbs — Easy English",
//   description: "Полное руководство по модальным глаголам: правила использования, построение вопросов и отрицаний, примеры и упражнения.",
// };

// type Modal = {
//   verb: string;
//   meaning: string;
//   use: string;
//   example: string;
// };

// const MODALS: Modal[] = [
//   { verb: "can", meaning: "умение / возможность / разрешение", use: "ability, permission, possibility", example: "I can swim." },
//   { verb: "could", meaning: "прошлая способность / вежливая просьба / вероятность", use: "past ability, polite request, possibility", example: "Could you help me?" },
//   { verb: "may", meaning: "формальное разрешение / возможность", use: "permission, possibility (formal)", example: "May I come in?" },
//   { verb: "might", meaning: "меньшая вероятность", use: "possibility (less certain)", example: "It might rain." },
//   { verb: "must", meaning: "внутренняя обязанность / сильный вывод", use: "obligation, logical deduction", example: "You must stop." },
//   { verb: "shall", meaning: "предложения / формальные вопросы (BR)", use: "offers, suggestions (esp. British English)", example: "Shall we begin?" },
//   { verb: "should", meaning: "совет / рекомендация", use: "advice, recommendation", example: "You should rest." },
//   { verb: "will", meaning: "будущее / обещания / воля", use: "future, promises, willingness", example: "I will call you." },
//   { verb: "would", meaning: "вежливость / гипотеза / привычки в прошлом", use: "politeness, hypotheticals, past habits", example: "I would like some tea." },
//   { verb: "ought to", meaning: "моральный долг / рекомендация", use: "moral duty, recommendation", example: "You ought to apologize." },
//   { verb: "need", meaning: "нужда / необходимость", use: "necessity or lack of it", example: "You need to study. / You needn't worry." },
//   { verb: "dare", meaning: "смелость / отвага сделать что-то", use: "courage, challenge", example: "Dare he speak the truth?" },
//   { verb: "used to", meaning: "привычка или состояние в прошлом", use: "past habitual actions", example: "I used to smoke." },
//   // Полумодальные (semi-modals)
//   { verb: "have to", meaning: "внешняя необходимость / обязательство", use: "external obligation", example: "I have to work tomorrow." },
//   { verb: "be able to", meaning: "способность / умение (часто для будущего и прошедшего)", use: "ability", example: "She will be able to come." },
//   { verb: "be allowed to", meaning: "разрешение", use: "permission", example: "Children are allowed to play outside." },
//   { verb: "be supposed to", meaning: "ожидание / предположение", use: "expectation, obligation", example: "You are supposed to finish it." },
//   { verb: "ought not to", meaning: "моральный долг / запрет", use: "moral duty, prohibition", example: "You ought not to lie." },
//   { verb: "needn't", meaning: "отсутствие необходимости", use: "lack of necessity", example: "You needn't worry." },
//   { verb: "shan't", meaning: "отрицательная форма shall (BR)", use: "formal negation, British English", example: "I shan't be late." },
//   { verb: "won't", meaning: "отрицательная форма will", use: "refusal, future negation", example: "I won't do it." },
//   { verb: "can't", meaning: "невозможность / запрет", use: "impossibility, prohibition", example: "You can't park here." },
//   { verb: "couldn't", meaning: "прошедшая невозможность / отказ", use: "past impossibility, refusal", example: "He couldn't open the door." },
//   { verb: "might not", meaning: "неуверенная отрицательная возможность", use: "possibility not happening", example: "It might not rain." },
//   { verb: "mustn't", meaning: "запрет", use: "prohibition", example: "You mustn't touch that." },
//   { verb: "shouldn't", meaning: "нежелательное действие / совет", use: "advice not to do something", example: "You shouldn't lie." },
//   { verb: "wouldn't", meaning: "отказ / условие", use: "refusal, hypothetical situations", example: "I wouldn't do that if I were you." },
// ];

// const GRAMMAR_RULES = [
//   {
//     title: "Образование утвердительных предложений",
//     content: "Подлежащее + модальный глагол + основной глагол (в инфинитиве без to)",
//     examples: ["I can speak English.", "She must finish her work.", "They should study more."]
//   },
//   {
//     title: "Образование отрицательных предложений",
//     content: "Подлежащее + модальный глагол + not + основной глагол",
//     examples: ["I cannot swim.", "You must not smoke here.", "He should not be late."]
//   },
//   {
//     title: "Образование вопросов",
//     content: "Модальный глагол + подлежащее + основной глагол",
//     examples: ["Can you help me?", "Should we leave now?", "May I ask a question?"]
//   },
//   {
//     title: "Краткие ответы",
//     content: "Yes/No + подлежащее + модальный глагол (в утвердительной или отрицательной форме)",
//     examples: ["Yes, I can. / No, I can't.", "Yes, you may. / No, you may not."]
//   }
// ];

// const TENSE_COMPARISON = [
//   {
//     tense: "Настоящее время",
//     examples: ["I can swim", "She must go", "They should study"]
//   },
//   {
//     tense: "Прошедшее время",
//     examples: ["I could swim when I was young", "She had to go yesterday", "They should have studied"]
//   },
//   {
//     tense: "Будущее время",
//     examples: ["I will be able to swim", "She will have to go", "They will need to study"]
//   }
// ];

// export default function ModalVerbsPage() {
//   return (
//     <main className="min-h-screen py-6 bg-bgLight dark:bg-bgDark transition-colors duration-200">
//       <div className="max-w-5xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100 max-895px:text-2xl text-center">
//             Модальные глаголы (Modal Verbs)
//           </h1>
//           <p className="text-lg text-slate-700 dark:text-slate-300 text-center">
//             Полное руководство по использованию модальных глаголов в английском языке
//           </p>
//         </header>

//         {/* Основная информация */}
//         <section className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-10">
//           <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//             <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Что такое модальные глаголы?</h2>
//             <p className="text-slate-700 dark:text-slate-300 mb-3">
//               Модальные глаголы — это вспомогательные глаголы, которые выражают отношение говорящего к действию: 
//               возможность, обязанность, разрешение, предположение, вероятность и т.д.
//             </p>
//             <p className="text-slate-700 dark:text-slate-300">
//               Они не изменяются по лицам и числам и обычно используются с инфинитивом без «to» 
//               (например, <code className="rounded px-1 bg-slate-100 dark:bg-slate-800">can go</code>).
//             </p>
//           </article>

//           <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//             <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Основные функции</h2>
//             <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1">
//               <li>Выражать <strong>возможность</strong> и <strong>вероятность</strong></li>
//               <li>Выражать <strong>обязанность</strong> или <strong>необходимость</strong></li>
//               <li>Просить или давать <strong>разрешение</strong></li>
//               <li>Давать <strong>советы</strong> и <strong>рекомендации</strong></li>
//               <li>Выражать <strong>способность</strong> или <strong>умение</strong></li>
//               <li>Делать <strong>предложения</strong></li>
//             </ul>
//           </article>

//           <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//             <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Грамматические особенности</h2>
//             <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1">
//               <li>Не имеют окончания -s в 3-м лице единственного числа</li>
//               <li>Не требуют вспомогательных глаголов для вопросов и отрицаний</li>
//               <li>Используются с основным глаголом в инфинитиве без to</li>
//               <li>Не имеют форм инфинитива, причастия или герундия</li>
//             </ul>
//           </article>
//         </section>

//         {/* Подробная грамматика */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Грамматические конструкции</h2>
          
//           <div className="grid gap-6 md:grid-cols-2">
//             {GRAMMAR_RULES.map((rule, index) => (
//               <div key={index} className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//                 <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">{rule.title}</h3>
//                 <p className="text-slate-700 dark:text-slate-300 mb-4">{rule.content}</p>
//                 <div className="space-y-2">
//                   {rule.examples.map((example, i) => (
//                     <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
//                       <code className="text-slate-800 dark:text-slate-200">{example}</code>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Таблица модальных глаголов */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Полный список модальных глаголов</h2>

//           <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-[var(--color-bgItem)]/80">
//             <table className="w-full table-auto text-left">
//               <thead className="uppercase text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50">
//                 <tr>
//                   <th className="px-6 py-3 font-semibold">Глагол</th>
//                   <th className="px-6 py-3 font-semibold">Значение</th>
//                   <th className="px-6 py-3 font-semibold">Когда использовать</th>
//                   <th className="px-6 py-3 font-semibold">Пример</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {MODALS.map((m, index) => (
//                   <tr 
//                     key={m.verb} 
//                     className={`border-t border-slate-100 dark:border-slate-800 ${
//                       index % 2 === 0 ? 'bg-white/30 dark:bg-slate-800/30' : 'bg-slate-50/30 dark:bg-slate-700/30'
//                     }`}
//                   >
//                     <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">
//                       <code className="text-sm font-bold">{m.verb}</code>
//                     </td>
//                     <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{m.meaning}</td>
//                     <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{m.use}</td>
//                     <td className="px-6 py-4 text-slate-700 dark:text-slate-300 italic">
//                       "{m.example}"
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Временные формы */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Модальные глаголы в разных временах</h2>
          
//           <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//             <div className="grid gap-6 md:grid-cols-3">
//               {TENSE_COMPARISON.map((tense, index) => (
//                 <div key={index} className="text-center">
//                   <h3 className="text-lg font-semibold mb-3 text-bgItem dark:text-bgLight">{tense.tense}</h3>
//                   <div className="space-y-2">
//                     {tense.examples.map((example, i) => (
//                       <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
//                         <code className="text-slate-800 dark:text-slate-200 text-sm">{example}</code>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
//               <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Важное примечание</h4>
//               <p className="text-amber-700 dark:text-amber-300 text-sm">
//                 Многие модальные глаголы не имеют всех временных форм. Для выражения действий в прошлом 
//                 и будущем используются их эквиваленты: can → be able to, must → have to, may → be allowed to.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Сравнение похожих глаголов */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Сравнение похожих модальных глаголов</h2>
          
//           <div className="grid gap-6">
//             <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Must vs Have to</h3>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Must</h4>
//                   <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
//                     <li>Внутренняя обязанность (личное решение)</li>
//                     <li>Сильная рекомендация</li>
//                     <li>Логический вывод</li>
//                     <li><em>"I must finish this report."</em></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Have to</h4>
//                   <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
//                     <li>Внешняя необходимость (правила, законы)</li>
//                     <li>Объективная обязанность</li>
//                     <li>Имеет все временные формы</li>
//                     <li><em>"I have to wear a uniform at work."</em></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Can vs Could vs May</h3>
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div>
//                   <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Can</h4>
//                   <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
//                     <li>Неформальное разрешение</li>
//                     <li>Умение, возможность</li>
//                     <li><em>"Can I borrow your pen?"</em></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Could</h4>
//                   <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
//                     <li>Вежливая просьба</li>
//                     <li>Прошлое умение</li>
//                     <li>Гипотетическая возможность</li>
//                     <li><em>"Could you help me?"</em></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">May</h4>
//                   <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
//                     <li>Формальное разрешение</li>
//                     <li>Вероятность</li>
//                     <li>Официальный стиль</li>
//                     <li><em>"May I leave early?"</em></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Практические советы */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Практические советы по использованию</h2>

//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="font-semibold text-bgItem dark:text-bgLight">Умение</h3>
//               <p className="text-slate-700 dark:text-slate-300 text-sm">
//                 Используй <code className="text-xs">can / could / be able to</code>. <em>Could</em> — вежливый или прошлый вариант.
//               </p>
//             </div>

//             <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="font-semibold text-bgItem dark:text-bgLight">Совет</h3>
//               <p className="text-slate-700 dark:text-slate-300 text-sm">
//                 Используй <code className="text-xs">should / ought to / had better</code>.
//               </p>
//             </div>

//             <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="font-semibold text-bgItem dark:text-bgLight">Обязанность</h3>
//               <p className="text-slate-700 dark:text-slate-300 text-sm">
//                 Используй <code className="text-xs">must / have to / need to</code>.
//               </p>
//             </div>

//             <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="font-semibold text-bgItem dark:text-bgLight">Вероятность</h3>
//               <p className="text-slate-700 dark:text-slate-300 text-sm">
//                 От большей к меньшей: <code className="text-xs">will → should → may → might → could</code>.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Частые ошибки */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Частые ошибки и как их избежать</h2>
//           <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✗</span>
//                 <div>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">I can to swim</code>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">I can swim</code>
//                   <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">После модальных глаголов не используется частица "to"</p>
//                 </div>
//               </li>
              
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✗</span>
//                 <div>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">He musts go</code>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">He must go</code>
//                   <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Модальные глаголы не изменяются по лицам и числам</p>
//                 </div>
//               </li>
              
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✗</span>
//                 <div>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">Do I can help?</code>
//                   <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
//                   <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">Can I help?</code>
//                   <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Для вопросов не нужны вспомогательные глаголы</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Практика */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Практические упражнения</h2>

//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Упражнение 1: Заполните пропуски</h3>
//               <p className="text-slate-700 dark:text-slate-300 mb-4">Выберите подходящий модальный глагол:</p>

//               <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
//                 <li>I ___ play the piano when I was young. (<em>past ability</em>)</li>
//                 <li>___ I open the window? (<em>permission</em>)</li>
//                 <li>You ___ see a doctor. (<em>advice</em>)</li>
//                 <li>It ___ rain later. (<em>possibility</em>)</li>
//                 <li>I ___ go — I promised. (<em>promise</em>)</li>
//                 <li>You ___ smoke here. (<em>prohibition</em>)</li>
//                 <li>___ you speak French? (<em>ability</em>)</li>
//                 <li>We ___ finish this by tomorrow. (<em>obligation</em>)</li>
//               </ol>

//               <details className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
//                 <summary className="cursor-pointer font-medium text-bgItem dark:text-bgLight">Показать ответы</summary>
//                 <ol className="list-decimal pl-5 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
//                   <li>could</li>
//                   <li>May / Can</li>
//                   <li>should</li>
//                   <li>might / may</li>
//                   <li>will</li>
//                   <li>mustn't / can't</li>
//                   <li>Can</li>
//                   <li>must / have to</li>
//                 </ol>
//               </details>
//             </div>

//             <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
//               <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Упражнение 2: Перефразируйте</h3>
//               <p className="text-slate-700 dark:text-slate-300 mb-4">Перефразируйте предложения, используя модальные глаголы:</p>

//               <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
//                 <li>It's necessary for me to finish this work. → I ___ finish this work.</li>
//                 <li>It's a good idea to study regularly. → You ___ study regularly.</li>
//                 <li>It's prohibited to park here. → You ___ park here.</li>
//                 <li>It's possible that she will come. → She ___ come.</li>
//                 <li>I am able to speak Spanish. → I ___ speak Spanish.</li>
//               </ol>

//               <details className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
//                 <summary className="cursor-pointer font-medium text-bgItem dark:text-bgLight">Показать ответы</summary>
//                 <ol className="list-decimal pl-5 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
//                   <li>must / have to</li>
//                   <li>should</li>
//                   <li>mustn't / can't</li>
//                   <li>may / might / could</li>
//                   <li>can</li>
//                 </ol>
//               </details>
//             </div>
//           </div>
//         </section>

//       </div>
//     </main>
//   );
// }




export const metadata = {
  title: "Modal Verbs — Easy English",
  description: "Полное руководство по модальным глаголам: правила использования, построение вопросов и отрицаний, примеры и упражнения.",
};

type Modal = {
  verb: string;
  meaning: string;
  use: string;
  example: string;
};

const MODALS: Modal[] = [
  { verb: "can", meaning: "умение / возможность / разрешение", use: "ability, permission, possibility", example: "I can swim." },
  { verb: "could", meaning: "прошлая способность / вежливая просьба / вероятность", use: "past ability, polite request, possibility", example: "Could you help me?" },
  { verb: "may", meaning: "формальное разрешение / возможность", use: "permission, possibility (formal)", example: "May I come in?" },
  { verb: "might", meaning: "меньшая вероятность", use: "possibility (less certain)", example: "It might rain." },
  { verb: "must", meaning: "внутренняя обязанность / сильный вывод", use: "obligation, logical deduction", example: "You must stop." },
  { verb: "shall", meaning: "предложения / формальные вопросы (BR)", use: "offers, suggestions (esp. British English)", example: "Shall we begin?" },
  { verb: "should", meaning: "совет / рекомендация", use: "advice, recommendation", example: "You should rest." },
  { verb: "will", meaning: "будущее / обещания / воля", use: "future, promises, willingness", example: "I will call you." },
  { verb: "would", meaning: "вежливость / гипотеза / привычки в прошлом", use: "politeness, hypotheticals, past habits", example: "I would like some tea." },
  { verb: "ought to", meaning: "моральный долг / рекомендация", use: "moral duty, recommendation", example: "You ought to apologize." },
  { verb: "need", meaning: "нужда / необходимость", use: "necessity or lack of it", example: "You need to study. / You needn't worry." },
  { verb: "dare", meaning: "смелость / отвага сделать что-то", use: "courage, challenge", example: "Dare he speak the truth?" },
  { verb: "used to", meaning: "привычка или состояние в прошлом", use: "past habitual actions", example: "I used to smoke." },
  // Полумодальные (semi-modals)
  { verb: "have to", meaning: "внешняя необходимость / обязательство", use: "external obligation", example: "I have to work tomorrow." },
  { verb: "be able to", meaning: "способность / умение (часто для будущего и прошедшего)", use: "ability", example: "She will be able to come." },
  { verb: "be allowed to", meaning: "разрешение", use: "permission", example: "Children are allowed to play outside." },
  { verb: "be supposed to", meaning: "ожидание / предположение", use: "expectation, obligation", example: "You are supposed to finish it." },
  { verb: "ought not to", meaning: "моральный долг / запрет", use: "moral duty, prohibition", example: "You ought not to lie." },
  { verb: "needn't", meaning: "отсутствие необходимости", use: "lack of necessity", example: "You needn't worry." },
  { verb: "shan't", meaning: "отрицательная форма shall (BR)", use: "formal negation, British English", example: "I shan't be late." },
  { verb: "won't", meaning: "отрицательная форма will", use: "refusal, future negation", example: "I won't do it." },
  { verb: "can't", meaning: "невозможность / запрет", use: "impossibility, prohibition", example: "You can't park here." },
  { verb: "couldn't", meaning: "прошедшая невозможность / отказ", use: "past impossibility, refusal", example: "He couldn't open the door." },
  { verb: "might not", meaning: "неуверенная отрицательная возможность", use: "possibility not happening", example: "It might not rain." },
  { verb: "mustn't", meaning: "запрет", use: "prohibition", example: "You mustn't touch that." },
  { verb: "shouldn't", meaning: "нежелательное действие / совет", use: "advice not to do something", example: "You shouldn't lie." },
  { verb: "wouldn't", meaning: "отказ / условие", use: "refusal, hypothetical situations", example: "I wouldn't do that if I were you." },
];

const GRAMMAR_RULES = [
  {
    title: "Образование утвердительных предложений",
    content: "Подлежащее + модальный глагол + основной глагол (в инфинитиве без to)",
    examples: ["I can speak English.", "She must finish her work.", "They should study more."]
  },
  {
    title: "Образование отрицательных предложений",
    content: "Подлежащее + модальный глагол + not + основной глагол",
    examples: ["I cannot swim.", "You must not smoke here.", "He should not be late."]
  },
  {
    title: "Образование вопросов",
    content: "Модальный глагол + подлежащее + основной глагол",
    examples: ["Can you help me?", "Should we leave now?", "May I ask a question?"]
  },
  {
    title: "Краткие ответы",
    content: "Yes/No + подлежащее + модальный глагол (в утвердительной или отрицательной форме)",
    examples: ["Yes, I can. / No, I can't.", "Yes, you may. / No, you may not."]
  }
];

const TENSE_COMPARISON = [
  {
    tense: "Настоящее время",
    examples: ["I can swim", "She must go", "They should study"]
  },
  {
    tense: "Прошедшее время",
    examples: ["I could swim when I was young", "She had to go yesterday", "They should have studied"]
  },
  {
    tense: "Будущее время",
    examples: ["I will be able to swim", "She will have to go", "They will need to study"]
  }
];

export default function ModalVerbsPage() {
  return (
    <main className="min-h-screen py-6 bg-bgLight dark:bg-bgDark transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100 max-895px:text-2xl text-center">
            Модальные глаголы (Modal Verbs)
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 text-center">
            Полное руководство по использованию модальных глаголов в английском языке
          </p>
        </header>

        {/* Основная информация */}
        <section className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-10">
          <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Что такое модальные глаголы?</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Модальные глаголы — это вспомогательные глаголы, которые выражают отношение говорящего к действию: 
              возможность, обязанность, разрешение, предположение, вероятность и т.д.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Основные модальные глаголы не изменяются по лицам и числам и обычно используются с инфинитивом без «to» 
              (например, <code className="rounded px-1 bg-slate-100 dark:bg-slate-800">can go</code>).
            </p>
          </article>

          <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Основные функции</h2>
            <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1">
              <li>Выражать <strong>возможность</strong> и <strong>вероятность</strong></li>
              <li>Выражать <strong>обязанность</strong> или <strong>необходимость</strong></li>
              <li>Просить или давать <strong>разрешение</strong></li>
              <li>Давать <strong>советы</strong> и <strong>рекомендации</strong></li>
              <li>Выражать <strong>способность</strong> или <strong>умение</strong></li>
              <li>Делать <strong>предложения</strong></li>
            </ul>
          </article>

          <article className="rounded-2xl p-6 shadow-sm bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-semibold mb-2 text-bgItem dark:text-bgLight">Грамматические особенности</h2>
            <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1">
              <li>Не имеют окончания -s в 3-м лице единственного числа</li>
              <li>Не требуют вспомогательных глаголов для вопросов и отрицаний</li>
              <li>Основные модальные глаголы используют инфинитив без to</li>
              <li>Не имеют форм инфинитива, причастия или герундия</li>
            </ul>
          </article>
        </section>

        {/* Важное уточнение про TO */}
        <section className="mb-8">
          <div className="rounded-2xl p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">❗ Важное уточнение: когда используется TO</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">Основные модальные глаголы (БЕЗ to)</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  <strong>Can, could, may, might, must, shall, should, will, would</strong> — используются БЕЗ частицы to:
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">I can swim</code>
                    <span className="text-red-500 ml-2">✗ I can to swim</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">You must go</code>
                    <span className="text-red-500 ml-2">✗ You must to go</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">She should study</code>
                    <span className="text-red-500 ml-2">✗ She should to study</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">Полумодальные глаголы (С to)</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  <strong>Have to, ought to, used to, be able to, be allowed to</strong> — требуют частицу to:
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">I have to work</code>
                    <span className="text-green-500 ml-2">✓ Правильно</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">You ought to help</code>
                    <span className="text-green-500 ml-2">✓ Правильно</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-blue-800/30">
                    <code className="text-blue-800 dark:text-blue-200">She used to smoke</code>
                    <span className="text-green-500 ml-2">✓ Правильно</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">💡 Запомните!</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                <strong>Основные модальные глаголы</strong> (can, could, may, might, must, shall, should, will, would) — <strong>БЕЗ to</strong><br/>
                <strong>Полумодальные глаголы</strong> (have to, ought to, used to) и <strong>эквиваленты</strong> (be able to) — <strong>С to</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Подробная грамматика */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Грамматические конструкции</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {GRAMMAR_RULES.map((rule, index) => (
              <div key={index} className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">{rule.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{rule.content}</p>
                <div className="space-y-2">
                  {rule.examples.map((example, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <code className="text-slate-800 dark:text-slate-200">{example}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Таблица модальных глаголов */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Полный список модальных глаголов</h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-[var(--color-bgItem)]/80">
            <table className="w-full table-auto text-left">
              <thead className="uppercase text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-3 font-semibold">Глагол</th>
                  <th className="px-6 py-3 font-semibold">Значение</th>
                  <th className="px-6 py-3 font-semibold">Когда использовать</th>
                  <th className="px-6 py-3 font-semibold">Пример</th>
                </tr>
              </thead>
              <tbody>
                {MODALS.map((m, index) => (
                  <tr 
                    key={m.verb} 
                    className={`border-t border-slate-100 dark:border-slate-800 ${
                      index % 2 === 0 ? 'bg-white/30 dark:bg-slate-800/30' : 'bg-slate-50/30 dark:bg-slate-700/30'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">
                      <code className={`text-sm font-bold ${
                        m.verb.includes('to') ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                      }`}>
                        {m.verb}
                        {m.verb.includes('to') && ' ✓'}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{m.meaning}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{m.use}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300 italic">
                      "{m.example}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-slate-700 dark:text-slate-300">Основные модальные глаголы (без to)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-slate-700 dark:text-slate-300">Полумодальные глаголы (с to)</span>
            </div>
          </div>
        </section>

        {/* Остальные секции остаются без изменений */}
        {/* Временные формы */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Модальные глаголы в разных временах</h2>
          
          <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
            <div className="grid gap-6 md:grid-cols-3">
              {TENSE_COMPARISON.map((tense, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-bgItem dark:text-bgLight">{tense.tense}</h3>
                  <div className="space-y-2">
                    {tense.examples.map((example, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <code className="text-slate-800 dark:text-slate-200 text-sm">{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Важное примечание</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Многие модальные глаголы не имеют всех временных форм. Для выражения действий в прошлом 
                и будущем используются их эквиваленты: can → be able to, must → have to, may → be allowed to.
                Обратите внимание, что эквиваленты используют частицу <strong>to</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Сравнение похожих глаголов */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Сравнение похожих модальных глаголов</h2>
          
          <div className="grid gap-6">
            <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Must vs Have to</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Must <span className="text-sm text-slate-500">(без to)</span></h4>
                  <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                    <li>Внутренняя обязанность (личное решение)</li>
                    <li>Сильная рекомендация</li>
                    <li>Логический вывод</li>
                    <li><em>"I must finish this report."</em></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Have to <span className="text-sm text-slate-500">(с to)</span></h4>
                  <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                    <li>Внешняя необходимость (правила, законы)</li>
                    <li>Объективная обязанность</li>
                    <li>Имеет все временные формы</li>
                    <li><em>"I have to wear a uniform at work."</em></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Can vs Could vs May</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Can <span className="text-sm text-slate-500">(без to)</span></h4>
                  <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                    <li>Неформальное разрешение</li>
                    <li>Умение, возможность</li>
                    <li><em>"Can I borrow your pen?"</em></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Could <span className="text-sm text-slate-500">(без to)</span></h4>
                  <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                    <li>Вежливая просьба</li>
                    <li>Прошлое умение</li>
                    <li>Гипотетическая возможность</li>
                    <li><em>"Could you help me?"</em></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">May <span className="text-sm text-slate-500">(без to)</span></h4>
                  <ul className="list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                    <li>Формальное разрешение</li>
                    <li>Вероятность</li>
                    <li>Официальный стиль</li>
                    <li><em>"May I leave early?"</em></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Практические советы */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Практические советы по использованию</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-bgItem dark:text-bgLight">Умение</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Используй <code className="text-xs">can / could</code> (без to) или <code className="text-xs">be able to</code> (с to).
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-bgItem dark:text-bgLight">Совет</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Используй <code className="text-xs">should / ought to</code> — обрати внимание на to в ought to.
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-bgItem dark:text-bgLight">Обязанность</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Используй <code className="text-xs">must</code> (без to) или <code className="text-xs">have to</code> (с to).
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-bgItem dark:text-bgLight">Прошлые привычки</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Используй <code className="text-xs">used to</code> (обязательно с to).
              </p>
            </div>
          </div>
        </section>

        {/* Частые ошибки - обновленная версия */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Частые ошибки и как их избежать</h2>
          <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">I can to swim</code>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">I can swim</code>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Основные модальные глаголы (can, could, may, etc.) не используют "to"</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">I must study yesterday</code>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">I had to study yesterday</code>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Must не имеет прошедшего времени, используем have to</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Неправильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm">You ought help</code>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Правильно:</span>
                  <code className="mx-2 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">You ought to help</code>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Ought to всегда требует частицу "to"</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Практика - обновленные упражнения */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Практические упражнения</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Упражнение 1: Выберите правильный вариант</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Выберите подходящий модальный глагол:</p>

              <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                <li>I ___ play the piano when I was young. (could / can to)</li>
                <li>You ___ finish your homework before watching TV. (must / have)</li>
                <li>She ___ speak three languages fluently. (is able to / can to)</li>
                <li>We ___ wear a uniform at school. (ought / have to)</li>
                <li>___ I ask you a question? (May to / May)</li>
                <li>They ___ come to the party tomorrow. (might / might to)</li>
                <li>You ___ smoke in this building. (mustn't to / mustn't)</li>
                <li>I ___ wake up early when I was a student. (used to / use)</li>
              </ol>

              <details className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <summary className="cursor-pointer font-medium text-bgItem dark:text-bgLight">Показать ответы</summary>
                <ol className="list-decimal pl-5 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
                  <li>could</li>
                  <li>must</li>
                  <li>is able to</li>
                  <li>have to</li>
                  <li>May</li>
                  <li>might</li>
                  <li>mustn't</li>
                  <li>used to</li>
                </ol>
              </details>
            </div>

            <div className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-3 text-bgItem dark:text-bgLight">Упражнение 2: Исправьте ошибки</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Исправьте ошибки в использовании модальных глаголов:</p>

              <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                <li>I can to speak English well.</li>
                <li>You must to finish your work.</li>
                <li>She should studies more.</li>
                <li>We ought help our parents.</li>
                <li>They might to come later.</li>
                <li>He can swimming very fast.</li>
                <li>You have finish your homework.</li>
                <li>I used playing tennis every day.</li>
              </ol>

              <details className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <summary className="cursor-pointer font-medium text-bgItem dark:text-bgLight">Показать ответы</summary>
                <ol className="list-decimal pl-5 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
                  <li>I can speak English well.</li>
                  <li>You must finish your work.</li>
                  <li>She should study more.</li>
                  <li>We ought to help our parents.</li>
                  <li>They might come later.</li>
                  <li>He can swim very fast.</li>
                  <li>You have to finish your homework.</li>
                  <li>I used to play tennis every day.</li>
                </ol>
              </details>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}