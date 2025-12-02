"use client";

interface LoadingOverlayProps {
  open: boolean;
  message?: string;
}

export default function Loading_Component({
  open,
  message = "Загрузка...",
}: LoadingOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 text-white">
      {/* Спиннер */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />

      {/* Текст */}
      <p className="mt-3 font-bold text-center">{message}</p>
    </div>
  );
}
