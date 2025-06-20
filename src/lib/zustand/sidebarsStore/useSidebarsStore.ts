import { create } from "zustand";
import { typeSidebars } from "@/lib/types/types";

interface UseSidebarsStore {
  sidebarsStore: typeSidebars;

  setSidebarStore: (sidebar: typeSidebars["value"]) => void;
  onSidebarStore: () => void;
  offSidebarStore: (sidebar?: typeSidebars["value"]) => void;
}

export const useSidebarsStore = create<UseSidebarsStore>((set, get) => ({
  sidebarsStore: {
    value: "main-sidebar",
    state: false,
  },
  setSidebarStore: (sidebar) =>
    set({
      sidebarsStore: {
        value: sidebar,
        state: true,
      },
    }),
  onSidebarStore: () => {
    const current = get().sidebarsStore.value;
    set({
      sidebarsStore: {
        state: true,
        value: current,
      },
    });
  },
  offSidebarStore: (sidebar) => {
    const current = get().sidebarsStore.value;
    set({
      sidebarsStore: {
        state: false,
        value: sidebar ?? current,
      },
    });
  },
}));
