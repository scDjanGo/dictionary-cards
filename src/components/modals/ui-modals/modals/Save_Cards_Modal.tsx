"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import { useCurrentCardsStore } from "@/lib/zustand";
import Container_Modals from "@/components/containers/Container_Modals";
import { FileDown, FileJson, FileText } from "lucide-react";



const Save_Cards_Modal: React.FC = () => {
  const offUiModalsStore = useUiModalsStore((state) => state.offUiModalsStore);
  const currentCards = useCurrentCardsStore((state) => state.currentCards);

  const handleSaveAsPDF = async () => {
    try {
      const [regularFontRes] = await Promise.all([
        fetch("/fonts/NotoSans/NotoSans.ttf"),
      ]);

      if (!regularFontRes.ok)
        throw new Error("Не удалось загрузить основной шрифт");

      const regularFontData = await regularFontRes.arrayBuffer();

      const doc = new jsPDF();

      doc.addFileToVFS(
        "NotoSans-Regular.ttf",
        arrayBufferToBase64(regularFontData)
      );
      doc.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");

      doc.setFont("NotoSans", "normal");
      doc.setFontSize(16);

      doc.text("Список карточек", 14, 20);

      const headers = [["Name", "Название", "Description", "Описание"]];

      const data = (currentCards || []).map((card) => [
        card.name || ".",
        card.intlName || ".",
        card.description || ".",
        card.intlDescription || ".",
      ]);

      if (data.length === 0) {
        doc.text("Нет данных для отображения", 14, 40);
      } else {
        autoTable(doc, {
          startY: 30,
          head: headers,
          body: data,
          styles: {
            font: "NotoSans",
            fontStyle: "normal",
            fontSize: 10,
            cellPadding: 3,
          },
          headStyles: {
            font: "NotoSans",
            fontStyle: "normal",
            fillColor: [25, 118, 210],
            textColor: 255,
            halign: "center",
          },
          didDrawCell: (data) => {
            if (data.section === "head") {
              doc.setFont("NotoSans", "bold");
            }
          },
        });
      }

      doc.save("cards.pdf");
    } catch (err) {
      console.error("Ошибка при генерации PDF:", err);
      alert("Не удалось создать PDF. Проверьте консоль для подробностей.");
    }
  };

  const handleSaveJSON = () => {
    const save = currentCards.map((item) => ({
      name: item.name,
      intlName: item.intlName,
      description: item.description,
      intlDescription: item.intlDescription,
    }));
    const jsonData = JSON.stringify(save, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cards_data.json";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleDownload = async (): Promise<Array<{
    name: string;
    intlName: string;
    description: string;
    intlDescription: string;
  }> | null> => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,.pdf";

    return new Promise((resolve) => {
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          alert("Файл не выбран");
          resolve(null);
          return;
        }

        const fileName = file.name.toLowerCase();
        const isJSON = fileName.endsWith(".json");
        const isPDF = fileName.endsWith(".pdf");

        if (!isJSON && !isPDF) {
          alert("Пожалуйста, выберите файл JSON или PDF");
          resolve(null);
          return;
        }

        try {
          if (isJSON) {
            const text = await file.text();
            const jsonData = JSON.parse(text);

            if (!Array.isArray(jsonData)) {
              alert("JSON файл должен содержать массив");
              resolve(null);
              return;
            }

            for (const item of jsonData) {
              const requiredKeys = [
                "name",
                "intlName",
                "description",
                "intlDescription",
              ];
              for (const key of requiredKeys) {
                if (!(key in item)) {
                  alert(`В JSON файле отсутствует ключ: ${key}`);
                  resolve(null);
                  return;
                }
              }
            }

            resolve(jsonData);
            setLocalStorage(jsonData);
          } else if (isPDF) {
            const data = (currentCards || []).map((card) => ({
              name: card.name || "",
              intlName: card.intlName || "",
              description: card.description || "",
              intlDescription: card.intlDescription || "",
            }));

            if (data.length === 0) {
              alert("Нет данных для отображения");
              resolve(null);
            } else {
              setLocalStorage(data);
              resolve(data);
            }
          }
        } catch (error) {
          console.error("Ошибка обработки файла:", error);
          alert("Произошла ошибка при обработке файла");
          resolve(null);
        }
      };

      input.click();
    });
  };

  function setLocalStorage(
    data: Array<{
      name: string;
      intlName: string;
      description: string;
      intlDescription: string;
    }>
  ) {
    const cards: any[] = JSON.parse(localStorage.getItem("my-cards") || "[]");
    const categories: any[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    let smallestCardId =
      cards.length > 0 ? Math.min(...cards.map((card) => card.id)) : -1;
    let smallestCategoryId =
      categories.length > 0 ? Math.min(...categories.map((cat) => cat.id)) : -1;

    const newCategory = {
      createDate: Date.now(),
      id: smallestCategoryId - 1,
      intlName: `Загруженные ${Math.abs(smallestCategoryId - 1)}`,
      name: `Downloaded ${Math.abs(smallestCategoryId - 1)}`,
    };

    const newCards = data.map((item, index) => ({
      catId: newCategory.id,
      name: item.name,
      intlName: item.intlName,
      description: item.description,
      intlDescription: item.intlDescription,
      inBasket: false,
      isUserCard: true,
      id: smallestCardId - 1 - index,
    }));

    categories.unshift(newCategory);
    cards.unshift(...newCards);

    localStorage.setItem("my-categories", JSON.stringify(categories));
    localStorage.setItem("my-cards", JSON.stringify(cards));

    window.location.reload();
    handleOffModal();
  }

  const handleOffModal = () => {
    offUiModalsStore();
  };

  return (
    <Container_Modals>
      <div className="bg-bgLight dark:bg-bgItem rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto">
        {/* Заголовки */}
        <h2 className="text-blueCl dark:text-bgLight text-center text-lg font-bold">
          Выберите вариант
        </h2>
        <h3 className="text-blueCl dark:text-bgLight text-[14px] text-center leading-tight font-bold mb-4 mt-2">
          При сохранении все карточки на этой странице будут сохранены
        </h3>

        {/* Кнопки */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleSaveAsPDF}
            className="flex justify-center items-center gap-2 border border-blueCl dark:border-bgLight text-blueCl dark:text-bgLight px-4 py-2 rounded-lg hover:bg-blueCl/10 transition"
          >
            <FileText className="w-5 h-5 text-blueCl  dark:text-bgLight" />
            Сохранить PDF
          </button>

          <button
            onClick={handleSaveJSON}
            className="flex justify-center items-center gap-2 border border-blueCl dark:border-bgLight text-blueCl dark:text-bgLight px-4 py-2 rounded-lg hover:bg-blueCl/10 transition"
          >
            <FileJson className="w-5 h-5 text-blueCl  dark:text-bgLight" />
            Сохранить JSON
          </button>

          <button
            onClick={handleDownload}
            className="flex justify-center items-center gap-2 border border-blueCl dark:border-bgLight text-blueCl dark:text-bgLight px-4 py-2 rounded-lg hover:bg-blueCl/10 transition"
          >
            <FileDown className="w-5 h-5 text-blueCl  dark:text-bgLight" />
            Загрузить
          </button>
        </div>
      </div>
    </Container_Modals>
  );
};

export default Save_Cards_Modal;
