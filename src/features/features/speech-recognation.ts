// utils/speechRecognition.ts
// import { SpeechRecognitionResult, WordAnalysis } from '@/types/practice';
import { SpeechRecognitionResult, WordAnalysis } from "@/lib/types/types";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export class SpeechRecognitionService {
  private recognition: any;
  private isSupported: boolean;

  constructor() {
    this.isSupported = typeof window !== 'undefined' && 
      (window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  initialize(language: string = 'en-US'): boolean {
    if (!this.isSupported) return false;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = language;
    this.recognition.maxAlternatives = 3;

    return true;
  }

  startRecognition(): Promise<SpeechRecognitionResult> {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        reject(new Error('Speech recognition not initialized'));
        return;
      }

      let finalTranscript = '';
      let finalConfidence = 0;
      const words: SpeechRecognitionResult['words'] = [];

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          const confidence = event.results[i][0].confidence;
          
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
            finalConfidence = confidence;
            
            // Extract word-level data
            if (event.results[i][0].words) {
              event.results[i][0].words.forEach((wordInfo: any) => {
                words.push({
                  word: wordInfo.word,
                  confidence: wordInfo.confidence,
                  startTime: wordInfo.startTime,
                  endTime: wordInfo.endTime
                });
              });
            }
          } else {
            interimTranscript += transcript;
          }
        }
      };

      this.recognition.onend = () => {
        resolve({
          transcript: finalTranscript.trim(),
          confidence: finalConfidence,
          words
        });
      };

      this.recognition.onerror = (event: any) => {
        reject(new Error(`Speech recognition error: ${event.error}`));
      };

      this.recognition.start();
    });
  }

  stopRecognition(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  analyzePronunciation(expectedText: string, recognizedText: string, confidence: number): WordAnalysis[] {
    const expectedWords = expectedText.toLowerCase().split(/\s+/);
    const recognizedWords = recognizedText.toLowerCase().split(/\s+/);
    const analysis: WordAnalysis[] = [];

    for (let i = 0; i < Math.max(expectedWords.length, recognizedWords.length); i++) {
      const expectedWord = expectedWords[i] || '';
      const recognizedWord = recognizedWords[i] || '';
      
      const isCorrect = this.calculateWordSimilarity(expectedWord, recognizedWord) > 0.7;
      
      analysis.push({
        word: recognizedWord || '[пропущено]',
        expected: expectedWord,
        confidence,
        isCorrect,
        phonetics: this.getPhoneticTips(expectedWord, recognizedWord)
      });
    }

    return analysis;
  }

  private calculateWordSimilarity(word1: string, word2: string): number {
    if (word1 === word2) return 1.0;
    
    // Простой алгоритм сравнения слов
    const longer = word1.length > word2.length ? word1 : word2;
    const shorter = word1.length > word2.length ? word2 : word1;
    
    if (longer.length === 0) return 1.0;
    
    return (longer.length - this.editDistance(longer, shorter)) / longer.length;
  }

  private editDistance(s1: string, s2: string): number {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  private getPhoneticTips(expected: string, recognized: string): string {
    const tips: string[] = [];
    
    if (expected.includes('th') && !recognized.includes('th')) {
      tips.push('Звук "th" требует положения языка между зубами');
    }
    
    if (expected.endsWith('s') && !recognized.endsWith('s')) {
      tips.push('Не забывайте произносить окончания слов');
    }
    
    if (expected.length > recognized.length + 2) {
      tips.push('Произносите слова полностью, не "глотайте" окончания');
    }
    
    return tips.join('. ');
  }
}