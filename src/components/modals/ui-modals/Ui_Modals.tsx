"use client";

import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import Save_Cards_Modal from "./modals/Save_Cards_Modal";
import Create_Another_Card_Modal from "./modals/Create_Another_Card_Modal";
import Current_Card_Modal from "./modals/Current_Card_Modal";
import Successfully_Changed_Modal from "./modals/Successfully_Changed_Modal";
import Delete_Category_Modal from "./modals/Delete_Category_Modal";

export default function Ui_Modals() {
  const uiModals = useUiModalsStore((state) => state.uiModalsStore);

  if (!uiModals.state) return;

  switch (uiModals.value) {
    case "save-cards":
      return <Save_Cards_Modal />;
    case "create-another-card":
      return <Create_Another_Card_Modal />;
    case "change-card-successfully":
      return <Successfully_Changed_Modal />;
    case "delete-category":
      return <Delete_Category_Modal />;
    case "current-card":
      return <Current_Card_Modal />;
    default:
      return <Save_Cards_Modal />;
  }
}
