"use client";

import { useUiModalsStore } from "@/lib/zustand";
import { useEffect } from "react";

export default function Container_Modals({
  children,
}: {
  children?: React.ReactNode;
}) {
  const uiModals = useUiModalsStore((state) => state.uiModalsStore.state);
  const offModal = useUiModalsStore((state) => state.offUiModalsStore);

  useEffect(() => {
    uiModals
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");

    return () => document.body.classList.remove("overflow-y-hidden");
  }, [uiModals]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        offModal();
      }}
      className={` fixed inset-0 z-100 flex items-center justify-center bg-black/50`}
    >
      <div onClick={(e) => e.stopPropagation()} >{children}</div>
    </div>
  );
}
