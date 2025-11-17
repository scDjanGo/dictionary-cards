// app/practice/page.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
// import { Dialogue, UserRecording, PronunciationFeedback } from '@/types/practice';
// import { SpeechRecognitionService } from '@/utils/speechRecognition';
import { Dialogue, UserRecording, PronunciationFeedback } from '@/lib/types/types';
import { SpeechRecognitionService } from '@/features/features/speech-recognation';



const DIALOGUES: Dialogue[] = [
  {
    id: 1,
    title: "Знакомство в кафе",
    level: "Начальный",
    description: "Простой диалог для отработки базовых фраз",
    lines: [
      { 
        speaker: "Sarah", 
        text: "Hello, my name is Sarah. What's your name?", 
        translation: "Привет, меня зовут Сара. Как тебя звать?",
        expectedWords: ["hello", "my", "name", "is", "sarah", "what's", "your", "name"],
        difficulty: 1
      },
      { 
        speaker: "John", 
        text: "Hi Sarah, I'm John. Nice to meet you!", 
        translation: "Привет Сара, я Джон. Приятно познакомиться!",
        expectedWords: ["hi", "sarah", "i'm", "john", "nice", "to", "meet", "you"],
        difficulty: 1
      },
      // ... остальные диалоги
    ]
  },
  // ... другие диалоги
];

const PRONUNCIATION_TIPS = {
  common: [
    "Говорите четко и не торопитесь",
    "Обращайте внимание на ударения в словах",
    "Соблюдайте интонацию предложений",
    "Делайте паузы между смысловыми группами"
  ],
  specific: {
    "th": "Для звука 'th' поместите язык между зубами",
    "r": "Английский 'r' произносится без сильной вибрации",
    "w/v": "Различайте звуки 'w' (губы округлены) и 'v' (нижняя губа к верхним зубам)"
  }
};

export default function PracticePage() {
  const [selectedDialogue, setSelectedDialogue] = useState<Dialogue | null>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userRecordings, setUserRecordings] = useState<UserRecording[]>([]);
  const [feedback, setFeedback] = useState<PronunciationFeedback[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [recognitionService, setRecognitionService] = useState<SpeechRecognitionService | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Инициализация сервиса распознавания речи
    const service = new SpeechRecognitionService();
    if (service.initialize('en-US')) {
      setRecognitionService(service);
    } else {
      console.warn('Speech recognition not supported in this browser');
    }
  }, []);

  const startRecording = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        setIsProcessing(true);
        
        try {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          // Распознавание речи
          if (recognitionService && selectedDialogue) {
            const result = await recognitionService.startRecognition();
            const analysis = recognitionService.analyzePronunciation(
              selectedDialogue.lines[currentLine].text.toLowerCase(),
              result.transcript.toLowerCase(),
              result.confidence
            );

            const newRecording: UserRecording = {
              lineIndex: currentLine,
              audioUrl,
              text: selectedDialogue.lines[currentLine].text,
              timestamp: new Date().toLocaleTimeString(),
              transcribedText: result.transcript,
              confidence: result.confidence
            };

            setUserRecordings(prev => [...prev, newRecording]);
            generateFeedback(currentLine, result.transcript, result.confidence, analysis);
          }
        } catch (error) {
          console.error('Error processing recording:', error);
        } finally {
          setIsProcessing(false);
        }
      };

      mediaRecorder.start(100); // Записываем чанки каждые 100ms
      setIsRecording(true);

      // Автоматическая остановка через 10 секунд
      setTimeout(() => {
        if (isRecording) {
          stopRecording();
        }
      }, 10000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Не удалось получить доступ к микрофону. Проверьте разрешения браузера.');
    }
  };

  const stopRecording = (): void => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const generateFeedback = (
    lineIndex: number, 
    transcribedText: string, 
    confidence: number,
    wordAnalysis: any[]
  ): void => {
    const line = selectedDialogue!.lines[lineIndex];
    
    const mistakes: string[] = [];
    const tips: string[] = [];

    // Анализ точности произношения
    const accuracy = calculateAccuracy(line.text.toLowerCase(), transcribedText.toLowerCase());
    const score = Math.floor((accuracy + confidence) * 50); // Комбинированная оценка

    // Определяем ошибки
    if (accuracy < 0.8) {
      mistakes.push("Низкая точность произношения слов");
      tips.push("Слушайте внимательнее оригинальное произношение и повторяйте");
    }

    if (confidence < 0.6) {
      mistakes.push("Нечеткая речь или фоновый шум");
      tips.push("Говорите громче и четче, уменьшите фоновый шум");
    }

    // Анализ конкретных слов
    const incorrectWords = wordAnalysis.filter(word => !word.isCorrect);
    if (incorrectWords.length > 0) {
      mistakes.push(`Проблемы с произношением слов: ${incorrectWords.map(w => w.expected).join(', ')}`);
      tips.push("Отработайте проблемные слова отдельно");
    }

    // Добавляем общие советы
    tips.push(PRONUNCIATION_TIPS.common[Math.floor(Math.random() * PRONUNCIATION_TIPS.common.length)]);

    const newFeedback: PronunciationFeedback = {
      lineIndex,
      text: line.text,
      transcribedText,
      mistakes,
      tips,
      score: Math.min(100, Math.max(0, score)),
      confidence,
      wordAnalysis
    };

    setFeedback(prev => [...prev, newFeedback]);
  };

  const calculateAccuracy = (expected: string, actual: string): number => {
    const expectedWords = expected.split(/\s+/);
    const actualWords = actual.split(/\s+/);
    
    let matches = 0;
    expectedWords.forEach((expectedWord, index) => {
      if (actualWords[index] && expectedWord === actualWords[index]) {
        matches++;
      }
    });
    
    return matches / expectedWords.length;
  };

  const nextLine = (): void => {
    if (currentLine < selectedDialogue!.lines.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartPractice = (): void => {
    setCurrentLine(0);
    setUserRecordings([]);
    setFeedback([]);
    setShowResults(false);
  };

  const getLineFeedback = (lineIndex: number): PronunciationFeedback | undefined => {
    return feedback.find(fb => fb.lineIndex === lineIndex);
  };

  // ... остальная разметка аналогична предыдущей версии, но с TypeScript

  return (
    <main className="min-h-screen py-6 bg-bgLight dark:bg-bgDark transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Интерфейс выбора диалога */}
        {!selectedDialogue && (
          <div>
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100">
                Практика Произношения
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Выберите диалог для отработки английского произношения
              </p>
            </header>

            {!recognitionService && (
              <div className="mb-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-200">
                  ⚠️ Speech recognition не поддерживается в вашем браузере. 
                  Рекомендуем использовать Chrome или Edge для полной функциональности.
                </p>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {DIALOGUES.map(dialogue => (
                <div
                  key={dialogue.id}
                  className="rounded-2xl p-6 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedDialogue(dialogue)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {dialogue.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      dialogue.level === "Начальный" ? "bg-green-100 text-green-800" :
                      dialogue.level === "Средний" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {dialogue.level}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {dialogue.description}
                  </p>
                  <div className="text-sm text-slate-500 dark:text-slate-500">
                    {dialogue.lines.length} реплик
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Интерфейс практики */}
        {selectedDialogue && !showResults && (
          <div>
            {/* Заголовок и прогресс */}
            <header className="mb-8">
              <button
                onClick={() => setSelectedDialogue(null)}
                className="mb-4 px-4 py-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← Назад к выбору диалогов
              </button>
              <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                {selectedDialogue.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <span>Прогресс: {currentLine + 1} из {selectedDialogue.lines.length}</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentLine + 1) / selectedDialogue.lines.length) * 100}%` }}
                  />
                </div>
              </div>
            </header>

            {/* Текущая фраза */}
            <div className="rounded-2xl p-8 bg-white/60 dark:bg-[var(--color-bgItem)]/80 border border-slate-100 dark:border-slate-800 mb-6">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                  {selectedDialogue.lines[currentLine].speaker}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {selectedDialogue.lines[currentLine].text}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 italic">
                  {selectedDialogue.lines[currentLine].translation}
                </p>
              </div>

              {/* Кнопки записи */}
              <div className="flex justify-center gap-4">
                {!isRecording && !isProcessing ? (
                  <button
                    onClick={startRecording}
                    disabled={!recognitionService}
                    className="px-8 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="w-3 h-3 bg-white rounded-full" />
                    Начать запись
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="px-8 py-4 bg-slate-600 text-white rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <span className="w-3 h-3 bg-white rounded-full" />
                    {isProcessing ? 'Обработка...' : 'Остановить запись'}
                  </button>
                )}
              </div>

              {isRecording && (
                <div className="mt-4 text-center">
                  <div className="inline-flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div
                        key={i}
                        className="w-2 h-6 bg-red-500 rounded-full animate-pulse"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '0.8s'
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                    Идет запись... Говорите четко в микрофон
                  </p>
                </div>
              )}
            </div>

            {/* Дополнительные компоненты... */}
          </div>
        )}

        {/* Компонент результатов */}
        {showResults && selectedDialogue && (
          <div>
            {/* Результаты практики */}
          </div>
        )}
      </div>
    </main>
  );
}