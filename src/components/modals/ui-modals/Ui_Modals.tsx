"use client";

import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import Save_Cards_Modal from "./modals/Save_Cards_Modal";
import Create_Another_Card_Modal from "./modals/Create_Another_Card_Modal";
import Current_Card_Modal from "./modals/Current_Card_Modal";

export default function Ui_Modals() {
  const uiModals = useUiModalsStore((state) => state.uiModalsStore);

  if (!uiModals.state) return;

  switch (uiModals.value) {
    case "save-cards":
      return <Save_Cards_Modal />;
    case "create-another-card":
      return <Create_Another_Card_Modal />;
    case "current-card":
      return <Current_Card_Modal />;
    default:
      return <Save_Cards_Modal />;
  }
}
