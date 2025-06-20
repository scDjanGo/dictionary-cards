import { create } from "zustand";
import { typeUiModals } from "@/lib/types/types";

interface UseModalsStore {
  uiModalsStore: typeUiModals;

  setUiModalsStore: (modal: typeUiModals["value"]) => void;
  onUiModalsStore: () => void;
  offUiModalsStore: (modal?: typeUiModals["value"]) => void;
}

export const useUiModalsStore = create<UseModalsStore>((set, get) => ({
  uiModalsStore: {
    value: "save-cards",
    state: false,
  },
  setUiModalsStore: (modal) =>
    set({
      uiModalsStore: {
        value: modal,
        state: true,
      },
    }),
  onUiModalsStore: () => {
    const current = get().uiModalsStore.value;
    set({
      uiModalsStore: {
        state: true,
        value: current,
      },
    });
  },
  offUiModalsStore: (modal) => {
    const current = get().uiModalsStore.value;
    set({
      uiModalsStore: {
        state: false,
        value: modal ?? current,
      },
    });
  },
}));
