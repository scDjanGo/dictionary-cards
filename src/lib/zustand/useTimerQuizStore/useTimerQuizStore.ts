import { create } from "zustand";
import { persist } from 'zustand/middleware';

type TimerType = {
  value: number;
  stringValue: string; 
  useStartTimer: () => void; 
  useFinishTimer: () => void;
  isRunning: boolean;
};

let interval: NodeJS.Timeout | null = null;

const formatTime = (sec: number): string => {
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export const useTimerQuizStore = create<TimerType>()(
  persist(
    (set, get) => ({
      value: 0,
      stringValue: "00:00:00",
      isRunning: false,

      useStartTimer: () => {
        if (get().isRunning) return;

        const savedStart = sessionStorage.getItem("quiz_timer_start");
        let startTime: number;

        if (savedStart) {
          startTime = Number(savedStart);
        } else {
          startTime = Date.now();
          sessionStorage.setItem("quiz_timer_start", String(startTime));
        }

        set({ isRunning: true });

        // Очищаем предыдущий интервал на всякий случай
        if (interval) {
          clearInterval(interval);
        }

        interval = setInterval(() => {
          const now = Date.now();
          const secondsPassed = Math.floor((now - startTime) / 1000);

          set({
            value: secondsPassed,
            stringValue: formatTime(secondsPassed),
          });
        }, 1000);
      },

      useFinishTimer: () => {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        
        set({ 
          isRunning: false,
          value: 0,
          // stringValue: "00:00:00"
        });

        sessionStorage.removeItem("quiz_timer_start");
      },
    }),
    {
      name: 'timer-storage', // имя для localStorage
    }
  )
);