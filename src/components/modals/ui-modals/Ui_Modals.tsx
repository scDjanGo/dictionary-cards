"use client";

import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import Save_Cards_Modal from "./modals/Save_Cards_Modal";

export default function Ui_Modals() {
  const uiModals = useUiModalsStore((state) => state.uiModalsStore);

  if (!uiModals.state) return;

  switch (uiModals.value) {
    case "save-cards":
      return <Save_Cards_Modal />;

    default:
      return <Save_Cards_Modal />;
  }
}
