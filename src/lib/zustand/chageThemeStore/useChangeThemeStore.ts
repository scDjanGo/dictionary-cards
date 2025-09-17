import { create } from "zustand";

type StoreType = {
  theme: boolean;
  toggleTheme: () => void;
  setTheme: (value: boolean) => void;
};

const useChangeThemeStore = create<StoreType>((set) => ({
  theme: false,
  toggleTheme() {
    set((prev) => ({ theme: !prev.theme }));
  },
  setTheme(value) {
    set({ theme: value });
  },
}));

export { useChangeThemeStore };
